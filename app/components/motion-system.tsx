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
          .planet-system .space-glow,
          .planet-system .ring-b,
          .planet-system .ring-c {
            display: block;
          }
          .planet-system .space-glow { opacity: .72; }
          .planet-system .ring-b { opacity: .42; }
          .planet-system .ring-c { opacity: .28; }

          .planet-system .satellite-track {
            --orbit-size: 292px;
            animation-name: mobile-orbit !important;
            animation-duration: 32s !important;
            animation-timing-function: linear !important;
            animation-iteration-count: infinite !important;
            animation-direction: normal !important;
            transform-origin: 50% 50%;
            will-change: transform;
          }
          .planet-system .s2,
          .planet-system .s4,
          .planet-system .s6,
          .planet-system .s8 {
            --orbit-size: 392px;
            animation-duration: 40s !important;
          }

          .planet-system .service-satellite {
            animation-name: mobile-counter-orbit !important;
            animation-duration: inherit !important;
            animation-timing-function: linear !important;
            animation-iteration-count: infinite !important;
            animation-direction: normal !important;
            min-height: 44px;
            max-width: 150px;
            touch-action: manipulation;
            will-change: transform;
          }
          .planet-system .service-satellite span {
            white-space: nowrap;
            font-size: 11px;
          }

          .planet-system .s1 { animation-delay: 0s !important; }
          .planet-system .s3 { animation-delay: -8s !important; }
          .planet-system .s5 { animation-delay: -16s !important; }
          .planet-system .s7 { animation-delay: -24s !important; }
          .planet-system .s2 { animation-delay: 0s !important; }
          .planet-system .s4 { animation-delay: -10s !important; }
          .planet-system .s6 { animation-delay: -20s !important; }
          .planet-system .s8 { animation-delay: -30s !important; }

          .planet-system .s1 .service-satellite { animation-delay: 0s !important; }
          .planet-system .s3 .service-satellite { animation-delay: -8s !important; }
          .planet-system .s5 .service-satellite { animation-delay: -16s !important; }
          .planet-system .s7 .service-satellite { animation-delay: -24s !important; }
          .planet-system .s2 .service-satellite { animation-delay: 0s !important; }
          .planet-system .s4 .service-satellite { animation-delay: -10s !important; }
          .planet-system .s6 .service-satellite { animation-delay: -20s !important; }
          .planet-system .s8 .service-satellite { animation-delay: -30s !important; }

          .planet-system:active .satellite-track,
          .planet-system:active .service-satellite,
          .planet-system:focus-within .satellite-track,
          .planet-system:focus-within .service-satellite {
            animation-play-state: paused !important;
          }
        }

        @keyframes mobile-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes mobile-counter-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        @media (max-width: 380px) {
          .planet-system .satellite-track { --orbit-size: 270px; }
          .planet-system .s2,
          .planet-system .s4,
          .planet-system .s6,
          .planet-system .s8 { --orbit-size: 352px; }
          .planet-system .service-satellite { max-width: 138px; }
          .planet-system .service-satellite span { font-size: 10px; }
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
