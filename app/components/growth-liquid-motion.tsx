"use client";

import { useEffect, useRef } from "react";

type Focus = "brand" | "demand" | "automation";
type Props = { focus: Focus; reduced: boolean; visible: boolean };

const colors: Record<Focus, string[]> = {
  brand: ["#f34b34", "#ffd5a7", "#613eb1", "#fb8052"],
  demand: ["#ec3f27", "#ffc463", "#e964aa", "#f79b55"],
  automation: ["#253b9a", "#82d6df", "#8472dd", "#2eb4c2"],
};

function ribbon(ctx: CanvasRenderingContext2D, w: number, h: number, time: number, lane: number, palette: string[]) {
  const unit = Math.min(w/850,h/600);
  const cx = w*.68, cy = h*.47;
  const amplitude = (lane === 0 ? .43 : lane === 1 ? .32 : .24)*w;
  const turn = time*(lane === 0 ? .36 : lane === 1 ? -.32 : .48)+lane*1.35;
  const displacement = Math.sin(turn)*38*unit;
  const thickness = (lane === 0 ? 106 : lane === 1 ? 67 : 31)*unit;
  const sweep = new Path2D();
  sweep.moveTo(cx-amplitude,cy-(lane===1?-1:1)*h*.38);
  sweep.bezierCurveTo(
    cx+amplitude*.86+displacement,cy-h*.85,
    cx-amplitude*.95+Math.cos(turn)*61*unit,cy+h*.76,
    cx+amplitude*.95,cy+(lane===1?-.20:.29)*h,
  );
  ctx.save();
  ctx.lineJoin="round";ctx.lineCap="round";
  ctx.shadowBlur=24*unit;ctx.shadowOffsetY=18*unit;ctx.shadowColor="rgba(54,25,38,.22)";
  ctx.strokeStyle="rgba(62,31,38,.1)";ctx.lineWidth=thickness+5*unit;ctx.stroke(sweep);
  ctx.shadowBlur=0;ctx.shadowOffsetY=0;
  const fill=ctx.createLinearGradient(cx-amplitude,cy-h*.55,cx+amplitude,cy+h*.6);
  fill.addColorStop(0,palette[lane===2?2:0]);
  fill.addColorStop(.22,palette[1]);
  fill.addColorStop(.48,palette[lane===1?2:0]);
  fill.addColorStop(.73,palette[3]);
  fill.addColorStop(1,palette[lane===0?2:0]);
  ctx.strokeStyle=fill;ctx.lineWidth=thickness;ctx.stroke(sweep);
  const highlight=ctx.createLinearGradient(cx,cy-h*.3,cx,cy+h*.5);
  highlight.addColorStop(0,"rgba(255,255,255,.65)");
  highlight.addColorStop(.5,"rgba(255,255,255,.07)");
  highlight.addColorStop(1,"rgba(255,255,255,.34)");
  ctx.strokeStyle=highlight;ctx.lineWidth=thickness*.13;ctx.stroke(sweep);
  ctx.restore();
}

export default function GrowthLiquidMotion({focus,reduced,visible}:Props) {
  const canvasRef=useRef<HTMLCanvasElement>(null);
  const focusRef=useRef(focus),reducedRef=useRef(reduced),visibleRef=useRef(visible);
  useEffect(()=>{focusRef.current=focus;},[focus]);
  useEffect(()=>{reducedRef.current=reduced;},[reduced]);
  useEffect(()=>{visibleRef.current=visible;},[visible]);

  useEffect(()=>{
    const canvas=canvasRef.current;
    const ctx=canvas?.getContext("2d",{alpha:true});
    if(!canvas||!ctx)return;
    let raf=0,last=0;
    let hidden=document.hidden;
    const started=performance.now();
    const resize=()=>{
      const rect=canvas.getBoundingClientRect();
      const scale=Math.min(window.devicePixelRatio||1,window.innerWidth<700?1:1.35);
      const w=Math.round(rect.width*scale),h=Math.round(rect.height*scale);
      if(w>0&&h>0&&(w!==canvas.width||h!==canvas.height)){canvas.width=w;canvas.height=h;}
    };
    const onVisibility=()=>{hidden=document.hidden;};
    const observer=typeof ResizeObserver==="undefined"?null:new ResizeObserver(resize);
    observer?.observe(canvas);
    document.addEventListener("visibilitychange",onVisibility);
    resize();
    const animate=(now:number)=>{
      raf=requestAnimationFrame(animate);
      if(hidden||!visibleRef.current||now-last<(reducedRef.current?250:38))return;
      last=now;resize();
      const w=canvas.width,h=canvas.height;
      if(!w||!h)return;
      ctx.clearRect(0,0,w,h);
      const t=reducedRef.current?0.8:(now-started)/1000;
      const palette=colors[focusRef.current];
      for(let i=2;i>=0;i--)ribbon(ctx,w,h,t,i,palette);
    };
    raf=requestAnimationFrame(animate);
    return()=>{cancelAnimationFrame(raf);observer?.disconnect();document.removeEventListener("visibilitychange",onVisibility);};
  },[]);

  return <canvas ref={canvasRef} className="dw-ed-liquid-canvas" aria-hidden="true"/>;
}
