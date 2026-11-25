"use client";

import { useState } from "react";
import { AREAS, COPY, PROJECTS, type Lang } from "@/lib/content";

const areas = Object.keys(AREAS) as (keyof typeof AREAS)[];
const profiles = [
  { name: "GitHub", url: "https://github.com/kaogsk" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/oc-wellington/" },
];

export default function Home() {
  const [lang, setLang] = useState<Lang>("pt");
  const t = COPY[lang];

  function changeLanguage(next: Lang) {
    document.documentElement.lang = next === "pt" ? "pt-BR" : "en";
    setLang(next);
  }

  return (
    <>
      <a className="skip" href="#main">{t.skip}</a>
      <header className="masthead">
        <div className="wrap masthead-inner">
          <a className="wordmark" href="#main">Wellington Costa</a>
          <div className="language" role="group" aria-label={t.language}>
            <button type="button" lang="pt" aria-pressed={lang === "pt"} onClick={() => changeLanguage("pt")}>PT</button>
            <button type="button" lang="en" aria-pressed={lang === "en"} onClick={() => changeLanguage("en")}>EN</button>
          </div>
        </div>
      </header>

      <main id="main" className="wrap">
        <section className="intro" aria-labelledby="intro-title">
          <h1 id="intro-title">{t.role}</h1>
          <p>{t.intro}</p>
          <div className="profiles">
            {profiles.map(({ name, url }) => (
              <a key={name} href={url} target="_blank" rel="noreferrer">
                {name} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section id="projects" aria-labelledby="projects-title" className="projects">
          <div className="project-intro">
            <h2 id="projects-title">{t.projects}</h2>
            <p>{t.context}</p>
          </div>

          <div className="catalog">
            <nav className="index" aria-label={t.index}>
              {areas.map((area) => <a key={area} href={`#${area}`}>{AREAS[area][lang]}</a>)}
            </nav>
            <div className="groups">
              {areas.map((area) => (
                <section className="group" id={area} key={area} aria-labelledby={`${area}-title`}>
                  <h3 id={`${area}-title`}>{AREAS[area][lang]}</h3>
                  <div className="project-grid">
                    {PROJECTS.filter((project) => project.area === area).map((p) => (
                      <article className="project-card" key={p.slug} aria-labelledby={`${p.slug}-title`}>
                        <div className="card-heading">
                          <h4 id={`${p.slug}-title`}>{p.title[lang]}</h4>
                          <span className="format">{p.format}</span>
                        </div>
                        <dl>
                          <dt>{t.problem}</dt>
                          <dd>{p.problem[lang]}</dd>
                          <dt>{t.solution}</dt>
                          <dd>{p.solution[lang]}</dd>
                        </dl>
                        <ul className="stack" role="list">
                          {p.stack.map((item) => <li key={item}>{item}</li>)}
                        </ul>
                        <div className="card-links">
                          <a href={`https://github.com/kaogsk/mapcidade-${p.slug}`} target="_blank" rel="noreferrer" aria-label={`${t.code} · ${p.title[lang]}`}>
                            {t.code} <span aria-hidden="true">↗</span>
                          </a>
                          {p.demoUrl && (
                            <a href={p.demoUrl} target="_blank" rel="noreferrer">
                              {t.demo} <span aria-hidden="true">↗</span>
                            </a>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
