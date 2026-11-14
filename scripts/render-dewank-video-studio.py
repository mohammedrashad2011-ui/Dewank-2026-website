#!/usr/bin/env python3
"""DEWANK Video Studio / original 18-second motion showreel.
Generated deterministically from vector geometry and original synthesized sound.
No stock video, no borrowed music, no external model/API calls.
"""
import os, math, random, subprocess, wave
from pathlib import Path
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

OUT = Path(os.environ.get('DEWANK_VIDEO_OUT', '/mnt/data/dewank-video-studio-motion.mp4'))
OUT.parent.mkdir(parents=True, exist_ok=True)
W, H, FPS, DURATION = 720, 1280, 24, 18
NAVY=(1,17,39); GOLD=(235,176,46); CREAM=(252,246,234); CYAN=(1,221,241)
VIOLET=(145,83,246); CORAL=(249,108,128)
TAU=math.tau

def clamp(v,a=0,b=1):return max(a,min(b,v))
def ease(v):
 v=clamp(v);return v*v*(3-2*v)
def lerp(a,b,t):return a+(b-a)*t

def font_file(family):
 try:
  x=subprocess.check_output(['fc-match','-f','%{file}',family],text=True).strip()
  if x and Path(x).is_file():return x
 except Exception:pass
 return '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
F_BOLD=font_file('DejaVu Sans:style=Bold')
F_REG=font_file('DejaVu Sans')
F_ARABIC=font_file('Noto Sans Arabic:style=Bold')
F_AR_REG=font_file('Noto Sans Arabic')
FONTS={}
def font(size,bold=False,arabic=False):
 key=(size,bold,arabic)
 if key not in FONTS:
  FONTS[key]=ImageFont.truetype((F_ARABIC if bold else F_AR_REG) if arabic else (F_BOLD if bold else F_REG),size)
 return FONTS[key]

def rgba(rgb,a=255):return (rgb[0],rgb[1],rgb[2],int(clamp(a,0,255)))

def text(draw, xy, string, size, color=CREAM,bold=False,anchor='lt',arabic=False,spacing=0):
 # Pillow RAQM performs correct Arabic shaping on Linux.
 opts={'font':font(size,bold,arabic),'fill':rgba(color),'anchor':anchor,
       'stroke_width':0}
 if arabic:opts['direction']='rtl'
 draw.text(xy,string,**opts)

def rounded(draw,rect,radius,fill,outline=None,width=1):
 draw.rounded_rectangle(tuple(round(v) for v in rect),radius=radius,fill=fill,outline=outline,width=width)

def line(draw,points,fill,width=2):
 draw.line(points,fill=fill,width=width,joint='curve')

# Readable atmosphere: premultiplied gradient and subtle grid precomputed once.
y,x=np.mgrid[0:H,0:W].astype(np.float32)
vignette=np.clip(1-0.44*((x-W/2)/(W/2))**2-0.19*((y-H/2)/(H/2))**2,.3,1)
backgrounds=[]
for ci in range(5):
 rgb=np.zeros((H,W,3),dtype=np.float32)
 base=np.array(NAVY,dtype=np.float32)
 rgb[:]=base
 gx=[.53,.27,.6,.67,.5][ci]*W;gy=[.39,.3,.47,.46,.49][ci]*H
 for cx,cy,col,sx,sy,power in [
  (gx,gy,[(1,82,100),(43,53,95),(50,31,110),(35,55,81),(27,66,89)][ci],320,530,.66),
  (W*.83,H*.7,[(71,42,33),(56,33,65),(12,95,100),(76,45,51),(88,58,22)][ci],310,380,.47),
  (W*.12,H*.14,(26,65,82),320,430,.36)
 ]:
  dist=((x-cx)/sx)**2+((y-cy)/sy)**2
  rgb+=np.exp(-dist*1.05)[...,None]*np.array(col,dtype=np.float32)*power
 rgb*=vignette[...,None]
 rgb=np.clip(rgb,0,255).astype('uint8')
 # Fine architectural grid, subtly behind content.
 im=Image.fromarray(rgb,'RGB').convert('RGBA')
 gd=ImageDraw.Draw(im,'RGBA')
 for xx in range(42,W,60):gd.line((xx,0,xx,H),fill=(23,50,67,255),width=1)
 for yy in range(42,H,60):gd.line((0,yy,W,yy),fill=(19,44,61,255),width=1)
 backgrounds.append(im)

