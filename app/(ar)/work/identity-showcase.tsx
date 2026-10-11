"use client";

import { useEffect, useState } from "react";

export type IdentityProject = {
  name: string;
  sector: string;
  image: string;
  className: string;
  summary: string;
};

export function IdentityShowcase({ projects }: { projects: IdentityProject[] }) {
  const [active, setActive] = useState<IdentityProject | null>(null);

  useEffect(() => {
    if (!active) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setActive(null);
    document.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", close);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="identity-work-grid">
        {projects.map((project, index) => (
          <article className={`identity-work-card ${project.className}`} key={project.name}>
            <button
              className="identity-work-open"
              type="button"
              onClick={() => setActive(project)}
              aria-label={`عرض مشروع هوية ${project.name}`}
            >
              <div className="identity-work-image">
                <img
                  src={project.image}
                  alt={`تطبيقات الهوية البصرية لعلامة ${project.name} من ديوانك`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <span className="identity-work-view">عرض المشروع <i>↗</i></span>
              </div>
              <div className="identity-work-meta">
                <div>
                  <b>{project.name}</b>
                  <span>{project.sector}</span>
                </div>
                <strong>0{index + 1}</strong>
              </div>
            </button>
          </article>
        ))}
      </div>

      {active && (
        <div className="identity-modal" role="dialog" aria-modal="true" aria-label={`مشروع ${active.name}`} onClick={() => setActive(null)}>
          <div className="identity-modal-card" onClick={(event) => event.stopPropagation()}>
            <button className="identity-modal-close" type="button" onClick={() => setActive(null)} aria-label="إغلاق">×</button>
            <img src={active.image} alt={`تطبيقات هوية ${active.name}`} />
            <div className="identity-modal-copy">
              <span>{active.sector}</span>
              <h3>{active.name}</h3>
              <p>{active.summary}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
