const services = [
  { name: "استراتيجية البراند", href: "/services#brand", position: "s1" },
  { name: "الهوية البصرية", href: "/services#brand", position: "s2" },
  { name: "صناعة المحتوى", href: "/services#growth", position: "s3" },
  { name: "التسويق الرقمي", href: "/services#growth", position: "s4" },
  { name: "الحملات الإعلانية", href: "/services#growth", position: "s5" },
  { name: "SEO & AEO", href: "/services#growth", position: "s6" },
  { name: "أتمتة الذكاء الاصطناعي", href: "/services#automation", position: "s7" },
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
            <a className="service-satellite" href={service.href}>
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
          .planet-system .ring-c,
          .planet-system .s2,
          .planet-system .s4,
          .planet-system .s6,
          .planet-system .s8 {
            display: none;
          }
          .planet-system .service-ring,
          .planet-system .satellite-track,
          .planet-system .service-satellite {
            animation: none !important;
          }
          .planet-system .satellite-track {
            --orbit-size: 280px;
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
