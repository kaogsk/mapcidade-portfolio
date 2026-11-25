export type Lang = "en" | "pt";

export interface ProjectCard {
  slug: string;
  name: string;
  tag: string;
  problem: Record<Lang, string>;
  stack: string[];
  repoUrl: string | null;
  demoUrl: string | null;
  demoLabel: Record<Lang, string>;
}

export const PROJECTS: ProjectCard[] = [
  {
    slug: "uptime-monitor",
    name: "mapcidade-uptime-monitor",
    tag: "Web",
    problem: {
      en: "Watches a set of services and fires exactly one alert when one crosses into an outage — not once per failed check for the entire length of it.",
      pt: "Observa um conjunto de serviços e dispara exatamente um alerta quando um deles cai — não um alerta por falha durante toda a queda.",
    },
    stack: ["TypeScript", "Express 5"],
    repoUrl: "https://github.com/kaogsk/mapcidade-uptime-monitor",
    demoUrl: "https://mapcidade-uptime-monitor.vercel.app",
    demoLabel: { en: "live demo", pt: "demo ao vivo" },
  },
  {
    slug: "lockdown-audit",
    name: "mapcidade-lockdown-audit",
    tag: "CLI",
    problem: {
      en: "Audits a municipal database against 10 read-only lockdown rules — misconfigured tile layers, missing spatial indexes, invalid geometry, suspicious external URLs — and prints the fix as reviewable SQL, never runs it.",
      pt: "Audita um banco municipal contra 10 regras de travamento somente-leitura — camada de tile mal configurada, índice espacial faltando, geometria inválida, URL externa suspeita — e imprime a correção como SQL revisável, nunca roda sozinho.",
    },
    stack: ["TypeScript", "node:sqlite"],
    repoUrl: "https://github.com/kaogsk/mapcidade-lockdown-audit",
    demoUrl: null,
    demoLabel: { en: "clone & run", pt: "clone & rode" },
  },
  {
    slug: "access-log-viewer",
    name: "mapcidade-access-log-viewer",
    tag: "Web",
    problem: {
      en: "Turns raw per-collaborator access and edit logs into a manager-scoped audit view with XLSX export — each manager only ever sees their own team's activity.",
      pt: "Transforma log cru de acesso e edição por colaborador numa visão de auditoria por gestor, com export XLSX — cada gestor só vê o próprio time.",
    },
    stack: ["TypeScript", "Express 5", "nunjucks", "SheetJS"],
    repoUrl: "https://github.com/kaogsk/mapcidade-access-log-viewer",
    demoUrl: null,
    demoLabel: { en: "clone & run", pt: "clone & rode" },
  },
  {
    slug: "report-builder",
    name: "mapcidade-report-builder",
    tag: "Web",
    problem: {
      en: "Walks a 4-step guided flow to generate one of four ready-to-send access-report texts per city, read-only end to end.",
      pt: "Guia um fluxo de 4 passos para escolher e gerar um relatório de acesso pronto para envio por município, com acesso somente leitura do início ao fim.",
    },
    stack: ["TypeScript", "Express 5", "nunjucks"],
    repoUrl: "https://github.com/kaogsk/mapcidade-report-builder",
    demoUrl: null,
    demoLabel: { en: "clone & run", pt: "clone & rode" },
  },
  {
    slug: "support-analytics",
    name: "mapcidade-support-analytics",
    tag: "Web",
    problem: {
      en: "Reconciles recent and archived support tickets to calculate SLA and workload metrics per analyst.",
      pt: "Reconcilia chamados de suporte recentes e arquivados para calcular indicadores de SLA e carga de trabalho por analista.",
    },
    stack: ["TypeScript", "Express 5", "Next.js", "SQLite", "OData"],
    repoUrl: null,
    demoUrl: null,
    demoLabel: { en: "local demo", pt: "demo local" },
  },
  {
    slug: "queue-radar",
    name: "mapcidade-queue-radar",
    tag: "Web",
    problem: {
      en: "Prioritizes active support tickets by business-hours age, status, and assignment so the team can spot where to act.",
      pt: "Prioriza chamados ativos por tempo em horário útil, status e responsável para ajudar a equipe a identificar onde agir.",
    },
    stack: ["TypeScript", "Express 5", "OData", "Vitest"],
    repoUrl: null,
    demoUrl: null,
    demoLabel: { en: "local demo", pt: "demo local" },
  },
  {
    slug: "contract-report",
    name: "mapcidade-contract-report",
    tag: "CLI + Web",
    problem: {
      en: "Collects support, access, and infrastructure metrics in parallel and turns the reviewed results into a DOCX contract report.",
      pt: "Coleta em paralelo métricas de suporte, acesso e infraestrutura e gera um relatório contratual DOCX após a revisão.",
    },
    stack: ["TypeScript", "Express 5", "SQLite", "JSZip"],
    repoUrl: null,
    demoUrl: null,
    demoLabel: { en: "local demo", pt: "demo local" },
  },
  {
    slug: "change-monitor-bi",
    name: "mapcidade-change-monitor-bi",
    tag: "CLI + Web",
    problem: {
      en: "Consolidates GIS change alerts, review activity, and project deadlines across municipal databases.",
      pt: "Consolida alertas de alterações no GIS, atividade de análise e prazos de projetos de vários bancos municipais.",
    },
    stack: ["TypeScript", "Express 5", "SQLite", "SQL"],
    repoUrl: null,
    demoUrl: null,
    demoLabel: { en: "local demo", pt: "demo local" },
  },
  {
    slug: "usage-bi",
    name: "mapcidade-usage-bi",
    tag: "CLI + Web",
    problem: {
      en: "Loads usage events from multiple municipal databases into a reporting store with historical rollups.",
      pt: "Carrega eventos de uso de vários bancos municipais em uma base analítica com agregações históricas.",
    },
    stack: ["TypeScript", "Express 5", "SQLite", "Zod"],
    repoUrl: null,
    demoUrl: null,
    demoLabel: { en: "local demo", pt: "demo local" },
  },
  {
    slug: "cs-hub",
    name: "mapcidade-cs-hub",
    tag: "Web",
    problem: {
      en: "Brings contracts, service hours, and account health into one workspace for Customer Success teams.",
      pt: "Reúne contratos, horas de atendimento e indicadores de saúde da carteira em um painel para Customer Success.",
    },
    stack: ["Python", "FastAPI", "SQLite"],
    repoUrl: null,
    demoUrl: null,
    demoLabel: { en: "local demo", pt: "demo local" },
  },
  {
    slug: "ticket-router",
    name: "mapcidade-ticket-router",
    tag: "Web",
    problem: {
      en: "Combines rules, full-text search, and a fallback classifier to route support tickets and surface cases for human review.",
      pt: "Combina regras, busca textual e um classificador de fallback para encaminhar chamados e sinalizar casos para revisão humana.",
    },
    stack: ["TypeScript", "Express 5", "SQLite FTS5"],
    repoUrl: null,
    demoUrl: null,
    demoLabel: { en: "local demo", pt: "demo local" },
  },
  {
    slug: "training-track",
    name: "mapcidade-training-track",
    tag: "CLI + Web",
    problem: {
      en: "Tracks lesson progress and uses practical exercises to teach municipal GIS workflows.",
      pt: "Acompanha o progresso nas aulas e usa exercícios práticos para ensinar fluxos de trabalho de GIS municipal.",
    },
    stack: ["TypeScript", "Express 5", "SQLite", "Zod"],
    repoUrl: null,
    demoUrl: null,
    demoLabel: { en: "local demo", pt: "demo local" },
  },
];

