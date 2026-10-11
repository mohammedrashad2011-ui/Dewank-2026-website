"use client";

// English version of the Arabic identity showcase (app/work/identity-showcase.tsx): the same card grid and dialog.
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
              aria-label={`View the ${project.name} identity project`}
            >
              <div className="identity-work-image">
                <img
                  src={project.image}
                  alt={`${project.name} identity applications`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <span className="identity-work-view">View project <i>↗</i></span>
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
        <div className="identity-modal" role="dialog" aria-modal="true" aria-label={`${active.name} project`} onClick={() => setActive(null)}>
          <div className="identity-modal-card" onClick={(event) => event.stopPropagation()}>
            <button className="identity-modal-close" type="button" onClick={() => setActive(null)} aria-label="Close">×</button>
            <img src={active.image} alt={`${active.name} identity applications`} />
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
