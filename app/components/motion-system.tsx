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
  );
}
