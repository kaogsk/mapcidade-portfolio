import { AREAS, COPY, PROJECTS, type Lang } from "./content";

export { AREAS, COPY, PROJECTS, type Lang };

export type AreaKey = keyof typeof AREAS;

export interface ProfileLink {
  name: string;
  handle: string;
  url: string;
}

export const PROFILES: ProfileLink[] = [
  { name: "GitHub", handle: "@kaogsk", url: "https://github.com/kaogsk" },
  { name: "LinkedIn", handle: "oc-wellington", url: "https://www.linkedin.com/in/oc-wellington/" },
];

export interface MetricItem {
  id: string;
  value: string;
  label: Record<Lang, string>;
  detail: Record<Lang, string>;
}

export const METRICS: MetricItem[] = [
  {
    id: "systems",
    value: "12",
    label: { pt: "Sistemas reconstruídos", en: "Rebuilt systems" },
    detail: {
      pt: "Ferramentas de produção recriadas do zero com dados fictícios",
      en: "Production tools rebuilt from scratch with fictional data",
    },
  },
  {
    id: "envs",
    value: "123",
    label: { pt: "Ambientes monitorados", en: "Environments watched" },
    detail: {
      pt: "Verificação contínua de disponibilidade e coleta de evidências",
      en: "Continuous uptime verification and automated evidence capture",
    },
  },
  {
    id: "triage",
    value: "2.256",
    label: { pt: "Chamados triados · US$ 4,11", en: "Tickets triaged · $4.11" },
    detail: {
      pt: "Regras + SQLite FTS5 resolvem a maioria; IA só nos casos ambíguos",
      en: "Rules + SQLite FTS5 resolve most cases; LLM fallback for edge cases",
    },
  },
  {
    id: "tests",
    value: "400+",
    label: { pt: "Testes automatizados", en: "Automated tests" },
    detail: {
      pt: "11+ migrações validadas por paridade linha a linha e dry-run padrão",
      en: "11+ migrations validated by line-by-line parity and dry-run defaults",
    },
  },
];

export interface ProductionHighlight {
  id: string;
  tag: Record<Lang, string>;
  title: Record<Lang, string>;
  metric: Record<Lang, string>;
  summary: Record<Lang, string>;
  stages: { label: Record<Lang, string>; share: number }[];
}

export const PRODUCTION_HIGHLIGHTS: ProductionHighlight[] = [
  {
    id: "triage-ai",
    tag: { pt: "AUTOMAÇÃO & IA", en: "AUTOMATION & AI" },
    title: {
      pt: "Triagem híbrida com revisão humana",
      en: "Hybrid triage with human review",
    },
    metric: {
      pt: "2.256 chamados · US$ 4,11 de API",
      en: "2,256 tickets · $4.11 total API cost",
    },
    summary: {
      pt: "Uma camada determinística de regras e busca full-text (SQLite FTS5) resolve a maior parte da fila sem custo de modelo. A IA entra apenas nos casos difíceis e toda decisão passa por aprovação humana.",
      en: "A deterministic rules and full-text search layer (SQLite FTS5) resolves most tickets at zero inference cost. A model only handles ambiguous cases, and every decision goes through human review.",
    },
    stages: [
      { label: { pt: "Regras + FTS5", en: "Rules + FTS5" }, share: 76 },
      { label: { pt: "Fallback IA", en: "AI Fallback" }, share: 24 },
    ],
  },
  {
    id: "root-cause",
    tag: { pt: "OBSERVABILIDADE", en: "OBSERVABILITY" },
    title: {
      pt: "Monitoramento com coleta automática de evidências",
      en: "Uptime monitor with automatic evidence capture",
    },
    metric: {
      pt: "123 ambientes em tempo real",
      en: "123 environments in real time",
    },
    summary: {
      pt: "Máquina de estados por serviço evita alertas duplicados. Ao cruzar para queda, o sistema coleta diagnósticos em modo somente leitura antes mesmo de alguém abrir o terminal, com alerta separado de recuperação.",
      en: "A per-service state machine prevents alert storms. On outage transitions, it captures read-only diagnostics before anyone opens a terminal, firing a separate alert on recovery.",
    },
    stages: [
      { label: { pt: "Coleta somente leitura", en: "Read-only capture" }, share: 100 },
    ],
  },
  {
    id: "parity",
    tag: { pt: "DISCIPLINA DE ENGENHARIA", en: "ENGINEERING DISCIPLINE" },
    title: {
      pt: "Migrações com paridade verificada e dry-run padrão",
      en: "Verified-parity migrations with dry-run defaults",
    },
    metric: {
      pt: "11+ ferramentas · 400+ testes",
      en: "11+ tools · 400+ tests",
    },
    summary: {
      pt: "Nenhuma ferramenta legada foi dada como migrada por parecer funcionar: cada saída foi comparada linha a linha contra o sistema anterior, mantendo escrita protegida por confirmação explícita.",
      en: "No legacy tool was called done because it looked right: every output was diffed line-by-line against the previous system, keeping destructive writes gated behind explicit confirmation.",
    },
    stages: [
      { label: { pt: "Paridade & testes", en: "Parity & tests" }, share: 100 },
    ],
  },
];

