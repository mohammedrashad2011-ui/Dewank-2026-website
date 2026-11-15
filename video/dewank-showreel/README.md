# Dewank showreel 2026: "From idea to impact"

Editable source of the 19-second showreel on `/offers/ai-video-production`.
It is a HyperFrames project (HTML + GSAP, rendered frame by frame).

- Composition: `index.html` (1080×1920, 30 fps, 19 s).
- Story: one gold 9:16 frame travels through EDIT, CREATE and SELL, then lands on the Dewank logo.
- Images: Dewank's own identity boards (`assets/img`) and the official logo. The perfume ad is a drawn demo scene.
- Sound: effects only, from the HyperFrames bundled library (Pixabay Content License, see `assets/sfx/CREDITS.md`). No music bed.

## Rebuild

```bash
npx hyperframes@0.9.48 check
```

```bash
npx hyperframes@0.9.48 render -o ../master.mp4 --quality looks
```

Then encode the web file:

```bash
ffmpeg -i ../master.mp4 -c:v libx264 -preset slow -crf 25 -pix_fmt yuv420p -g 60 -movflags +faststart -c:a aac -b:a 112k ../../public/videos/dewank-showreel-2026.mp4
```
