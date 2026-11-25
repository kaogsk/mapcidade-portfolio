"use client";

import { useEffect, useMemo, useState } from "react";
import {
  AREAS,
  COPY,
  METRICS,
  PRODUCTION_HIGHLIGHTS,
  PROFILES,
  PROJECT_META,
  PROJECTS,
  STACK_GROUPS,
  type AreaKey,
  type Lang,
} from "@/lib/portfolio-data";
import styles from "./page.module.css";

const AREA_KEYS = Object.keys(AREAS) as AreaKey[];

const UI = {
  pt: {
    eyebrow: "Engenharia de Software · Observabilidade & IA",
    headlineStart: "Construo sistemas que tornam visível o que falha",
    headlineEm: "antes que vire incidente.",
    lead: "Desenvolvo ferramentas para monitoramento operacional, triagem assistida por IA, auditoria de dados e automação de fluxos em produção. Todos os repositórios abaixo são reconstruções anonimizadas com dados fictícios.",
    ctaProjects: "Explorar 12 sistemas",
    navSystems: "Sistemas",
    navProd: "Em produção",
    navStack: "Stack",
    dossierLabel: "Dossiê de produção",
    dossierBadge: "MapCidade · Anonimizado",
    tabs: ["Triagem IA", "Observabilidade", "Paridade"],
    catalogKicker: "Catálogo técnico",
    catalogTitle: "Sistemas reconstruídos do zero",
    allAreas: "Todas as áreas",
    allFormats: "Todos os formatos",
    searchPlaceholder: "Buscar por nome, problema ou stack...",
    showing: (n: number, total: number) => `${n} de ${total} sistemas`,
    inspect: "Inspecionar →",
    empty: "Nenhum projeto encontrado com os filtros atuais.",
    prodKicker: "Prova de engenharia",
    prodTitle: "Decisões reais de produção, sem maquiagem",
    prodSub: "Arquitetura pensada para operação diária: custo previsível de API, leitura segura por padrão e validação objetiva em migrações.",
    stackKicker: "Ecossistema técnico",
    stackTitle: "Ferramentas e práticas no dia a dia",
    patternLabel: "Padrão arquitetural",
    impactLabel: "Resultado principal",
    prevProject: "← Anterior",
    nextProject: "Próximo →",
    closeLabel: "Fechar painel",
    footerNote: "Reconstruções anonimizadas sob o tema fictício MapCidade — nenhum dado real de cliente, município ou infraestrutura.",
  },
  en: {
    eyebrow: "Software Engineering · Observability & AI",
    headlineStart: "I build systems that surface what breaks",
    headlineEm: "before it becomes an incident.",
    lead: "I build tools for operational monitoring, AI-assisted ticket triage, data auditing, and workflow automation in production. Every repository below is an anonymized reconstruction using fictional data.",
    ctaProjects: "Explore 12 systems",
    navSystems: "Systems",
    navProd: "In production",
    navStack: "Stack",
    dossierLabel: "Production dossier",
    dossierBadge: "MapCidade · Anonymized",
    tabs: ["AI Triage", "Observability", "Parity"],
    catalogKicker: "Technical catalog",
    catalogTitle: "Systems rebuilt from scratch",
    allAreas: "All areas",
    allFormats: "All formats",
    searchPlaceholder: "Search by name, problem, or stack...",
    showing: (n: number, total: number) => `${n} of ${total} systems`,
    inspect: "Inspect →",
    empty: "No projects match the active filters.",
    prodKicker: "Engineering proof",
    prodTitle: "Real production decisions, zero fluff",
    prodSub: "Architecture built for daily operations: predictable API spend, read-only safety by default, and objective parity checks during migrations.",
    stackKicker: "Technical ecosystem",
    stackTitle: "Core tools and daily practices",
    patternLabel: "Architecture pattern",
    impactLabel: "Primary outcome",
    prevProject: "← Previous",
    nextProject: "Next →",
    closeLabel: "Close panel",
    footerNote: "Anonymized reconstructions under the fictional MapCidade theme — no real client, municipality, or infrastructure data.",
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<Lang>("pt");
  const [activeTab, setActiveTab] = useState(0);
  const [selectedArea, setSelectedArea] = useState<AreaKey | "all">("all");
  const [selectedFormat, setSelectedFormat] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [inspectedSlug, setInspectedSlug] = useState<string | null>(null);

  const t = COPY[lang];
  const u = UI[lang];
  const activeHighlight = PRODUCTION_HIGHLIGHTS[activeTab];

  const formats = useMemo(
    () => Array.from(new Set(PROJECTS.map((p) => p.format))),
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      if (selectedArea !== "all" && p.area !== selectedArea) return false;
      if (selectedFormat !== "all" && p.format !== selectedFormat) return false;
      if (!q) return true;
      const haystack = [
        p.title[lang],
        p.problem[lang],
        p.solution[lang],
        p.slug,
        ...p.stack,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [lang, query, selectedArea, selectedFormat]);

  const inspectedIndex = inspectedSlug
    ? PROJECTS.findIndex((p) => p.slug === inspectedSlug)
    : -1;
  const inspectedProject = inspectedIndex >= 0 ? PROJECTS[inspectedIndex] : null;
  const inspectedMeta = inspectedProject ? PROJECT_META[inspectedProject.slug] : null;

  useEffect(() => {
    if (!inspectedSlug) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setInspectedSlug(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [inspectedSlug]);

  function changeLanguage(next: Lang) {
    document.documentElement.lang = next === "pt" ? "pt-BR" : "en";
    setLang(next);
  }

  return (
    <div className={styles.page}>
      <a className={styles.skip} href="#main">
        {t.skip}
      </a>

      <header className={styles.header}>
        <div className={`${styles.wrap} ${styles.headerInner}`}>
          <a href="#main" className={styles.brand}>
            <span className={styles.monogram} aria-hidden="true">W</span>
            <span className={styles.brandMeta}>
              <span>Wellington Costa</span>
              <small>{t.role}</small>
            </span>
          </a>

          <nav className={styles.nav} aria-label={t.index}>
            <a href="#systems">{u.navSystems}</a>
            <a href="#production">{u.navProd}</a>
            <a href="#stack">{u.navStack}</a>
          </nav>

          <div className={styles.headerActions}>
            <div className={styles.langSwitch} role="group" aria-label={t.language}>
              <button
                type="button"
                lang="pt"
                className={`${styles.langBtn} ${lang === "pt" ? styles.langBtnActive : ""}`}
                aria-pressed={lang === "pt"}
                onClick={() => changeLanguage("pt")}
              >
                PT
              </button>
              <button
                type="button"
                lang="en"
                className={`${styles.langBtn} ${lang === "en" ? styles.langBtnActive : ""}`}
                aria-pressed={lang === "en"}
                onClick={() => changeLanguage("en")}
              >
                EN
              </button>
            </div>
            <a
              className={styles.ghButton}
              href="https://github.com/kaogsk"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className={styles.hero}>
          <div className={`${styles.wrap} ${styles.heroGrid}`}>
            <div>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowDot} aria-hidden="true" />
                {u.eyebrow}
              </div>
              <h1 className={styles.heroTitle}>
                {u.headlineStart} — <em>{u.headlineEm}</em>
              </h1>
              <p className={styles.heroLead}>{u.lead}</p>
              <div className={styles.heroCtas}>
                <a href="#systems" className={styles.primaryBtn}>
                  {u.ctaProjects} <span aria-hidden="true">↓</span>
                </a>
                {PROFILES.map((profile) => (
                  <a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.secondaryBtn}
                  >
                    {profile.name} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            </div>

            <aside className={styles.dossier} aria-label={u.dossierLabel}>
              <div className={styles.dossierTop}>
                <span className={styles.dossierLabel}>{u.dossierLabel}</span>
                <span className={styles.dossierBadge}>{u.dossierBadge}</span>
              </div>

              <div className={styles.dossierTabs} role="tablist">
                {u.tabs.map((label, idx) => (
                  <button
                    key={label}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === idx}
                    className={`${styles.dossierTab} ${activeTab === idx ? styles.dossierTabActive : ""}`}
                    onClick={() => setActiveTab(idx)}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className={styles.dossierBody} role="tabpanel">
                <div className={styles.dossierMetric}>{activeHighlight.metric[lang]}</div>
                <h3>{activeHighlight.title[lang]}</h3>
                <p>{activeHighlight.summary[lang]}</p>

                <div className={styles.barGroup}>
                  <div className={styles.barTrack} aria-hidden="true">
                    <div
                      className={styles.barPrimary}
                      style={{ width: `${activeHighlight.stages[0].share}%` }}
                    />
                    {activeHighlight.stages[1] && (
                      <div
                        className={styles.barSecondary}
                        style={{ width: `${activeHighlight.stages[1].share}%` }}
                      />
                    )}
                  </div>
                  <div className={styles.barLegend}>
                    {activeHighlight.stages.map((s) => (
                      <span key={s.label.en}>
                        {s.label[lang]} ({s.share}%)
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.metricsStrip}>
                {METRICS.map((m) => (
                  <div key={m.id} className={styles.metricTile}>
                    <strong>{m.value}</strong>
                    <span>{m.label[lang]}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section id="systems" className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.kicker}>{u.catalogKicker}</p>
                <h2 className={styles.sectionTitle}>{u.catalogTitle}</h2>
                <p className={styles.sectionSub}>{t.context}</p>
              </div>
              <span className={styles.countPill}>
                {u.showing(filtered.length, PROJECTS.length)}
              </span>
            </div>

            <div className={styles.toolbar}>
              <div className={styles.filterRow} role="group" aria-label={t.index}>
                <button
                  type="button"
                  className={`${styles.filterPill} ${selectedArea === "all" ? styles.filterPillActive : ""}`}
                  onClick={() => setSelectedArea("all")}
                >
                  {u.allAreas}
                </button>
                {AREA_KEYS.map((area) => (
                  <button
                    key={area}
                    type="button"
                    className={`${styles.filterPill} ${selectedArea === area ? styles.filterPillActive : ""}`}
                    onClick={() => setSelectedArea(area)}
                  >
                    {AREAS[area][lang]}
                  </button>
                ))}
              </div>

              <div className={styles.searchControls}>
                <select
                  aria-label={u.allFormats}
                  className={styles.formatSelect}
                  value={selectedFormat}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                >
                  <option value="all">{u.allFormats}</option>
                  {formats.map((f) => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
                <input
                  type="search"
                  className={styles.searchInput}
                  placeholder={u.searchPlaceholder}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className={styles.emptyState}>{u.empty}</div>
            ) : (
              <div className={styles.grid}>
                {filtered.map((p) => {
                  const meta = PROJECT_META[p.slug];
                  return (
                    <article key={p.slug} className={styles.card}>
                      <div className={styles.cardTop}>
                        <span className={styles.cardIndex}>{meta.code}</span>
                        <div className={styles.cardBadges}>
                          <span className={styles.areaTag}>{AREAS[p.area][lang]}</span>
                          <span className={styles.formatTag}>{p.format}</span>
                        </div>
                      </div>

                      <h3 className={styles.cardTitle}>{p.title[lang]}</h3>
                      <p className={styles.cardPattern}>{meta.pattern[lang]}</p>

                      <dl className={styles.cardDl}>
                        <div>
                          <dt>{t.problem}</dt>
                          <dd>{p.problem[lang]}</dd>
                        </div>
                        <div>
                          <dt>{t.solution}</dt>
                          <dd>{p.solution[lang]}</dd>
                        </div>
                      </dl>

                      <ul className={styles.stackList} role="list">
                        {p.stack.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>

                      <div className={styles.cardFooter}>
                        <div className={styles.cardLinks}>
                          <a
                            href={`https://github.com/kaogsk/mapcidade-${p.slug}`}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${t.code} · ${p.title[lang]}`}
                          >
                            GitHub <span aria-hidden="true">↗</span>
                          </a>
                          {p.demoUrl && (
                            <a
                              href={p.demoUrl}
                              target="_blank"
                              rel="noreferrer"
                              className={styles.demoLink}
                            >
                              {t.demo} <span aria-hidden="true">↗</span>
                            </a>
                          )}
                        </div>
                        <button
                          type="button"
                          className={styles.inspectBtn}
                          onClick={() => setInspectedSlug(p.slug)}
                        >
                          {u.inspect}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <section id="production" className={styles.darkBand}>
          <div className={styles.wrap}>
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.kicker}>{u.prodKicker}</p>
                <h2 className={styles.sectionTitle}>{u.prodTitle}</h2>
                <p className={styles.sectionSub}>{u.prodSub}</p>
              </div>
            </div>

            <div className={styles.darkGrid}>
              {PRODUCTION_HIGHLIGHTS.map((item) => (
                <article key={item.id} className={styles.darkCard}>
                  <span className={styles.darkCardTag}>{item.tag[lang]}</span>
                  <h3>{item.title[lang]}</h3>
                  <div className={styles.darkCardMetric}>{item.metric[lang]}</div>
                  <p>{item.summary[lang]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.sectionHeader}>
              <div>
                <p className={styles.kicker}>{u.stackKicker}</p>
                <h2 className={styles.sectionTitle}>{u.stackTitle}</h2>
              </div>
            </div>

            <div className={styles.stackGrid}>
              {STACK_GROUPS.map((group) => (
                <div key={group.id} className={styles.stackCard}>
                  <h3>{group.title[lang]}</h3>
                  <div className={styles.stackPills}>
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.wrap} ${styles.footerInner}`}>
          <span>{u.footerNote}</span>
          <div className={styles.footerLinks}>
            {PROFILES.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noreferrer">
                {p.name} ({p.handle}) <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </footer>

      {inspectedProject && inspectedMeta && (
        <div
          className={styles.drawerBackdrop}
          role="dialog"
          aria-modal="true"
          aria-labelledby="drawer-title"
          onClick={() => setInspectedSlug(null)}
        >
          <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.drawerHead}>
              <span className={styles.cardIndex}>
                {inspectedMeta.code} · {inspectedProject.format}
              </span>
              <button
                type="button"
                className={styles.closeBtn}
                aria-label={u.closeLabel}
                onClick={() => setInspectedSlug(null)}
              >
                ×
              </button>
            </div>

            <h3 id="drawer-title" className={styles.drawerTitle}>
              {inspectedProject.title[lang]}
            </h3>

            <div className={styles.drawerMetaGrid}>
              <div className={styles.drawerMetaBox}>
                <small>{u.patternLabel}</small>
                <strong>{inspectedMeta.pattern[lang]}</strong>
              </div>
              <div className={styles.drawerMetaBox}>
                <small>{u.impactLabel}</small>
                <strong>{inspectedMeta.impact[lang]}</strong>
              </div>
            </div>

            <div className={styles.drawerBlock}>
              <h4>{t.problem}</h4>
              <p>{inspectedProject.problem[lang]}</p>
            </div>

            <div className={styles.drawerBlock}>
              <h4>{t.solution}</h4>
              <p>{inspectedProject.solution[lang]}</p>
            </div>

            <div className={styles.drawerBlock}>
              <h4>Stack</h4>
              <ul className={styles.stackList} role="list">
                {inspectedProject.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            <div className={styles.heroCtas}>
              <a
                className={styles.primaryBtn}
                href={`https://github.com/kaogsk/mapcidade-${inspectedProject.slug}`}
                target="_blank"
                rel="noreferrer"
              >
                {t.code} <span aria-hidden="true">↗</span>
              </a>
              {inspectedProject.demoUrl && (
                <a
                  className={styles.secondaryBtn}
                  href={inspectedProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.demo} <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>

            <div className={styles.drawerNav}>
              <button
                type="button"
                onClick={() => {
                  const prev = (inspectedIndex - 1 + PROJECTS.length) % PROJECTS.length;
                  setInspectedSlug(PROJECTS[prev].slug);
                }}
              >
                {u.prevProject}
              </button>
              <button
                type="button"
                onClick={() => {
                  const next = (inspectedIndex + 1) % PROJECTS.length;
                  setInspectedSlug(PROJECTS[next].slug);
                }}
              >
                {u.nextProject}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
