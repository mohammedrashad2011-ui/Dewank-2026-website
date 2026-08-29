"use client";

import { useEffect } from "react";

export default function RiyadhInteractions() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".riyadh-en");
    if (!root) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const cleanup: Array<() => void> = [];

    const revealTargets = Array.from(
      root.querySelectorAll<HTMLElement>(
        ".re-hero-copy,.re-board,.re-intro-grid,.re-section-head,.re-service-card,.re-fit-list article,.re-saudi>div,.re-process-grid article,.re-faq details,.re-final>div"
      )
    );

    revealTargets.forEach((element, index) => {
      element.classList.add("re-reveal");
      element.style.setProperty("--re-delay", `${Math.min(index % 6, 5) * 55}ms`);
    });

    if (!reducedMotion && "IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            (entry.target as HTMLElement).classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -7% 0px" }
      );
      revealTargets.forEach((element) => revealObserver.observe(element));
      cleanup.push(() => revealObserver.disconnect());
    } else {
      revealTargets.forEach((element) => element.classList.add("is-visible"));
    }

    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      root.style.setProperty("--re-progress", `${progress * 100}%`);
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateProgress);
    };
    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    cleanup.push(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    });

    const navLinks = Array.from(root.querySelectorAll<HTMLAnchorElement>('.re-nav nav a[href^="#"]'));
    const sectionMap = navLinks
      .map((link) => {
        const id = link.getAttribute("href")?.slice(1);
        return id ? { link, section: document.getElementById(id) } : null;
      })
      .filter((item): item is { link: HTMLAnchorElement; section: HTMLElement } => Boolean(item?.section));

    if (sectionMap.length && "IntersectionObserver" in window) {
      const sectionObserver = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (!visible) return;
          navLinks.forEach((link) => link.classList.remove("is-active"));
          sectionMap.find((item) => item.section === visible.target)?.link.classList.add("is-active");
        },
        { threshold: [0.18, 0.35, 0.55], rootMargin: "-18% 0px -60% 0px" }
      );
      sectionMap.forEach(({ section }) => sectionObserver.observe(section));
      cleanup.push(() => sectionObserver.disconnect());
    }

    if (!reducedMotion && finePointer) {
      const board = root.querySelector<HTMLElement>(".re-board");
      if (board) {
        const onBoardMove = (event: PointerEvent) => {
          const rect = board.getBoundingClientRect();
          const px = (event.clientX - rect.left) / rect.width;
          const py = (event.clientY - rect.top) / rect.height;
          board.style.setProperty("--re-tilt-x", `${(0.5 - py) * 5}deg`);
          board.style.setProperty("--re-tilt-y", `${(px - 0.5) * 7}deg`);
          board.style.setProperty("--re-glow-x", `${px * 100}%`);
          board.style.setProperty("--re-glow-y", `${py * 100}%`);
        };
        const resetBoard = () => {
          board.style.setProperty("--re-tilt-x", "0deg");
          board.style.setProperty("--re-tilt-y", "0deg");
          board.style.setProperty("--re-glow-x", "50%");
          board.style.setProperty("--re-glow-y", "50%");
        };
        board.addEventListener("pointermove", onBoardMove);
        board.addEventListener("pointerleave", resetBoard);
        cleanup.push(() => {
          board.removeEventListener("pointermove", onBoardMove);
          board.removeEventListener("pointerleave", resetBoard);
        });
      }

      const cards = Array.from(root.querySelectorAll<HTMLElement>(".re-service-card,.re-process-grid article"));
      cards.forEach((card) => {
        const onCardMove = (event: PointerEvent) => {
          const rect = card.getBoundingClientRect();
          card.style.setProperty("--re-mx", `${event.clientX - rect.left}px`);
          card.style.setProperty("--re-my", `${event.clientY - rect.top}px`);
        };
        card.addEventListener("pointermove", onCardMove);
        cleanup.push(() => card.removeEventListener("pointermove", onCardMove));
      });
    }

    return () => cleanup.forEach((fn) => fn());
  }, []);

  return <div className="re-scroll-progress" aria-hidden="true" />;
}
