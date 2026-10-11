// English copy of the Arabic MotionSystem. Markup, motion and styles are unchanged; only text and links differ.
import "../../../home-hierarchy-refinement.css";

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
        <div className="service-ring ring-b" aria-hidden="true" />
        <div className="service-ring ring-c" aria-hidden="true" />

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

        .planet-system .system-caption {
          direction: ltr;
          font-family: var(--font-arabic), Arial, sans-serif;
          letter-spacing: 0;
          font-weight: 700;
        }

        /* Three stable orbital bands. Items on the same band share one speed,
           so their spacing stays fixed instead of slowly catching each other. */
        .planet-system .s6,.planet-system .s8,.planet-system .s9,.planet-system .s10 {
          --orbit-size: 330px;
          animation-duration: 78s !important;
        }
        .planet-system .s1,.planet-system .s3,.planet-system .s4,.planet-system .s11 {
          --orbit-size: 432px;
          animation-duration: 88s !important;
        }
        .planet-system .s2,.planet-system .s5,.planet-system .s7 {
          --orbit-size: 542px;
          animation-duration: 98s !important;
        }

        .planet-system .s6 .service-satellite,.planet-system .s8 .service-satellite,.planet-system .s9 .service-satellite,.planet-system .s10 .service-satellite { animation-duration: 78s !important; }
        .planet-system .s1 .service-satellite,.planet-system .s3 .service-satellite,.planet-system .s4 .service-satellite,.planet-system .s11 .service-satellite { animation-duration: 88s !important; }
        .planet-system .s2 .service-satellite,.planet-system .s5 .service-satellite,.planet-system .s7 .service-satellite { animation-duration: 98s !important; }

        /* Inner band: four equal 90-degree starting positions. */
        .planet-system .s6,.planet-system .s6 .service-satellite { animation-delay: 0s !important; }
        .planet-system .s8,.planet-system .s8 .service-satellite { animation-delay: -19.5s !important; }
        .planet-system .s9,.planet-system .s9 .service-satellite { animation-delay: -39s !important; }
        .planet-system .s10,.planet-system .s10 .service-satellite { animation-delay: -58.5s !important; }

        /* Middle band: four equal 90-degree starting positions, offset from inner. */
        .planet-system .s1,.planet-system .s1 .service-satellite { animation-delay: -11s !important; }
        .planet-system .s3,.planet-system .s3 .service-satellite { animation-delay: -33s !important; }
        .planet-system .s4,.planet-system .s4 .service-satellite { animation-delay: -55s !important; }
        .planet-system .s11,.planet-system .s11 .service-satellite { animation-delay: -77s !important; }

        /* Outer band: three equal 120-degree starting positions. */
        .planet-system .s2,.planet-system .s2 .service-satellite { animation-delay: -8s !important; }
        .planet-system .s5,.planet-system .s5 .service-satellite { animation-delay: -40.67s !important; }
        .planet-system .s7,.planet-system .s7 .service-satellite { animation-delay: -73.33s !important; }

        @media (max-width: 640px) {
          /* The orbital art starts after the LCP copy on mobile. Defer its paint until needed. */
          .studio-home .hero-system {
            content-visibility: auto;
            contain-intrinsic-size: 470px;
          }

          .planet-system .space-glow,
          .planet-system .ring-b,
          .planet-system .ring-c {
            display: block;
          }
          .planet-system .space-glow { opacity: .72; }
          .planet-system .ring-b { opacity: .42; }
          .planet-system .ring-c { opacity: .28; }

          .planet-system .satellite-track {
            animation-name: mobile-orbit !important;
            animation-timing-function: linear !important;
            animation-iteration-count: infinite !important;
            animation-direction: normal !important;
            transform-origin: 50% 50%;
            will-change: transform;
          }

          .planet-system .s6,.planet-system .s8,.planet-system .s9,.planet-system .s10 {
            --orbit-size: 282px;
            animation-duration: 82s !important;
          }
          .planet-system .s1,.planet-system .s3,.planet-system .s4,.planet-system .s11 {
            --orbit-size: 354px;
            animation-duration: 92s !important;
          }
          .planet-system .s2,.planet-system .s5,.planet-system .s7 {
            --orbit-size: 428px;
            animation-duration: 102s !important;
          }

          .planet-system .s6 .service-satellite,.planet-system .s8 .service-satellite,.planet-system .s9 .service-satellite,.planet-system .s10 .service-satellite { animation-duration: 82s !important; }
          .planet-system .s1 .service-satellite,.planet-system .s3 .service-satellite,.planet-system .s4 .service-satellite,.planet-system .s11 .service-satellite { animation-duration: 92s !important; }
          .planet-system .s2 .service-satellite,.planet-system .s5 .service-satellite,.planet-system .s7 .service-satellite { animation-duration: 102s !important; }

          .planet-system .s6,.planet-system .s6 .service-satellite { animation-delay: 0s !important; }
          .planet-system .s8,.planet-system .s8 .service-satellite { animation-delay: -20.5s !important; }
          .planet-system .s9,.planet-system .s9 .service-satellite { animation-delay: -41s !important; }
          .planet-system .s10,.planet-system .s10 .service-satellite { animation-delay: -61.5s !important; }

          .planet-system .s1,.planet-system .s1 .service-satellite { animation-delay: -11.5s !important; }
          .planet-system .s3,.planet-system .s3 .service-satellite { animation-delay: -34.5s !important; }
          .planet-system .s4,.planet-system .s4 .service-satellite { animation-delay: -57.5s !important; }
          .planet-system .s11,.planet-system .s11 .service-satellite { animation-delay: -80.5s !important; }

          .planet-system .s2,.planet-system .s2 .service-satellite { animation-delay: -8s !important; }
          .planet-system .s5,.planet-system .s5 .service-satellite { animation-delay: -42s !important; }
          .planet-system .s7,.planet-system .s7 .service-satellite { animation-delay: -76s !important; }

          .planet-system .service-satellite {
            animation-name: mobile-counter-orbit !important;
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
          .planet-system .s6,.planet-system .s8,.planet-system .s9,.planet-system .s10 { --orbit-size: 258px; }
          .planet-system .s1,.planet-system .s3,.planet-system .s4,.planet-system .s11 { --orbit-size: 320px; }
          .planet-system .s2,.planet-system .s5,.planet-system .s7 { --orbit-size: 382px; }
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
