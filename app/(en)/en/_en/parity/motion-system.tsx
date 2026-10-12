// English hero orbit. Markup and brand treatment follow the Arabic MotionSystem; the geometry below is English-only.
// The Arabic component and its CSS are not changed.
//
// Geometry (desktop and tablet, 620 x 580 panel):
// - All eleven services sit on one orbit (radius 240px) that turns once every 88s. Each satellite starts 8s further
//   round, so the spacing is an even 32.7 degrees. Labels counter-rotate, so they always read upright.
// - Labels are two-line pills (about 127 x 42px). On one ring, the gap between neighbouring satellites is longer than
//   the diagonal of a label, so no two labels can overlap at any point in the cycle.
// - Below 655px an orbit cannot hold eleven readable labels, so the same navy panel becomes a two-column service list.
// - Reduced motion holds the same even arrangement still.
import "../../../../home-hierarchy-refinement.css";

const services = [
  { name: "Brand strategy", href: "/en/services#brand-strategy", position: "s1" },
  { name: "Brand identity", href: "/en/services#brand-identity", position: "s2" },
  { name: "Content creation", href: "/en/social-media-content", position: "s3" },
  { name: "Digital marketing", href: "/en/services#digital-strategy", position: "s4" },
  { name: "Paid advertising", href: "/en/paid-advertising", position: "s5" },
  { name: "SEO, GEO & AEO", href: "/en/seo-geo-aeo", position: "s6" },
  { name: "AI automation", href: "/en/ai-automation", position: "s7" },
  { name: "WhatsApp & CRM", href: "/en/whatsapp-crm-automation", position: "s8" },
  { name: "Websites", href: "/en/website-design", position: "s9" },
  { name: "Social media", href: "/en/social-media-content", position: "s10" },
  { name: "Brand naming", href: "/en/brand-naming", position: "s11" },
] as const;

