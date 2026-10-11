// Arabic homepage orbit. The approved English single-ring MotionSystem is the geometry source: one 480px orbit, eleven
// satellites on even 8-second offsets (every 32.7 degrees), labels that counter-rotate so they stay upright, and a
// two-column service list below 655px. Arabic labels are set in two-line pills. Destinations are the Arabic routes.
// Every rule below sits under .arabic-home-polish, which only the Arabic homepage sets.
import "../home-hierarchy-refinement.css";
import { BidiText } from "./bidi-text";

const services = [
  { name: "استراتيجية البراند", href: "/branding", position: "s1" },
  { name: "الهوية البصرية", href: "/branding", position: "s2" },
  { name: "صناعة المحتوى", href: "/digital-marketing", position: "s3" },
  { name: "التسويق الرقمي", href: "/digital-marketing", position: "s4" },
  { name: "الحملات الإعلانية", href: "/paid-ads", position: "s5" },
  { name: "SEO & AEO", href: "/seo-aeo", position: "s6" },
  { name: "أتمتة الذكاء الاصطناعي", href: "/ai-automation", position: "s7" },
  { name: "أتمتة واتساب", href: "/whatsapp-automation", position: "s8" },
  { name: "المواقع", href: "/website-design", position: "s9" },
  { name: "السوشيال", href: "/services/social-media-content", position: "s10" },
  { name: "أسماء البراند", href: "/services/brand-naming", position: "s11" },
] as const;

