"use client";

// English copy of the Arabic HomeTestimonials. Same carousel, markup and classes.
// Only the three client quotes that exist in English are used (the verified wording on the Work page).
// The Arabic version's star row is omitted: it is a rating claim that is not backed by a verified source.
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote: "Rashad was proactive and very attentive to my needs, and designed a logo that reflects my company's values perfectly.",
    name: "Sophia Flores",
    initials: "SF",
    country: "United States",
  },
  {
    quote: "His ability to analyse and present data was excellent. The speed of execution and the quality of the work made him stand out in market research.",
    name: "Matt Monaco",
    initials: "MM",
    country: "United States",
  },
  {
    quote: "The naming process was thoughtful, professional and well organised. Excellent communication and creative ideas, and the final result made me genuinely happy.",
    name: "Loukastaki25",
    initials: "LK",
    country: "Cyprus",
  },
];

export default function HomeTestimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % testimonials.length), 6500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const select = (index: number) => {
    setActive(index);
    setPaused(true);
  };
  const move = (direction: number) => {
    setActive((current) => (current + direction + testimonials.length) % testimonials.length);
    setPaused(true);
  };
  const testimonial = testimonials[active];

  return (
    <section
      className="home-testimonials"
      aria-labelledby="home-testimonials-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
      onTouchStart={(event) => {
        touchStart.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const distance = (event.changedTouches[0]?.clientX ?? touchStart.current) - touchStart.current;
        if (Math.abs(distance) > 45) move(distance > 0 ? -1 : 1);
        touchStart.current = null;
      }}
    >
      <div className="testimonial-orbit" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="testimonial-heading">
        <span className="section-label">Client feedback</span>
        <h2 id="home-testimonials-title">
          Good work gets noticed.
          <br />
          <em>Trust gets built.</em>
        </h2>
        <p>Real experiences with Dewank in naming, identity and strategic research.</p>
      </div>

      <div className="testimonial-stage" aria-live="polite">
        <div className="testimonial-count">
          0{active + 1} / 0{testimonials.length}
        </div>
        <blockquote key={testimonial.name}>“{testimonial.quote}”</blockquote>
        <div className="testimonial-person">
          <span aria-hidden="true">{testimonial.initials}</span>
          <p>
            <strong>{testimonial.name}</strong>
            <small>{testimonial.country}</small>
          </p>
        </div>
        <div className="testimonial-controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous testimonial">
            ←
          </button>
          <div className="testimonial-dots" role="tablist" aria-label="Choose a client testimonial">
            {testimonials.map((item, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-label={`Testimonial from ${item.name}`}
                className={active === index ? "active" : ""}
                onClick={() => select(index)}
                key={item.name}
              />
            ))}
          </div>
          <button type="button" onClick={() => move(1)} aria-label="Next testimonial">
            →
          </button>
        </div>
      </div>
      <p className="testimonial-translation">
        Feedback was originally given in English or translated for publication; wording has been lightly adapted for
        clarity while keeping its meaning.
      </p>
    </section>
  );
}