export default function MotionSystem() {
  return (
    <>
      <div className="hero-system planet-system" aria-label="Dewank service system">
        <div className="space-glow" aria-hidden="true" />
        <div className="service-ring ring-a" aria-hidden="true" />

        {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- kept as a plain anchor: the approved MotionSystem markup must not change. Same-group link. */}
        <a className="dewank-sun" href="/en/services" aria-label="Explore Dewank services">
          <span>Dewank</span>
        </a>

        {services.map((service) => (
          <div className={`satellite-track ${service.position}`} key={service.name}>
            <a className="service-satellite" href={service.href} aria-label={`Go to ${service.name}`}>
              <i aria-hidden="true" />
              <span>{service.name}</span>
            </a>
          </div>
        ))}

        <div className="system-caption"><i /> Choose the service you need</div>
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

        /* Skip layout/paint work for sections that are well below the first viewport. The work section is not skipped: its
           testimonials overhang it, and a placeholder height (820px) laid the method section over that overhang on first
           load, which put the method label on a dark background for the contrast audit. Rendering it keeps the layout true. */
        .studio-home .belief,
        .studio-home .trust-strip,
        .studio-home .proof-section,
        .studio-home .bento-section,
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

        /* Layout: side by side from 1280px, stacked below. The orbit panel keeps its 620px width. */
        @media (min-width: 1280px) {
          .en-parity.studio-home .hybrid-hero { grid-template-columns: minmax(0, 1fr) 620px !important; }
        }
        @media (max-width: 1279px) {
          .en-parity.studio-home .hybrid-hero { grid-template-columns: minmax(0, 1fr) !important; }
        }

        .en-parity.studio-home .planet-system {
          width: min(620px, 100%) !important;
          height: 580px !important;
          justify-self: center;
          overflow: hidden;
        }
        .en-parity.studio-home .planet-system .system-caption {
          direction: ltr;
          font-family: var(--font-arabic), Arial, sans-serif;
          letter-spacing: 0;
          font-weight: 700;
          font-size: 12px;
        }

        /* One orbit line, 480px across. The shared second and third rings are not drawn. */
        .en-parity.studio-home .planet-system .ring-a {
          display: block !important;
          width: 480px !important;
          height: 480px !important;
          animation: none !important;
          border-color: rgba(255, 255, 255, 0.24) !important;
        }
        .en-parity.studio-home .planet-system .ring-b,
        .en-parity.studio-home .planet-system .ring-c { display: none !important; }

        /* The centre logo's name is visually hidden but stays in the accessible text. Kept inside the panel, so it cannot
           widen the page (the shared rule moves it 9999px off-screen). */
        .en-parity.studio-home .planet-system .dewank-sun span {
          position: absolute;
          width: 1px;
          height: 1px;
          margin: -1px;
          padding: 0;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
          left: 0;
          top: 0;
        }

        /* Every satellite (track and label) turns in 88s. Start points are 8s apart: 0, -8, -16 ... -80. */
        .en-parity.studio-home .planet-system .satellite-track,
        .en-parity.studio-home .planet-system .service-satellite {
          animation-duration: 88s !important;
          --orbit-size: 480px;
        }
        .en-parity.studio-home .planet-system .s1,  .en-parity.studio-home .planet-system .s1 .service-satellite  { animation-delay: 0s !important; }
        .en-parity.studio-home .planet-system .s2,  .en-parity.studio-home .planet-system .s2 .service-satellite  { animation-delay: -8s !important; }
        .en-parity.studio-home .planet-system .s3,  .en-parity.studio-home .planet-system .s3 .service-satellite  { animation-delay: -16s !important; }
        .en-parity.studio-home .planet-system .s4,  .en-parity.studio-home .planet-system .s4 .service-satellite  { animation-delay: -24s !important; }
        .en-parity.studio-home .planet-system .s5,  .en-parity.studio-home .planet-system .s5 .service-satellite  { animation-delay: -32s !important; }
        .en-parity.studio-home .planet-system .s6,  .en-parity.studio-home .planet-system .s6 .service-satellite  { animation-delay: -40s !important; }
        .en-parity.studio-home .planet-system .s7,  .en-parity.studio-home .planet-system .s7 .service-satellite  { animation-delay: -48s !important; }
        .en-parity.studio-home .planet-system .s8,  .en-parity.studio-home .planet-system .s8 .service-satellite  { animation-delay: -56s !important; }
        .en-parity.studio-home .planet-system .s9,  .en-parity.studio-home .planet-system .s9 .service-satellite  { animation-delay: -64s !important; }
        .en-parity.studio-home .planet-system .s10, .en-parity.studio-home .planet-system .s10 .service-satellite { animation-delay: -72s !important; }
        .en-parity.studio-home .planet-system .s11, .en-parity.studio-home .planet-system .s11 .service-satellite { animation-delay: -80s !important; }

        /* Two-line labels: a dot and the service name in a pill, 12px text (no smaller than the label size). */
        .en-parity.studio-home .planet-system .service-satellite {
          display: flex;
          align-items: center;
          gap: 6px;
          width: max-content;
          max-width: 128px;
          font-size: 12px;
          line-height: 1.2;
          white-space: normal;
        }
        .en-parity.studio-home .planet-system .service-satellite span {
          display: block;
          max-width: 92px;
          padding: 6px 12px;
          font-size: 12px;
          line-height: 1.2;
          white-space: normal;
          text-align: left;
        }

        /* Keyboard focus: a visible ring, in addition to the shared colour change. */
        .en-parity.studio-home .planet-system .service-satellite:focus-visible {
          outline: 2px solid #d9ff43;
          outline-offset: 4px;
          border-radius: 999px;
        }

        /* Phones and narrow screens: no orbit. The same navy panel holds the service list. */
        @media (max-width: 654px) {
          .en-parity.studio-home .planet-system {
            height: auto !important;
            display: grid !important;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            padding: 30px 16px 26px;
            border-radius: 28px;
            overflow: hidden;
          }
          .en-parity.studio-home .planet-system .space-glow,
          .en-parity.studio-home .planet-system .ring-a { display: none !important; }
          .en-parity.studio-home .planet-system .dewank-sun {
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
          .en-parity.studio-home .planet-system .satellite-track {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            width: auto !important;
            height: auto !important;
            margin: 0 !important;
            animation: none !important;
            transform: none !important;
          }
          .en-parity.studio-home .planet-system .service-satellite {
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
          .en-parity.studio-home .planet-system .service-satellite span {
            width: 100%;
            max-width: none;
            padding: 10px 12px;
            font-size: 14px;
          }
          .en-parity.studio-home .planet-system .system-caption {
            position: static;
            grid-column: 1 / -1;
            font-size: 13px;
            justify-content: center;
            color: #fff;
          }
        }

        /* Reduced motion: the even arrangement is held still. Track angles, and labels counter-rotated to stay upright. */
        @media (prefers-reduced-motion: reduce) {
          .en-parity.studio-home .planet-system .satellite-track,
          .en-parity.studio-home .planet-system .service-satellite {
            animation: none !important;
          }
          .en-parity.studio-home .planet-system .s1  { transform: rotate(0deg); }
          .en-parity.studio-home .planet-system .s2  { transform: rotate(32.73deg); }
          .en-parity.studio-home .planet-system .s3  { transform: rotate(65.45deg); }
          .en-parity.studio-home .planet-system .s4  { transform: rotate(98.18deg); }
          .en-parity.studio-home .planet-system .s5  { transform: rotate(130.91deg); }
          .en-parity.studio-home .planet-system .s6  { transform: rotate(163.64deg); }
          .en-parity.studio-home .planet-system .s7  { transform: rotate(196.36deg); }
          .en-parity.studio-home .planet-system .s8  { transform: rotate(229.09deg); }
          .en-parity.studio-home .planet-system .s9  { transform: rotate(261.82deg); }
          .en-parity.studio-home .planet-system .s10 { transform: rotate(294.55deg); }
          .en-parity.studio-home .planet-system .s11 { transform: rotate(327.27deg); }
          .en-parity.studio-home .planet-system .s1 .service-satellite  { transform: rotate(0deg); }
          .en-parity.studio-home .planet-system .s2 .service-satellite  { transform: rotate(-32.73deg); }
          .en-parity.studio-home .planet-system .s3 .service-satellite  { transform: rotate(-65.45deg); }
          .en-parity.studio-home .planet-system .s4 .service-satellite  { transform: rotate(-98.18deg); }
          .en-parity.studio-home .planet-system .s5 .service-satellite  { transform: rotate(-130.91deg); }
          .en-parity.studio-home .planet-system .s6 .service-satellite  { transform: rotate(-163.64deg); }
          .en-parity.studio-home .planet-system .s7 .service-satellite  { transform: rotate(-196.36deg); }
          .en-parity.studio-home .planet-system .s8 .service-satellite  { transform: rotate(-229.09deg); }
          .en-parity.studio-home .planet-system .s9 .service-satellite  { transform: rotate(-261.82deg); }
          .en-parity.studio-home .planet-system .s10 .service-satellite { transform: rotate(-294.55deg); }
          .en-parity.studio-home .planet-system .s11 .service-satellite { transform: rotate(-327.27deg); }
        }
      `}</style>
    </>
  );
}
