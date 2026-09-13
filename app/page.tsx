"use client";

import { useState } from "react";
import { COPY, PROJECTS, type Lang } from "@/lib/content";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = COPY[lang];

  return (
    <>
      <header className="topbar">
        <div className="wrap topbar-inner">
          <div className="brand">
            <span className="brand-dot" aria-hidden />
            MAPCIDADE.SYS
          </div>
          <div className="lang-toggle" role="group" aria-label="Language">
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>
              EN
            </button>
            <button className={lang === "pt" ? "active" : ""} onClick={() => setLang("pt")}>
              PT
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" style={{ borderTop: "none" }}>
          <div className="wrap">
            <div className="kicker">{t.kicker}</div>
            <h1 className="hero-title">{t.heroTitle}</h1>
            <p className="hero-body">{t.heroBody}</p>
            <a className="hero-cta" href="#projects">
              {t.heroCta}
            </a>
          </div>
        </section>

        <section id="ai">
          <div className="wrap">
            <div className="section-label">{t.aiSectionLabel}</div>
            <h2 className="section-title">{t.aiSectionTitle}</h2>
            <div className="ai-grid">
              {t.aiCards.map((card) => (
                <div className="hud-card ai-card" key={card.title}>
                  <h3>{card.title}</h3>
                  <div className="ai-stat">{card.stat}</div>
                  <p>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="migration">
          <div className="wrap">
            <div className="section-label">{t.migrationLabel}</div>
            <h2 className="section-title">{t.migrationTitle}</h2>
            <div className="migration-panel">
              <p>{t.migrationBody}</p>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="wrap">
            <div className="section-label">{t.projectsLabel}</div>
            <h2 className="section-title">{t.projectsTitle}</h2>
            <p className="section-sub">{t.projectsSub}</p>
            <div className="project-grid">
              {PROJECTS.map((p) => (
                <div className="hud-card project-card" key={p.slug}>
                  <div className="project-top">
                    <span className="project-name">{p.name}</span>
                    <span className="project-tag">{p.tag}</span>
                  </div>
                  <p className="project-problem">{p.problem[lang]}</p>
                  <div className="project-stack">{p.stack.join(" · ")}</div>
                  <div className="project-links">
                    <a href={p.repoUrl} target="_blank" rel="noreferrer">
                      → {t.codeLink}
                    </a>
                    {p.demoUrl ? (
                      <a href={p.demoUrl} target="_blank" rel="noreferrer">
                        → {p.demoLabel[lang]}
                      </a>
                    ) : (
                      <span className="disabled">→ {p.demoLabel[lang]}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="stack">
          <div className="wrap">
            <div className="section-label">{t.stackLabel}</div>
            <div className="stack-strip">
              {["TypeScript", "Node.js", "Express", "Next.js", "Python", "PostgreSQL", "PostGIS", "Docker", "Claude API"].map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap">
        <span>© 2026 — MapCidade Portfolio</span>
        <span>{t.footerNote}</span>
        <a href="https://github.com/kaogsk" target="_blank" rel="noreferrer">
          github.com/kaogsk
        </a>
      </footer>
    </>
  );
}