export default function MotionSystem() {
  return (
    <>
      <div className="hero-system planet-system" aria-label="منظومة خدمات ديوانك">
        <div className="space-glow" aria-hidden="true" />
        <div className="service-ring ring-a" aria-hidden="true" />

        {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- kept as a plain anchor: the approved orbit markup must not change. Same-group link. */}
        <a className="dewank-sun" href="/services" aria-label="استكشف خدمات ديوانك">
          <span>ديوانك</span>
        </a>

        {services.map((service) => (
          <div className={`satellite-track ${service.position}`} key={service.name}>
            <a className="service-satellite" href={service.href} aria-label={`انتقل إلى خدمة ${service.name}`}>
              <i aria-hidden="true" />
              <span><BidiText text={service.name} /></span>
            </a>
          </div>
        ))}

        <div className="system-caption"><i /> اختر الخدمة التي تحتاجها</div>
      </div>

      <style>{`
        /* Keep the homepage LCP copy immediately paintable. */
        .studio-home .hybrid-hero,
        .studio-home .hero-copy,
        .studio-home .hero-copy h1,
        .studio-home .hero-copy > p {
          opacity: 1 !important;
          visibility: visible !important;
          transform: none !important;
          animation: none !important;
          transition: none !important;
        }

        /* Skip layout/paint work for sections that are well below the first viewport. */
        .studio-home .belief,
        .studio-home .trust-strip,
        .studio-home .proof-section,
        .studio-home .bento-section,
        .studio-home .work-section,
        .studio-home .case-study,
        .studio-home .method-section,
        .studio-home .seo-content,
        .studio-home .faq-section,
        .studio-home .final-cta {
          content-visibility: auto;
          contain-intrinsic-size: auto 820px;
        }

        /* Lighthouse contrast fix for the method section labels and step numbers. */
        .studio-home .method-section .section-label,
        .studio-home .method-list > div > span {
          color: #4a4d55 !important;
        }

        /* Single orbit, 480px across. The shared second and third rings are not drawn. */
        .arabic-home-polish .planet-system {
          width: min(620px, 100%) !important;
          height: 580px !important;
          justify-self: center;
          overflow: hidden;
        }
        .arabic-home-polish .planet-system .system-caption {
          direction: rtl;
          font-family: var(--font-arabic), Arial, sans-serif;
          letter-spacing: 0;
          font-weight: 700;
          font-size: 12px;
          display: flex;
        }
        .arabic-home-polish .planet-system .ring-a {
          display: block !important;
          width: 480px !important;
          height: 480px !important;
          animation: none !important;
          border-color: rgba(255, 255, 255, 0.24) !important;
        }

        /* Every satellite (track and label) turns in 88s. Start points are 8s apart: 0, -8, -16 ... -80. */
        .arabic-home-polish .planet-system .satellite-track,
        .arabic-home-polish .planet-system .service-satellite {
          animation-duration: 88s !important;
          --orbit-size: 480px;
        }
        .arabic-home-polish .planet-system .s1,  .arabic-home-polish .planet-system .s1 .service-satellite  { animation-delay: 0s !important; }
        .arabic-home-polish .planet-system .s2,  .arabic-home-polish .planet-system .s2 .service-satellite  { animation-delay: -8s !important; }
        .arabic-home-polish .planet-system .s3,  .arabic-home-polish .planet-system .s3 .service-satellite  { animation-delay: -16s !important; }
        .arabic-home-polish .planet-system .s4,  .arabic-home-polish .planet-system .s4 .service-satellite  { animation-delay: -24s !important; }
        .arabic-home-polish .planet-system .s5,  .arabic-home-polish .planet-system .s5 .service-satellite  { animation-delay: -32s !important; }
        .arabic-home-polish .planet-system .s6,  .arabic-home-polish .planet-system .s6 .service-satellite  { animation-delay: -40s !important; }
        .arabic-home-polish .planet-system .s7,  .arabic-home-polish .planet-system .s7 .service-satellite  { animation-delay: -48s !important; }
        .arabic-home-polish .planet-system .s8,  .arabic-home-polish .planet-system .s8 .service-satellite  { animation-delay: -56s !important; }
        .arabic-home-polish .planet-system .s9,  .arabic-home-polish .planet-system .s9 .service-satellite  { animation-delay: -64s !important; }
        .arabic-home-polish .planet-system .s10, .arabic-home-polish .planet-system .s10 .service-satellite { animation-delay: -72s !important; }
        .arabic-home-polish .planet-system .s11, .arabic-home-polish .planet-system .s11 .service-satellite { animation-delay: -80s !important; }

        /* Two-line Arabic labels: a dot and the service name in a pill. */
        .arabic-home-polish .planet-system .service-satellite {
          display: flex;
          align-items: center;
          gap: 6px;
          width: max-content;
          max-width: 136px;
          font-size: 12px;
          line-height: 1.3;
          white-space: normal;
        }
        .arabic-home-polish .planet-system .service-satellite span {
          display: block;
          max-width: 104px;
          padding: 7px 13px;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.45;
          white-space: normal;
          text-align: center;
        }
        .arabic-home-polish .planet-system .service-satellite:focus-visible {
          outline: 2px solid #d9ff43;
          outline-offset: 4px;
          border-radius: 999px;
        }

        /* Phones and narrow screens: no orbit. The same navy panel holds the service list in two columns. */
        @media (max-width: 654px) {
          .arabic-home-polish .planet-system {
            height: auto !important;
            display: grid !important;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            padding: 30px 16px 26px;
            border-radius: 28px;
          }
          .arabic-home-polish .planet-system .space-glow,
          .arabic-home-polish .planet-system .ring-a { display: none !important; }
          .arabic-home-polish .planet-system .dewank-sun {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            transform: none !important;
            width: 96px !important;
            height: 96px !important;
            grid-column: 1 / -1;
            justify-self: center;
            margin-bottom: 8px;
          }
          .arabic-home-polish .planet-system .satellite-track {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            width: auto !important;
            height: auto !important;
            margin: 0 !important;
            animation: none !important;
            transform: none !important;
          }
          .arabic-home-polish .planet-system .service-satellite {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            translate: none !important;
            animation: none !important;
            transform: none !important;
            width: 100%;
            max-width: none;
            min-height: 44px;
            font-size: 14px;
          }
          .arabic-home-polish .planet-system .service-satellite span {
            width: 100%;
            max-width: none;
            padding: 10px 12px;
            font-size: 14px;
          }
          .arabic-home-polish .planet-system .system-caption {
            position: static;
            grid-column: 1 / -1;
            font-size: 13px;
            justify-content: center;
            color: #fff;
          }
        }

        /* Reduced motion: the even arrangement is held still. Track angles, and labels counter-rotated to stay upright. */
        @media (prefers-reduced-motion: reduce) {
          .arabic-home-polish .planet-system .satellite-track,
          .arabic-home-polish .planet-system .service-satellite {
            animation: none !important;
          }
          .arabic-home-polish .planet-system .s1  { transform: rotate(0deg); }
          .arabic-home-polish .planet-system .s2  { transform: rotate(32.73deg); }
          .arabic-home-polish .planet-system .s3  { transform: rotate(65.45deg); }
          .arabic-home-polish .planet-system .s4  { transform: rotate(98.18deg); }
          .arabic-home-polish .planet-system .s5  { transform: rotate(130.91deg); }
          .arabic-home-polish .planet-system .s6  { transform: rotate(163.64deg); }
          .arabic-home-polish .planet-system .s7  { transform: rotate(196.36deg); }
          .arabic-home-polish .planet-system .s8  { transform: rotate(229.09deg); }
          .arabic-home-polish .planet-system .s9  { transform: rotate(261.82deg); }
          .arabic-home-polish .planet-system .s10 { transform: rotate(294.55deg); }
          .arabic-home-polish .planet-system .s11 { transform: rotate(327.27deg); }
          .arabic-home-polish .planet-system .s1 .service-satellite  { transform: rotate(0deg); }
          .arabic-home-polish .planet-system .s2 .service-satellite  { transform: rotate(-32.73deg); }
          .arabic-home-polish .planet-system .s3 .service-satellite  { transform: rotate(-65.45deg); }
          .arabic-home-polish .planet-system .s4 .service-satellite  { transform: rotate(-98.18deg); }
          .arabic-home-polish .planet-system .s5 .service-satellite  { transform: rotate(-130.91deg); }
          .arabic-home-polish .planet-system .s6 .service-satellite  { transform: rotate(-163.64deg); }
          .arabic-home-polish .planet-system .s7 .service-satellite  { transform: rotate(-196.36deg); }
          .arabic-home-polish .planet-system .s8 .service-satellite  { transform: rotate(-229.09deg); }
          .arabic-home-polish .planet-system .s9 .service-satellite  { transform: rotate(-261.82deg); }
          .arabic-home-polish .planet-system .s10 .service-satellite { transform: rotate(-294.55deg); }
          .arabic-home-polish .planet-system .s11 .service-satellite { transform: rotate(-327.27deg); }
        }
      `}</style>
    </>
  );
}
