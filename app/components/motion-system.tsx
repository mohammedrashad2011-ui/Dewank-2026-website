const services = [
  { name: "استراتيجية البراند", href: "/branding", position: "s1" },
  { name: "الهوية البصرية", href: "/branding", position: "s2" },
  { name: "صناعة المحتوى", href: "/digital-marketing", position: "s3" },
  { name: "التسويق الرقمي", href: "/digital-marketing", position: "s4" },
  { name: "الحملات الإعلانية", href: "/paid-ads", position: "s5" },
  { name: "SEO & AEO", href: "/seo-aeo", position: "s6" },
  { name: "أتمتة الذكاء الاصطناعي", href: "/ai-automation", position: "s7" },
  { name: "أتمتة واتساب", href: "/whatsapp-automation", position: "s8" },
] as const;

export default function MotionSystem() {
  return (
    <>
      <div className="hero-system planet-system" aria-label="منظومة خدمات ديوانك">
        <div className="space-glow" aria-hidden="true" />
        <div className="service-ring ring-a" aria-hidden="true" />
        <div className="service-ring ring-b" aria-hidden="true" />
        <div className="service-ring ring-c" aria-hidden="true" />

        <a className="dewank-sun" href="/services" aria-label="استكشف خدمات ديوانك">
          <span>ديوانك</span>
        </a>

        {services.map((service) => (
          <div className={`satellite-track ${service.position}`} key={service.name}>
            <a className="service-satellite" href={service.href} aria-label={`انتقل إلى خدمة ${service.name}`}>
              <i aria-hidden="true" />
              <span>{service.name}</span>
            </a>
          </div>
        ))}

        <div className="system-caption"><i /> ONE CONNECTED SYSTEM</div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .planet-system .ring-b,
          .planet-system .ring-c,
          .planet-system .s2,
          .planet-system .s4,
          .planet-system .s6,
          .planet-system .s8 {
            display: none;
          }
          .planet-system .space-glow {
            display: block;
            opacity: .72;
          }
          .planet-system .satellite-track {
            --orbit-size: 280px;
            animation-duration: 24s !important;
            animation-timing-function: linear !important;
            animation-iteration-count: infinite !important;
            will-change: transform;
          }
          .planet-system .service-satellite {
            animation-duration: 24s !important;
            animation-timing-function: linear !important;
            animation-iteration-count: infinite !important;
            will-change: transform;
            min-height: 44px;
            touch-action: manipulation;
          }
          .planet-system:active .satellite-track,
          .planet-system:active .service-satellite,
          .planet-system:focus-within .satellite-track,
          .planet-system:focus-within .service-satellite {
            animation-play-state: paused !important;
          }
          .planet-system .s1 { transform: rotate(0deg); }
          .planet-system .s3 { transform: rotate(90deg); }
          .planet-system .s5 { transform: rotate(180deg); }
          .planet-system .s7 { transform: rotate(270deg); }
          .planet-system .s1 .service-satellite { transform: rotate(0deg); }
          .planet-system .s3 .service-satellite { transform: rotate(-90deg); }
          .planet-system .s5 .service-satellite { transform: rotate(-180deg); }
          .planet-system .s7 .service-satellite { transform: rotate(-270deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .planet-system *,
          .planet-system *::before,
          .planet-system *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </>
  );
}