def glow(im,cx,cy,r,color,alpha=0.5):
 # Small source and Gaussian blur preserve smoothness with modest frame cost.
 layer=Image.new('RGBA',(W,H));d=ImageDraw.Draw(layer,'RGBA')
 d.ellipse((cx-r,cy-r,cx+r,cy+r),fill=rgba(color,int(155*alpha)))
 layer=layer.filter(ImageFilter.GaussianBlur(max(12,int(r*.64))))
 return Image.alpha_composite(im,layer)

def scene_progress(t,start,duration):return clamp((t-start)/duration)

def wipe(t,start,dur=.62):return ease((t-start)/dur)

def particles(draw,t,section,n=38):
 rng=random.Random(1033+section)
 for i in range(n):
  px=rng.uniform(8,W-8)
  py=(rng.uniform(0,H)+t*(8+i%4*7))%H
  radius=1 if i%5 else 2
  col=CYAN if i%4==0 else GOLD if i%7==0 else (178,215,226)
  a=30+int(52*(math.sin(t*1.8+i*.9)+1)/2)
  draw.ellipse((px-radius,py-radius,px+radius,py+radius),fill=rgba(col,a))

def header(draw,name,num,t):
 rounded(draw,(40,52,680,111),15,rgba((8,31,53),185),rgba((148,205,219),42),1)
 text(draw,(65,79),'DEWANK',25,CREAM,True,anchor='lm')
 line(draw,[(205,68),(205,94)],rgba(GOLD,150),2)
 text(draw,(225,79),name,14,(165,202,216),True,anchor='lm')
 text(draw,(655,79),num,17,GOLD,True,anchor='rm')

