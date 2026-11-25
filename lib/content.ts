export type Lang = "pt" | "en";
type Translation = Record<Lang, string>;

export const AREAS = {
  "operations": {
    "pt": "Operações e suporte",
    "en": "Operations and support"
  },
  "data": {
    "pt": "Dados e auditoria",
    "en": "Data and auditing"
  },
  "delivery": {
    "pt": "Relatórios e fluxos de trabalho",
    "en": "Reporting and workflows"
  }
} as const;

interface Project {
  slug: string;
  area: keyof typeof AREAS;
  format: string;
  title: Translation;
  problem: Translation;
  solution: Translation;
  stack: string[];
  demoUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "uptime-monitor",
    area: "operations",
    format: "Web",
    title: { pt: "Monitor de disponibilidade", en: "Uptime monitoring" },
    problem: {
      pt: "Falhas consecutivas geravam notificações repetidas, dificultando a triagem de incidentes.",
      en: "Repeated failed checks generated duplicate alerts, making incidents harder to triage.",
    },
    solution: {
      pt: "Uma máquina de estados por serviço processa as verificações. Após falhas consecutivas, registra evidências e alerta na queda e na recuperação.",
      en: "A state machine per service processes health checks. Consecutive failures trigger evidence capture and an outage alert, with a separate recovery alert.",
    },
    stack: ["TypeScript", "Express 5"],
    demoUrl: "https://mapcidade-uptime-monitor.vercel.app",
  },
  {
    slug: "ticket-router",
    area: "operations",
    format: "Web",
    title: { pt: "Triagem de chamados", en: "Ticket routing" },
    problem: {
      pt: "A classificação manual de chamados atrasava o encaminhamento para o time responsável.",
      en: "Manual ticket classification delayed routing to the right team.",
    },
    solution: {
      pt: "Aplica regras e busca textual com SQLite FTS5. Usa um classificador nos casos restantes e encaminha decisões para revisão humana.",
      en: "Applies rules and SQLite FTS5 search, uses a fallback classifier, and surfaces decisions for human review.",
    },
    stack: ["TypeScript", "Express 5", "SQLite FTS5"],
  },
  {
    slug: "support-analytics",
    area: "operations",
    format: "Web",
    title: { pt: "Indicadores de suporte", en: "Support analytics" },
    problem: {
      pt: "Chamados recentes e arquivados vinham de fontes separadas, o que dificultava calcular SLA e volume por analista.",
      en: "Recent and archived tickets came from separate sources, making SLA and workload metrics difficult to calculate.",
    },
    solution: {
      pt: "Sincroniza os dois conjuntos via OData, reconcilia os registros em SQLite e apresenta os indicadores em um painel Next.js.",
      en: "Syncs both sets via OData, reconciles records in SQLite, and displays the metrics in a Next.js dashboard.",
    },
    stack: ["TypeScript", "Express 5", "Next.js", "SQLite", "OData"],
  },
  {
    slug: "queue-radar",
    area: "operations",
    format: "Web",
    title: { pt: "Radar de fila", en: "Queue radar" },
    problem: {
      pt: "A equipe precisava localizar chamados parados e identificar quais prazos exigiam atenção.",
      en: "The team needed to find stalled tickets and identify deadlines that required attention.",
    },
    solution: {
      pt: "Sincroniza a fila ativa e aplica regras de prioridade por status, responsável e tempo em horário útil.",
      en: "Syncs the active queue and applies priority rules based on status, assignee, and elapsed business hours.",
    },
    stack: ["TypeScript", "Express 5", "OData", "Vitest"],
  },
  {
    slug: "usage-bi",
    area: "data",
    format: "CLI + Web",
    title: { pt: "Painel de uso", en: "Usage analytics" },
    problem: {
      pt: "Os registros de uso estavam distribuídos em bancos municipais, dificultando comparar períodos.",
      en: "Usage records were spread across municipal databases, making periods hard to compare.",
    },
    solution: {
      pt: "Importa o histórico, atualiza os dados de forma incremental e consolida métricas mensais em uma base analítica.",
      en: "Imports historical records, loads new data incrementally, and consolidates monthly metrics in a reporting database.",
    },
    stack: ["TypeScript", "Express 5", "SQLite", "Zod"],
  },
  {
    slug: "change-monitor-bi",
    area: "data",
    format: "CLI + Web",
    title: { pt: "Monitoramento de alterações GIS", en: "GIS change monitoring" },
    problem: {
      pt: "Alertas, edições e prazos eram acompanhados em bases separadas.",
      en: "Alerts, edits, and deadlines were tracked across separate databases.",
    },
    solution: {
      pt: "Consolida as fontes em SQLite, mantém snapshots diários e reaproveita a última carga válida quando uma atualização falha.",
      en: "Consolidates sources in SQLite, stores daily snapshots, and keeps the last valid dataset when a refresh fails.",
    },
    stack: ["TypeScript", "Express 5", "SQLite", "SQL"],
  },
  {
    slug: "lockdown-audit",
    area: "data",
    format: "CLI",
    title: { pt: "Auditoria de configuração GIS", en: "GIS configuration audit" },
    problem: {
      pt: "Problemas de configuração, índices e geometrias exigiam verificações manuais no banco.",
      en: "Configuration, index, and geometry issues required manual database checks.",
    },
    solution: {
      pt: "Executa regras de auditoria em modo somente leitura e apresenta correções em SQL para revisão.",
      en: "Runs read-only audit rules and proposes SQL fixes for review.",
    },
    stack: ["TypeScript", "SQLite"],
  },
  {
    slug: "access-log-viewer",
    area: "data",
    format: "Web",
    title: { pt: "Auditoria de acessos e edições", en: "Access and edit auditing" },
    problem: {
      pt: "Gestores precisavam consultar registros de atividade e exportar apenas os dados de sua equipe.",
      en: "Managers needed to review and export activity records scoped to their own teams.",
    },
    solution: {
      pt: "Aplica o recorte por equipe no servidor, organiza os registros em uma interface e exporta o resultado em XLSX.",
      en: "Enforces team scope on the server, presents the records in a web interface, and exports the results as XLSX.",
    },
    stack: ["TypeScript", "Express 5", "Nunjucks", "SheetJS"],
  },
  {
    slug: "contract-report",
    area: "delivery",
    format: "CLI + Web",
    title: { pt: "Relatórios de contrato", en: "Contract reporting" },
    problem: {
      pt: "Relatórios contratuais exigiam reunir manualmente métricas de uso, infraestrutura e suporte.",
      en: "Contract reports required manually gathering usage, infrastructure, and support metrics.",
    },
    solution: {
      pt: "Consulta as fontes em paralelo com prazos independentes, apresenta as falhas para revisão e gera o documento em DOCX.",
      en: "Queries sources in parallel with independent timeouts, surfaces failures for review, and generates the DOCX report.",
    },
    stack: ["TypeScript", "Express 5", "SQLite", "JSZip"],
  },
  {
    slug: "cs-hub",
    area: "delivery",
    format: "Web",
    title: { pt: "Painel de Customer Success", en: "Customer Success dashboard" },
    problem: {
      pt: "A equipe precisava cruzar contratos, horas de atendimento e indicadores para acompanhar a carteira.",
      en: "The team needed to cross-reference contracts, service hours, and account indicators.",
    },
    solution: {
      pt: "Reúne as fontes em uma API FastAPI e calcula um indicador de saúde por conta, com informações sobre a cobertura dos dados.",
      en: "Combines the sources behind a FastAPI API and calculates account health scores with data coverage information.",
    },
    stack: ["Python", "FastAPI", "SQLite"],
  },
  {
    slug: "report-builder",
    area: "delivery",
    format: "Web",
    title: { pt: "Relatórios de acesso", en: "Access report builder" },
    problem: {
      pt: "A preparação manual dos relatórios de acesso repetia as mesmas consultas e etapas de formatação.",
      en: "Preparing access reports manually repeated the same lookups and formatting steps.",
    },
    solution: {
      pt: "Orienta a seleção do município e do tipo de relatório, consulta em modo somente leitura e devolve o texto formatado.",
      en: "Guides municipality and report type selection, runs read-only queries, and returns formatted text.",
    },
    stack: ["TypeScript", "Express 5", "Nunjucks"],
  },
  {
    slug: "training-track",
    area: "delivery",
    format: "CLI + Web",
    title: { pt: "Trilha de treinamento GIS", en: "GIS training track" },
    problem: {
      pt: "A equipe precisava padronizar o treinamento e acompanhar o progresso de cada pessoa.",
      en: "The team needed to standardize onboarding and track each learner’s progress.",
    },
    solution: {
      pt: "Organiza aulas e exercícios em conteúdo estruturado, registra o progresso em SQLite e oferece uma visão para gestores.",
      en: "Organizes lessons and exercises as structured content, records progress in SQLite, and provides a manager view.",
    },
    stack: ["TypeScript", "Express 5", "SQLite", "Zod"],
  },
];

export const COPY = {
  "pt": {
    "role": "Engenharia de software",
    "intro": "Desenvolvo ferramentas para monitoramento, análise de dados e automação de processos em sistemas de produção.",
    "projects": "Projetos",
    "context": "Os repositórios são reconstruções anonimizadas das ferramentas, com dados fictícios.",
    "index": "Áreas de atuação",
    "problem": "Problema",
    "solution": "Como implementei",
    "code": "Código no GitHub",
    "demo": "Demo online",
    "language": "Idioma",
    "skip": "Ir para o conteúdo"
  },
  "en": {
    "role": "Software engineering",
    "intro": "I build tools for monitoring, data analysis, and workflow automation in production systems.",
    "projects": "Projects",
    "context": "The repositories contain anonymized reconstructions of the tools using fictional data.",
    "index": "Project areas",
    "problem": "Problem",
    "solution": "Implementation",
    "code": "Code on GitHub",
    "demo": "Live demo",
    "language": "Language",
    "skip": "Skip to content"
  }
};
