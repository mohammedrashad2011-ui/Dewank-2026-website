"use client";

// English version of the Arabic identity showcase (app/work/identity-showcase.tsx): the same card grid and dialog.
import { useEffect, useRef, useState } from "react";

export type IdentityProject = {
  name: string;
  sector: string;
  image: string;
  className: string;
  summary: string;
};

export function IdentityShowcase({ projects }: { projects: IdentityProject[] }) {
  const [active, setActive] = useState<IdentityProject | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const openProject = (project: IdentityProject) => {
    openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setActive(project);
  };

  useEffect(() => {
    if (!active) return;
    const close = (event: KeyboardEvent) => {
      if(event.key === "Escape"){ event.preventDefault(); setActive(null); }
      // Keep keyboard focus in the dialog until dismissed.
      if(event.key === "Tab" && closeRef.current){
        event.preventDefault();
        closeRef.current.focus();
      }
    };
    closeRef.current?.focus();
    document.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", close);
      document.body.style.overflow = "";
      openerRef.current?.focus();
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
              onClick={() => openProject(project)}
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

              </div>
            </button>
          </article>
        ))}
      </div>

      {active && (
        <div className="identity-modal" role="dialog" aria-modal="true" aria-label={`${active.name} project`} onClick={() => setActive(null)}>
          <div className="identity-modal-card" onClick={(event) => event.stopPropagation()}>
            <button ref={closeRef} className="identity-modal-close" type="button" onClick={() => setActive(null)} aria-label="Close">×</button>
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