export interface ProjectMeta {
  code: string;
  pattern: Record<Lang, string>;
  impact: Record<Lang, string>;
}

export const PROJECT_META: Record<string, ProjectMeta> = {
  "uptime-monitor": {
    code: "SYS-01",
    pattern: { pt: "Máquina de estados + evidências", en: "State machine + evidence capture" },
    impact: { pt: "Zero tempestade de alertas", en: "Zero alert storms" },
  },
  "ticket-router": {
    code: "SYS-02",
    pattern: { pt: "FTS5 + classificador híbrido", en: "FTS5 + hybrid classifier" },
    impact: { pt: "Revisão humana no fluxo", en: "Human-in-the-loop review" },
  },
  "support-analytics": {
    code: "SYS-03",
    pattern: { pt: "Sync OData + reconciliação SQLite", en: "OData sync + SQLite reconciliation" },
    impact: { pt: "SLA unificado entre filas", en: "Unified SLA across queues" },
  },
  "queue-radar": {
    code: "SYS-04",
    pattern: { pt: "Motor de prioridade em horário útil", en: "Business-hours priority engine" },
    impact: { pt: "Detecção precoce de gargalos", en: "Early bottleneck detection" },
  },
  "usage-bi": {
    code: "SYS-05",
    pattern: { pt: "Carga incremental multi-banco", en: "Multi-DB incremental ingestion" },
    impact: { pt: "Séries mensais comparáveis", en: "Comparable monthly series" },
  },
  "change-monitor-bi": {
    code: "SYS-06",
    pattern: { pt: "Snapshots diários + fallback seguro", en: "Daily snapshots + safe fallback" },
    impact: { pt: "Histórico resiliente a falhas", en: "Failure-resilient history" },
  },
  "lockdown-audit": {
    code: "SYS-07",
    pattern: { pt: "Auditoria SQL somente leitura", en: "Read-only SQL audit rules" },
    impact: { pt: "Correções revisáveis sem risco", en: "Reviewable fixes without risk" },
  },
  "access-log-viewer": {
    code: "SYS-08",
    pattern: { pt: "Escopo por equipe no servidor", en: "Server-enforced team scoping" },
    impact: { pt: "Auditoria e exportação XLSX", en: "Auditing & XLSX export" },
  },
  "contract-report": {
    code: "SYS-09",
    pattern: { pt: "Fan-out paralelo + geração DOCX", en: "Parallel fan-out + DOCX generation" },
    impact: { pt: "Consolidação resiliente por prazo", en: "Timeout-isolated consolidation" },
  },
  "cs-hub": {
    code: "SYS-10",
    pattern: { pt: "API FastAPI + score de saúde", en: "FastAPI + account health scoring" },
    impact: { pt: "Cobertura explícita dos dados", en: "Explicit data coverage flags" },
  },
  "report-builder": {
    code: "SYS-11",
    pattern: { pt: "Fluxo guiado somente leitura", en: "Read-only guided workflow" },
    impact: { pt: "Relatórios padronizados sob demanda", en: "Standardized on-demand reports" },
  },
  "training-track": {
    code: "SYS-12",
    pattern: { pt: "Trilha estruturada + progresso SQLite", en: "Structured curriculum + SQLite state" },
    impact: { pt: "Onboarding GIS mensurável", en: "Measurable GIS onboarding" },
  },
};

export const STACK_GROUPS = [
  {
    id: "backend",
    title: { pt: "Engenharia & APIs", en: "Engineering & APIs" },
    items: ["TypeScript", "Node.js", "Express 5", "Next.js", "Python", "FastAPI", "Zod"],
  },
  {
    id: "spatial",
    title: { pt: "Dados & Ecossistema GIS", en: "Data & GIS Ecosystem" },
    items: ["PostgreSQL", "PostGIS", "SQLite / FTS5", "SQL Espacial", "QGIS / SLD", "OData"],
  },
  {
    id: "quality",
    title: { pt: "Operações & Confiabilidade", en: "Operations & Reliability" },
    items: ["Vitest", "Dry-run por padrão", "Observabilidade", "Automação IA", "SheetJS / JSZip"],
  },
];