def frame_open(t):
 im=backgrounds[0].copy(); d=ImageDraw.Draw(im,'RGBA');particles(d,t,0,28)
 header(d,'VIDEO STUDIO','00',t)
 p=scene_progress(t,0,3.5)
 # Central kinetic orbit: amber/cyan sculpture showing production motion.
 center=(W//2,365)
 rad=155+10*math.sin(t*1.6)
 im=glow(im,center[0],center[1],165,CYAN,.28)
 d=ImageDraw.Draw(im,'RGBA')
 for k in range(3):
  phase=t*(.65+k*.22)+k*.7
  ax=int(rad*(.96-.12*k));ay=int(rad*(.66+.05*k))
  rect=(center[0]-ax,center[1]-ay,center[0]+ax,center[1]+ay)
  c=[rgba(CYAN,140),rgba(GOLD,175),rgba((255,255,255),70)][k]
  d.arc(rect,int(phase*40),int(phase*40)+245,fill=c,width=4 if k==1 else 3)
  for j in range(4):
   a=phase*1.2+j*math.pi/2
   px=center[0]+ax*math.cos(a);py=center[1]+ay*math.sin(a)
   d.ellipse((px-3,py-3,px+3,py+3),fill=rgba(GOLD if k==1 else CYAN,240))
 # A luminous layered shape, anchored to the studio identity.
 for q in range(18,0,-1):
  rr=42+q*3
  alpha=int(5+(18-q)*.85)
  d.ellipse((center[0]-rr,center[1]-rr,center[0]+rr,center[1]+rr),fill=rgba((110,199,200),alpha))
 d.rounded_rectangle((286,300,434,430),radius=36,fill=(240,192,89,232),outline=(255,242,205,230),width=3)
 d.rounded_rectangle((307,318,412,412),radius=26,fill=(42,70,89,255),outline=(255,237,163,140),width=2)
 d.polygon([(335,335),(335,395),(385,365)],fill=rgba(GOLD))
 # Opening headline is staggered by editorial timing.
 reveal=wipe(t,.35,.7)
 y0=730+int((1-reveal)*54)
 text(d,(W//2,y0),'A NEW KIND',48,CREAM,True,anchor='mm')
 text(d,(W//2,y0+69),'OF CREATIVE.',55,GOLD,True,anchor='mm')
 text(d,(W//2,905),'مونتاج. ذكاء اصطناعي. إعلانات.',26,CREAM,True,arabic=True,anchor='mm')
 line(d,[(95,983),(625,983)],rgba(CYAN,110),2)
 text(d,(W//2,1042),'ONE STUDIO. THREE WAYS TO CREATE.',19,(159,203,215),True,anchor='mm')
 text(d,(W//2,1167),'SCROLL-STOPPING CONTENT',14,(190,203,218),False,anchor='mm')
 return im

def clip_card(im,rect,col,title,sub,shift=0):
 d=ImageDraw.Draw(im,'RGBA')
 x1,y1,x2,y2=rect
 rounded(d,(x1+5,y1+11,x2+5,y2+11),15,rgba((0,0,0),85))
 rounded(d,rect,15,rgba((12,27,49),247),rgba((210,224,243),95),2)
 # Thumbnail fills upper part of the card.
 rounded(d,(x1+12,y1+12,x2-12,y1+(y2-y1)*.73),11,rgba(col,225))
 cx=(x1+x2)/2;cy=y1+(y2-y1)*.40
 rr=min(64,(x2-x1)*.21)
 d.ellipse((cx-rr,cy-rr,cx+rr,cy+rr),fill=rgba((255,255,255),45),outline=rgba((255,255,255),110),width=2)
 d.polygon([(cx-25,cy-38),(cx+33,cy-8),(cx+8,cy+48),(cx-38,cy+21)],fill=rgba(GOLD if title!='CUT 03' else CYAN,220))
 text(d,(x1+17,y2-53),title,17,CREAM,True)
 text(d,(x1+17,y2-28),sub,11,(178,204,221))

def frame_edit(t):
 im=backgrounds[1].copy();d=ImageDraw.Draw(im,'RGBA');particles(d,t,1,21)
 header(d,'EDIT FROM FOOTAGE','01',t)
 p=scene_progress(t,3.5,3.4)
 text(d,(45,188),'01 / REELS EDITING',20,CYAN,True)
 text(d,(45,264),'FOOTAGE',62,CREAM,True)
 text(d,(45,342),'→ FEELING.',64,GOLD,True)
 text(d,(49,401),'من خاماتك إلى ريل يوقف التمرير',24,(226,231,227),True,arabic=True)
 # Three moving cut cards on a diagonal track.
 shifts=[wipe(t,3.75+i*.22,.62) for i in range(3)]
 cards=[(55,500,248,831),(264,457,457,788),(474,500,667,831)]
 cols=[(40,107,124),(144,67,112),(88,91,174)]
 for i,rect in enumerate(cards):
  yoff=int((1-shifts[i])*185)
  xoff=int(13*math.sin(t*1.2+i*1.6))
  rec=(rect[0]+xoff,rect[1]+yoff,rect[2]+xoff,rect[3]+yoff)
  clip_card(im,rec,cols[i],'CUT 0'+str(i+1),['RAW','GRADE','POLISH'][i])
 d=ImageDraw.Draw(im,'RGBA')
 # Timeline and moving playhead, no bogus video analytics.
 rounded(d,(42,887,678,1029),13,rgba((6,24,43),217),rgba((151,199,215),75))
 text(d,(63,913),'EDIT / TIMELINE',15,(174,216,225),True)
 for i in range(6):
  x1=63+i*98
  rounded(d,(x1,949,x1+89,990),5,rgba([CYAN,GOLD,VIOLET,CORAL,CYAN,GOLD][i],155),rgba((255,255,255),55))
 playX=63+int(p*594)
 line(d,[(playX,941),(playX,1013)],rgba(CREAM,235),3)
 d.polygon([(playX-7,939),(playX+7,939),(playX,949)],fill=rgba(CREAM))
 text(d,(W//2,1102),'CUT  •  GRADE  •  CAPTION  •  DELIVER',17,CREAM,True,anchor='mm')
 return im

def frame_ai(t):
 im=backgrounds[2].copy();d=ImageDraw.Draw(im,'RGBA');particles(d,t,2,37)
 header(d,'GENERATIVE VIDEO','02',t)
 text(d,(45,191),'02 / AI VIDEO',20,CYAN,True)
 text(d,(45,271),'FROM AN IDEA',57,CREAM,True)
 text(d,(45,344),'TO A WORLD.',59,GOLD,True)
 text(d,(45,415),'مشاهد مبتكرة دون تصوير ميداني',24,(217,229,231),True,arabic=True)
 p=scene_progress(t,6.9,3.6)
 # Radial nodes / holographic window planes.
 center=(W/2,775)
 for i in range(9):
  a=i*TAU/9+t*(.27 if i%2==0 else -.22)
  rr=205+19*math.sin(t*1.7+i)
  px=center[0]+rr*math.cos(a)
  py=center[1]+rr*.74*math.sin(a)
  line(d,[(center[0],center[1]),(px,py)],rgba(CYAN if i%3 else GOLD,75),2)
  d.ellipse((px-7,py-7,px+7,py+7),fill=rgba((12,42,57),255),outline=rgba(CYAN if i%3 else GOLD,180),width=2)
 # Orb and orbital rings
 for k in range(6):
  r=98+k*27
  d.arc((center[0]-r,center[1]-r*.72,center[0]+r,center[1]+r*.72),int(12*t+k*35),int(12*t+k*35)+185,fill=rgba(CYAN if k%2 else GOLD,165-k*18),width=3)
 d.ellipse((center[0]-112,center[1]-112,center[0]+112,center[1]+112),fill=rgba((22,62,94),240),outline=rgba((210,247,248),150),width=3)
 for j in range(22,0,-1):
  rad=14+j*3
  c=(35+int(80*j/22),110+int(90*j/22),145+int(80*j/22))
  d.ellipse((center[0]-rad,center[1]-rad,center[0]+rad,center[1]+rad),fill=rgba(c,17))
 d.ellipse((center[0]-37,center[1]-37,center[0]+37,center[1]+37),fill=rgba(CYAN,222),outline=rgba(CREAM,220),width=3)
 # Four app-style frames, carefully abstract, no misleading software trademarks.
 for i,(xx,yy) in enumerate([(60,577),(520,597),(65,939),(520,950)]):
  smallx=105;smally=100
  rounded(d,(xx,yy,xx+smallx,yy+smally),12,rgba((19,43,62),195),rgba(CYAN if i%2==0 else GOLD,165),2)
  d.ellipse((xx+25,yy+23,xx+48,yy+46),fill=rgba(GOLD if i%2 else CYAN,185))
  line(d,[(xx+21,yy+75),(xx+48,yy+53),(xx+75,yy+69)],rgba((242,250,252),164),3)
 text(d,(W//2,1128),'DESIGN. GENERATE. REFINE.',20,(221,242,246),True,anchor='mm')
 return im

def ad_card(im,box,kind,t):
 d=ImageDraw.Draw(im,'RGBA');x1,y1,x2,y2=box
 rounded(d,(x1+5,y1+9,x2+5,y2+9),14,rgba((0,0,0),85))
 rounded(d,box,14,rgba((9,31,53),232),rgba((229,229,227),105))
 w=x2-x1
 rounded(d,(x1+14,y1+17,x2-14,y1+244),10,rgba(CORAL if kind==0 else CYAN if kind==1 else VIOLET,120))
 # Polished stylised product shape (not an actual product photo).
 cx=(x1+x2)/2
 d.rounded_rectangle((cx-35,y1+75,cx+35,y1+204),radius=18,fill=rgba((240,231,222),210),outline=rgba((255,255,255),200))
 d.rounded_rectangle((cx-22,y1+55,cx+22,y1+78),radius=6,fill=rgba(GOLD if kind==0 else (23,83,96),220))
 d.line([(x1+20,y1+274),(x2-20,y1+274)],fill=rgba((188,222,230),100),width=2)
 text(d,(x1+20,y1+293),['HOOK A','HOOK B','CTA TEST'][kind],19,CREAM,True)
 rounded(d,(x1+20,y2-69,x2-20,y2-27),8,rgba(GOLD if kind==2 else CYAN,215))
 text(d,(cx,y2-48),'EXPLORE',12,NAVY,True,anchor='mm')

def frame_ads(t):
 im=backgrounds[3].copy();d=ImageDraw.Draw(im,'RGBA');particles(d,t,3,29)
 header(d,'AD CREATIVES','03',t)
 text(d,(42,191),'03 / VIDEO ADS',20,CYAN,True)
 text(d,(42,270),'MAKE THEM',59,CREAM,True)
 text(d,(42,347),'STOP & CLICK.',56,GOLD,True)
 text(d,(42,414),'فيديو إعلاني برسالة واضحة',25,(225,234,232),True,arabic=True)
 p=scene_progress(t,10.5,3.5)
 for i,box in enumerate([(27,516,245,990),(251,478,469,952),(475,516,693,990)]):
  f=wipe(t,10.7+i*.18,.55)
  off=int((1-f)*140)
  box2=(box[0],box[1]+off,box[2],box[3]+off)
  ad_card(im,box2,i,t)
 d=ImageDraw.Draw(im,'RGBA')
 text(d,(W//2,1110),'HOOK   +   OFFER   +   ACTION',21,CREAM,True,anchor='mm')
 line(d,[(112,1175),(608,1175)],rgba(GOLD,130),2)
 return im

def frame_end(t):
 im=backgrounds[4].copy();d=ImageDraw.Draw(im,'RGBA');particles(d,t,4,44)
 p=scene_progress(t,14,4)
 center=(W/2,520)
 for k in range(4):
  r=135+k*46+12*math.sin(t*.6+k)
  d.arc((center[0]-r,center[1]-r*.78,center[0]+r,center[1]+r*.78),int(t*17+k*41),int(t*17+k*41)+170,fill=rgba([CYAN,GOLD,CYAN,GOLD][k],155-k*22),width=3)
 text(d,(W//2,250),'DEWANK',93,CREAM,True,anchor='mm')
 text(d,(W//2,341),'VIDEO STUDIO',27,GOLD,True,anchor='mm')
 # Graphic CTA in brand ivory/gold; avoid claiming a clickable video button.
 rounded(d,(115,635,605,739),21,rgba((235,176,46),245))
 text(d,(W//2,687),'صوّر فكرتك مع ديوانك',32,NAVY,True,arabic=True,anchor='mm')
 text(d,(W//2,845),'EDITING    /    AI VIDEO    /    VIDEO ADS',18,CREAM,True,anchor='mm')
 text(d,(W//2,945),'ONE STUDIO. ENDLESS IDEAS.',27,(184,221,226),True,anchor='mm')
 line(d,[(150,1012),(570,1012)],rgba(GOLD,170),2)
 text(d,(W//2,1086),'DEWANK.COM',32,GOLD,True,anchor='mm')
 text(d,(W//2,1160),'YOUR NEXT FRAME STARTS HERE',13,(183,204,215),True,anchor='mm')
 return im

def render(t):
 if t<3.5:im=frame_open(t)
 elif t<6.9:im=frame_edit(t)
 elif t<10.5:im=frame_ai(t)
 elif t<14:im=frame_ads(t)
 else:im=frame_end(t)
 # 180 ms very dark editorial cuts, not white flashes. Keep titles readable after the cut.
 d=ImageDraw.Draw(im,'RGBA')
 for boundary in [3.5,6.9,10.5,14]:
  diff=abs(t-boundary)
  if diff<.17:
   opa=int(180*(1-diff/.17))
   im=Image.blend(im,Image.new('RGBA',(W,H),rgba(NAVY,255)),opa/255)
 # Top/bottom safe overlays on video UI.
 return im.convert('RGB')

def generate_audio(path):
 sr=44100; n=int(sr*DURATION);t=np.arange(n,dtype=np.float64)/sr
 # All-original synth music: D minor pentatonic pluck, clean dark-pulse bed.
 sound=np.zeros(n,dtype=np.float64)
 notes=[146.83,174.61,196.00,220.00,261.63,293.66]
 for i,start in enumerate(np.arange(0,DURATION,.75)):
  f=notes[(i*3+i//4)%len(notes)]
  tau=t-start;mask=(tau>=0)&(tau<.73)
  env=np.zeros(n);env[mask]=np.exp(-tau[mask]*5.7)*(1-np.exp(-tau[mask]*120))
  sound+=.10*env*(np.sin(TAU*f*np.maximum(tau,0))+.32*np.sin(TAU*2*f*np.maximum(tau,0)))
 # Ambient pad gently builds through the motion acts.
 for f in [73.42,110,146.83]:
  sound+=.012*np.sin(TAU*f*t+2*np.sin(TAU*.13*t))
 # Soft impacts on section transitions, with low pass-like harmonic content.
 rng=np.random.default_rng(415)
 for at in [0,.75,3.5,6.9,10.5,14,17.3]:
  z=t-at;mask=(z>=0)&(z<.5)
  burst=np.zeros(n);zz=z[mask];
  burst[mask]=.22*np.sin(TAU*(82-37*zz)*zz)*np.exp(-zz*13)
  sound+=burst
 for at in [3.78,4.03,4.31,10.77,11.02,11.28]:
  z=t-at;mask=(z>=0)&(z<.12)
  texture=np.zeros(n);zz=z[mask]
  texture[mask]=rng.normal(0,.03,len(zz))*np.exp(-zz*35)
  sound+=texture
 # 500ms fade endpoints. A dedicated mute option still belongs to the visitor.
 fade=np.minimum(1,np.minimum(t/.48,(DURATION-t)/.8))
 sound*=np.maximum(0,fade)
 sound=np.tanh(sound*1.15)*.62
 pcm=np.clip(sound*32767,-32767,32767).astype(np.int16)
 with wave.open(str(path),'wb') as wf:
  wf.setnchannels(1);wf.setsampwidth(2);wf.setframerate(sr);wf.writeframes(pcm.tobytes())


def main():
 temp=OUT.with_suffix('.audio.wav')
 generate_audio(temp)
 video=OUT.with_suffix('.video.mp4')
 cmd=['ffmpeg','-hide_banner','-loglevel','error','-y','-f','rawvideo','-pixel_format','rgb24','-video_size',f'{W}x{H}',
       '-framerate',str(FPS),'-i','-', '-c:v','libx264','-preset','veryfast','-crf','26','-pix_fmt','yuv420p',
       '-movflags','+faststart','-an',str(video)]
 proc=subprocess.Popen(cmd,stdin=subprocess.PIPE,stderr=subprocess.PIPE)
 for idx in range(FPS*DURATION):
  frame=render(idx/FPS)
  if idx in [24,90,120,176,250,322,383]:
   frame.save(OUT.with_name(OUT.stem+f'-frame-{idx:03d}.jpg'),quality=80)
  try:proc.stdin.write(np.asarray(frame,dtype=np.uint8).tobytes())
  except BrokenPipeError:raise RuntimeError(proc.stderr.read().decode())
  if idx%72==0:print('frames',idx,'/',FPS*DURATION,flush=True)
 proc.stdin.close();code=proc.wait()
 if code:raise RuntimeError('ffmpeg encode failed: '+proc.stderr.read().decode())
 subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y','-i',str(video),'-i',str(temp),
                 '-c:v','copy','-c:a','aac','-b:a','96k','-shortest','-movflags','+faststart',str(OUT)],check=True)
 temp.unlink(missing_ok=True);video.unlink(missing_ok=True)
 print('OUTPUT',OUT,OUT.stat().st_size,'bytes',flush=True)

if __name__=='__main__':main()
