"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  { quote: "كان رشاد مبادرًا ومنتبهًا جدًا لاحتياجاتي، وصمّم شعارًا يعكس قيم شركتي بشكل مثالي.", name: "صوفيا فلوريس", country: "الولايات المتحدة", initials: "SF" },
  { quote: "قدرته على تحليل البيانات وعرضها كانت ممتازة. سرعة التنفيذ وجودة العمل جعلتاه مميزًا في أبحاث السوق.", name: "مات موناكو", country: "الولايات المتحدة", initials: "MM" },
  { quote: "كانت عملية اختيار الاسم مدروسة واحترافية ومنظمة. تواصل ممتاز، وأفكار مبتكرة، والنتيجة النهائية أسعدتني فعلًا.", name: "Loukastaki25", country: "قبرص", initials: "L" },
  { quote: "ابتكر المصمم شعارًا محببًا يعكس روح الشركة المرحة والإبداعية، ونجح في الوقت نفسه في دمج الطابع الشرق أوسطي الذي أردت إبرازه.", name: "Denver", country: "الولايات المتحدة", initials: "D" },
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

  const select = (index: number) => { setActive(index); setPaused(true); };
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
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}
      onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const distance = (event.changedTouches[0]?.clientX ?? touchStart.current) - touchStart.current;
        if (Math.abs(distance) > 45) move(distance > 0 ? 1 : -1);
        touchStart.current = null;
      }}
    >
      <div className="testimonial-orbit" aria-hidden="true"><i/><i/><i/></div>
      <div className="testimonial-heading">
        <span className="section-label">آراء العملاء</span>
        <h2 id="home-testimonials-title">العمل الجيد يُرى.<br/><em>والثقة تُروى.</em></h2>
        <p>تجارب حقيقية مع ديوانك في بناء الأسماء، الهوية، والبحث الاستراتيجي.</p>
      </div>

      <div className="testimonial-stage" aria-live="polite">
        <div className="testimonial-count" dir="ltr">0{active + 1} / 0{testimonials.length}</div>
        <div className="testimonial-stars" aria-label="5 من 5 نجوم">★★★★★</div>
        <blockquote key={testimonial.name}>«{testimonial.quote}»</blockquote>
        <div className="testimonial-person">
          <span aria-hidden="true">{testimonial.initials}</span>
          <p><strong>{testimonial.name}</strong><small>{testimonial.country}</small></p>
        </div>
        <div className="testimonial-controls">
          <button type="button" onClick={() => move(-1)} aria-label="الرأي السابق">→</button>
          <div className="testimonial-dots" role="tablist" aria-label="اختيار رأي عميل">
            {testimonials.map((item, index) => (
              <button type="button" role="tab" aria-selected={active === index} aria-label={`رأي ${item.name}`} className={active === index ? "active" : ""} onClick={() => select(index)} key={item.name}/>
            ))}
          </div>
          <button type="button" onClick={() => move(1)} aria-label="الرأي التالي">←</button>
        </div>
      </div>
      <p className="testimonial-translation">تُرجمت الآراء من لغتها الأصلية مع الحفاظ على معناها.</p>
    </section>
  );
}
