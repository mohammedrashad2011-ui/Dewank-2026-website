"use client";

import { useEffect, useRef } from "react";

const vertexShader = `#version 300 es
in vec2 aPosition;
out vec2 vUv;
void main() {
  vUv = aPosition * .5 + .5;
  gl_Position = vec4(aPosition, 0., 1.);
}`;

const fragmentShader = `#version 300 es
precision highp float;

in vec2 vUv;
out vec4 fragColor;

uniform vec2 uResolution;
uniform float uTime;
uniform float uMode;
uniform float uScroll;
uniform vec2 uPointer;

const float PI = 3.14159265359;

mat2 rotate2(float a) {
  float c = cos(a), s = sin(a);
  return mat2(c, -s, s, c);
}

float torus(vec3 p, vec2 t) {
  return length(vec2(length(p.xz)-t.x,p.y)) - t.y;
}

float smoothUnion(float a,float b,float k) {
  float h = clamp(.5+.5*(b-a)/k, 0., 1.);
  return mix(b,a,h)-k*h*(1.-h);
}

float sceneMap(vec3 pos) {
  vec3 p = pos;
  float spin = uTime * .16 + uScroll * .22;
  p.xz *= rotate2(spin + uPointer.x * .18);
  p.xy *= rotate2(.17 + uPointer.y * .16);
  vec3 a = p;
  a.xy *= rotate2(.94 + .23 * sin(uTime * .26));
  vec3 b = p;
  b.yz *= rotate2(-1.14 + uMode * .23);
  vec3 c = p;
  c.xy *= rotate2(-.95 - uMode * .16);
  c.xz *= rotate2(.62);
  float root = torus(a,vec2(.84,.11));
  float secondary = torus(b,vec2(.75,.085));
  float tertiary = torus(c,vec2(.91,.058));
  float merged = smoothUnion(root,secondary,.16);
  float thirdWeight = smoothstep(.08,1.7,uMode);
  merged = smoothUnion(merged,mix(1.5,tertiary,thirdWeight),.085);
  vec3 core = p;
  core.xy *= rotate2(-.28);
  float central = length(core*vec3(1.,1.22,.88))-.29;
  return min(merged,central);
}

vec3 normalAt(vec3 p) {
  vec2 e=vec2(.002,0.);
  return normalize(vec3(
    sceneMap(p+e.xyy)-sceneMap(p-e.xyy),
    sceneMap(p+e.yxy)-sceneMap(p-e.yxy),
    sceneMap(p+e.yyx)-sceneMap(p-e.yyx)
  ));
}

float noise(vec2 p) {
  return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);
}

void main() {
  vec2 uv = (gl_FragCoord.xy-.5*uResolution.xy)/min(uResolution.x,uResolution.y);
  float vignette = length(uv * vec2(.89,1.14));
  vec3 bg = mix(vec3(.013,.03,.056),vec3(.016,.049,.072),.38+uv.y*.23);
  bg += vec3(.07,.095,.085)*exp(-4.8*vignette*vignette);
  float radial = pow(clamp(1.-length(uv)*.91,0.,1.),3.);
  bg += vec3(.015,.045,.052)*radial;
  vec3 eye = vec3(uPointer.x*.12,uPointer.y*.11,3.8);
  vec3 direction = normalize(vec3(uv*.90,-1.9));
  float distanceAlong = 0.;
  float minSdf = 100.;
  vec3 hitPoint = vec3(0.);
  bool hit = false;
  for (int i=0;i<73;i++) {
    vec3 pt=eye+direction*distanceAlong;
    float d=sceneMap(pt);
    minSdf=min(minSdf,abs(d));
    if(d<.002) {hitPoint=pt;hit=true;break;}
    distanceAlong+=clamp(d,.014,.12);
    if(distanceAlong>8.) break;
  }
  vec3 pixel=bg;
  float halo = pow(clamp(1.-minSdf*2.5,0.,1.),4.)*.26;
  pixel += mix(vec3(.55,.31,.055),vec3(.06,.48,.49),clamp(uMode*.38,0.,.7))*halo;
  if(hit) {
    vec3 n=normalAt(hitPoint);
    vec3 light1=normalize(vec3(-.7,.9,1.3));
    vec3 light2=normalize(vec3(1.4,-.4,.6));
    float key=max(dot(n,light1),0.);
    float rim=pow(1.-max(dot(n,-direction),0.),2.6);
    float reflected=pow(max(dot(reflect(-light1,n),-direction),0.),28.);
    float secondary=pow(max(dot(reflect(-light2,n),-direction),0.),40.);
    float stripe=.5+.5*sin(hitPoint.y*8.+hitPoint.x*4.+uTime*.12);
    vec3 deepGold=vec3(.24,.125,.035);
    vec3 gold=vec3(1.,.69,.235);
    vec3 teal=vec3(.12,.81,.86);
    float blend=smoothstep(.3,2.1,uMode)*.48;
    vec3 material=mix(deepGold,gold,clamp(.19+key*.8+stripe*.12,0.,1.));
    material=mix(material,teal,blend*.55+blend*rim*.33);
    material+=vec3(1.,.91,.64)*reflected*1.35;
    material+=vec3(.3,.91,1.)*secondary*.48;
    material+=mix(vec3(.54,.27,.07),vec3(.07,.56,.67),blend)*rim*.82;
    float fog=exp(-distanceAlong*.06);
    pixel=mix(bg,material,fog);
  }
  float grain=(noise(gl_FragCoord.xy+uTime*.4)-.5)*.018;
  pixel+=grain;
  pixel*=1.-smoothstep(.28,1.35,vignette);
  pixel=max(pixel,vec3(0.));
  pixel=pow(pixel,vec3(.89));
  fragColor=vec4(pixel,1.);
}`;