export const COPY = {
  en: {
    kicker: "PORTFOLIO — ANONYMIZED SYSTEMS",
    heroTitle: "I build the tools that make broken things visible before they get expensive.",
    heroBody:
      "Software engineer focused on AI-assisted automation for legacy systems and operational observability. Everything below is a from-scratch, anonymized reconstruction of real production architecture — fictional data only, real engineering.",
    heroCta: "See the systems ↓",
    aiSectionLabel: "AUTOMATION & AI",
    aiSectionTitle: "Ticket triage and incident investigation",
    aiCards: [
      {
        title: "Ticket classifier",
        stat: "2,256 tickets classified · $4.11 total API cost",
        body: "A rules + full-text search layer resolves most tickets on its own. A model is only called on the cases hard enough to need one. Every classification still passes human review before it's final.",
      },
      {
        title: "Uptime monitor with root-cause pipeline",
        stat: "123 environments watched in real time",
        body: "Detects an outage and collects the evidence through read-only access the moment it happens, before anyone opens a terminal. A built-in stage feeds that evidence to a model to draft the root-cause report along the on-call team's own investigation script; in production it currently runs collection-only, with the drafting stage switched off.",
      },
    ],
    migrationLabel: "MIGRATION & ENGINEERING DISCIPLINE",
    migrationTitle: "11+ legacy tools moved to a modern stack — none of it \"looked done\"",
    migrationBody:
      "Every migration was only called complete after its output was diffed line-by-line or byte-by-byte against the system it replaced — never after it merely appeared to work. That discipline produced 400+ automated tests across the migrated tools, and it's the same rule this whole portfolio follows: dry-run by default, explicit confirmation before any destructive write, evidence before claims.",
    projectsLabel: `${PROJECTS.length} PRODUCTION SYSTEMS, REBUILT FROM SCRATCH`,
    projectsTitle: "Pick one and look inside",
    projectsSub:
      "Every system below is running in production today. Each repo is a from-scratch, fictional-data reconstruction of its architecture — same design decisions, none of the client data.",
    codeLink: "code",
    stackLabel: "STACK",
    footerNote: "Built and documented with Claude Code and Codex. All MapCidade demo data is fictional.",
  },
  pt: {
    kicker: "PORTFOLIO — SISTEMAS ANONIMIZADOS",
    heroTitle: "Construo as ferramentas que tornam visível o que já quebrou, antes que custe caro.",
    heroBody:
      "Engenheiro de software focado em automação com IA pra sistemas legados e observabilidade operacional. Tudo abaixo é uma reconstrução anonimizada, feita do zero, de arquitetura real de produção — dado fictício, engenharia real.",
    heroCta: "Ver os sistemas ↓",
    aiSectionLabel: "AUTOMAÇÃO E IA",
    aiSectionTitle: "Triagem de chamados e investigação de incidentes",
    aiCards: [
      {
        title: "Classificador de chamado",
        stat: "2.256 chamados classificados · US$ 4,11 de custo total de API",
        body: "Uma camada de regras + busca full-text resolve a maioria dos chamados sozinha. Um modelo só é acionado nos casos difíceis o suficiente pra precisar de um. Toda classificação ainda passa por revisão humana antes de virar decisão final.",
      },
      {
        title: "Monitor de disponibilidade com pipeline de causa raiz",
        stat: "123 ambientes observados em tempo real",
        body: "Detecta uma queda e coleta a evidência por acesso somente-leitura na hora em que ela acontece, antes de alguém abrir um terminal. Uma etapa embutida entrega essa evidência a um modelo pra rascunhar o relatório de causa raiz no roteiro de investigação da equipe de plantão; em produção, hoje roda só a coleta, com a etapa de rascunho desligada.",
      },
    ],
    migrationLabel: "MIGRAÇÃO E DISCIPLINA DE ENGENHARIA",
    migrationTitle: "11+ ferramentas legadas migradas — nenhuma \"parecia estar pronta\"",
    migrationBody:
      "Toda migração só foi considerada pronta depois de comparar a saída, linha a linha ou byte a byte, contra o sistema que ela substituiu — nunca só porque parecia funcionar. Essa disciplina gerou mais de 400 testes automatizados nas ferramentas migradas, e é a mesma regra que esse portfolio inteiro segue: dry-run por padrão, confirmação explícita antes de qualquer escrita destrutiva, evidência antes de afirmação.",
    projectsLabel: `${PROJECTS.length} SISTEMAS EM PRODUÇÃO, RECONSTRUÍDOS DO ZERO`,
    projectsTitle: "Escolha um e olhe por dentro",
    projectsSub:
      "Todos os sistemas abaixo estão em produção hoje. Cada repo é uma reconstrução anonimizada, com dado fictício, da arquitetura dele — mesma decisão técnica, nenhum dado de cliente.",
    codeLink: "código",
    stackLabel: "STACK",
    footerNote: "Construído e documentado com Claude Code e Codex. Todas as demonstrações do MapCidade usam dados fictícios.",
  },
} as const;