function compile(gl: WebGL2RenderingContext, kind: number, source: string) {
  const shader = gl.createShader(kind);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function GrowthArtifactCanvas({ mode }: { mode: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modeRef = useRef(mode);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => { modeRef.current = mode; }, [mode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl2", {
      alpha: false, antialias: false, powerPreference: "low-power",
      preserveDrawingBuffer: false,
    });
    if (!gl) return;
    const vertex = compile(gl, gl.VERTEX_SHADER, vertexShader);
    const fragment = compile(gl, gl.FRAGMENT_SHADER, fragmentShader);
    if (!vertex || !fragment) {
      if (vertex) gl.deleteShader(vertex);
      if (fragment) gl.deleteShader(fragment);
      return;
    }
    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
      return;
    }

    const vertices = gl.createBuffer();
    if (!vertices) return;
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertices);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const resolution = gl.getUniformLocation(program, "uResolution");
    const clock = gl.getUniformLocation(program, "uTime");
    const scene = gl.getUniformLocation(program, "uMode");
    const pointer = gl.getUniformLocation(program, "uPointer");
    const scroll = gl.getUniformLocation(program, "uScroll");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let visible = true;
    let disposed = false;
    let frame = 0;
    let sceneValue = modeRef.current;
    let pointerX = 0;
    let pointerY = 0;
    let scrollValue = 0;
    let last = 0;
    const start = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const factor = window.innerWidth < 700 ? .78 : Math.min(window.devicePixelRatio || 1, 1.25);
      const width = Math.round(rect.width * factor);
      const height = Math.round(rect.height * factor);
      if (width !== canvas.width || height !== canvas.height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0,0,width,height);
      }
    };

    const render = (now: number) => {
      if(disposed) return;
      frame = window.requestAnimationFrame(render);
      if ((!visible || document.hidden) && !reduced) return;
      if(now-last < (reduced ? 240 : (window.innerWidth<700 ? 42 : 24))) return;
      last = now;
      resize();
      if (!canvas.width || !canvas.height) return;
      const progress = reduced ? 1 : Math.min((now-start)/1450,1);
      sceneValue += (modeRef.current-sceneValue)*Math.min(progress*.13+.04,.21);
      pointerX += (pointerRef.current.x-pointerX)*.055;
      pointerY += (pointerRef.current.y-pointerY)*.055;
      gl.useProgram(program);
      gl.uniform2f(resolution,canvas.width,canvas.height);
      gl.uniform1f(clock,reduced?0:(now-start)*.001);
      gl.uniform1f(scene,sceneValue);
      gl.uniform2f(pointer,reduced?0:pointerX,reduced?0:pointerY);
      gl.uniform1f(scroll,reduced?0:scrollValue);
      gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
      
    };

    const visibilityObserver = new IntersectionObserver(entries => {
      visible=entries.some(entry=>entry.isIntersecting);
    },{threshold:.06});
    visibilityObserver.observe(canvas);
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const onScroll = () => {
      const rect = canvas.getBoundingClientRect();
      scrollValue = Math.max(-1,Math.min(1,(rect.top+rect.height*.5-window.innerHeight*.5)/window.innerHeight));
    };
    const onMove = (event: PointerEvent) => {
      const box=canvas.getBoundingClientRect();
      pointerRef.current.x=((event.clientX-box.left)/box.width-.5)*2;
      pointerRef.current.y=-((event.clientY-box.top)/box.height-.5)*2;
    };
    const onExit = () => {pointerRef.current={x:0,y:0};};
    canvas.addEventListener("pointermove",onMove,{passive:true});
    canvas.addEventListener("pointerleave",onExit);
    window.addEventListener("scroll",onScroll,{passive:true});
    onScroll();
    resize();
    frame=window.requestAnimationFrame(render);

    return () => {
      disposed=true;
      window.cancelAnimationFrame(frame);
      visibilityObserver.disconnect();
      resizeObserver.disconnect();
      canvas.removeEventListener("pointermove",onMove);
      canvas.removeEventListener("pointerleave",onExit);
      window.removeEventListener("scroll",onScroll);
      gl.deleteBuffer(vertices);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, []);

  return <canvas ref={canvasRef} className="ge-artifact-canvas" aria-hidden="true" />;
}
