export type Lang = "en" | "pt";

export interface ProjectCard {
  slug: string;
  name: string;
  tag: string;
  problem: Record<Lang, string>;
  stack: string[];
  repoUrl: string;
  demoUrl: string | null;
  demoLabel: Record<Lang, string>;
}

export const PROJECTS: ProjectCard[] = [
  {
    slug: "schema-cli",
    name: "mapcidade-schema-cli",
    tag: "CLI",
    problem: {
      en: "Batch-registers a new attribute (column + metadata + permission) across dozens of map layers in one dry-run-safe pass, instead of doing it by hand, layer by layer.",
      pt: "Cadastra um atributo novo (coluna + metadados + permissão) em dezenas de camadas de mapa de uma vez, em modo dry-run seguro, em vez de fazer isso à mão, camada por camada.",
    },
    stack: ["TypeScript", "node:sqlite", "zod"],
    repoUrl: "https://github.com/kaogsk/mapcidade-schema-cli",
    demoUrl: null,
    demoLabel: { en: "clone & run", pt: "clone & rode" },
  },
  {
    slug: "style-converter",
    name: "mapcidade-style-converter",
    tag: "CLI",
    problem: {
      en: "Converts a QGIS categorized map style into GeoServer-ready SLD/XML — no more hand-translating colors and filters symbol by symbol.",
      pt: "Converte um estilo de mapa categorizado do QGIS em SLD/XML pronto pro GeoServer — sem traduzir cor e filtro à mão, símbolo por símbolo.",
    },
    stack: ["TypeScript", "fast-xml-parser"],
    repoUrl: "https://github.com/kaogsk/mapcidade-style-converter",
    demoUrl: null,
    demoLabel: { en: "clone & run", pt: "clone & rode" },
  },
  {
    slug: "form-engine",
    name: "mapcidade-form-engine",
    tag: "Web",
    problem: {
      en: "Renders and validates a full data-entry form purely from a JSON schema — a new form is a new JSON file, never a new page.",
      pt: "Renderiza e valida um formulário inteiro só a partir de um JSON schema — um formulário novo é um arquivo JSON novo, nunca uma página nova.",
    },
    stack: ["TypeScript", "Express 5", "node:sqlite"],
    repoUrl: "https://github.com/kaogsk/mapcidade-form-engine",
    demoUrl: "https://mapcidade-form-engine.vercel.app/forms/urban_tree",
    demoLabel: { en: "live demo", pt: "demo ao vivo" },
  },
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
    slug: "georef-tool",
    name: "mapcidade-georef-tool",
    tag: "CLI + Web",
    problem: {
      en: "Reads a scanned map image's pixel size straight off its PNG header and turns its world file into ready-to-review PostGIS placement SQL.",
      pt: "Lê o tamanho em pixel de uma imagem de mapa escaneada direto do cabeçalho do PNG e transforma o world file em SQL de posicionamento PostGIS pronto pra revisão.",
    },
    stack: ["TypeScript", "Express 5"],
    repoUrl: "https://github.com/kaogsk/mapcidade-georef-tool",
    demoUrl: "https://mapcidade-georef-tool.vercel.app",
    demoLabel: { en: "live demo", pt: "demo ao vivo" },
  },
  {
    slug: "ops-dashboard",
    name: "mapcidade-ops-dashboard",
    tag: "Web",
    problem: {
      en: "Turns a raw support-ticket feed into SLA breaches, unassigned backlog, category volume, and cycle time — four pure functions, zero spreadsheet.",
      pt: "Transforma uma lista crua de chamados em violação de SLA, backlog sem dono, volume por categoria e tempo de ciclo — quatro funções puras, zero planilha.",
    },
    stack: ["TypeScript", "Express 5"],
    repoUrl: "https://github.com/kaogsk/mapcidade-ops-dashboard",
    demoUrl: "https://mapcidade-ops-dashboard.vercel.app",
    demoLabel: { en: "live demo", pt: "demo ao vivo" },
  },
];

export const COPY = {
  en: {
    kicker: "PORTFOLIO — ANONYMIZED SYSTEMS",
    heroTitle: "I build the tools that make broken things visible before they get expensive.",
    heroBody:
      "Software engineer focused on AI-assisted automation for legacy systems and operational observability. Everything below is a from-scratch, anonymized reconstruction of real production architecture — fictional data only, real engineering.",
    heroCta: "See the systems ↓",
    aiSectionLabel: "AI IN PRODUCTION",
    aiSectionTitle: "Three systems, three different jobs for AI",
    aiCards: [
      {
        title: "Ticket classifier",
        stat: "2,256 tickets classified · $4.11 total API cost",
        body: "A rules + full-text search layer resolves most tickets on its own. A model is only called on the cases hard enough to need one. Every classification still passes human review before it's final.",
      },
      {
        title: "Uptime monitor with root-cause draft",
        stat: "93 environments watched in real time",
        body: "Detects an outage, collects evidence through read-only access, and drafts a root-cause report following the same investigation script the on-call team already uses — before anyone opens a terminal.",
      },
      {
        title: "Multi-agent dev orchestrator",
        stat: "built for my own workflow, adopted by the team",
        body: "Runs multiple coding agents in parallel, each isolated in its own workspace, with a shared task board and chat so they don't step on each other.",
      },
    ],
    migrationLabel: "MIGRATION & ENGINEERING DISCIPLINE",
    migrationTitle: "11+ legacy tools moved to a modern stack — none of it \"looked done\"",
    migrationBody:
      "Every migration was only called complete after its output was diffed line-by-line or byte-by-byte against the system it replaced — never after it merely appeared to work. That discipline produced 400+ automated tests across the migrated tools, and it's the same rule this whole portfolio follows: dry-run by default, explicit confirmation before any destructive write, evidence before claims.",
    projectsLabel: "SIX SYSTEMS, REBUILT CLEAN",
    projectsTitle: "Pick one and look inside",
    projectsSub:
      "Each repo below is a from-scratch, fictional-data reconstruction of a real internal tool's architecture — same design decisions, none of the client data.",
    codeLink: "code",
    stackLabel: "STACK",
    footerNote: "Built and documented with Claude Code. Fictional data throughout — MapCidade is not a real place.",
  },
  pt: {
    kicker: "PORTFOLIO — SISTEMAS ANONIMIZADOS",
    heroTitle: "Construo as ferramentas que tornam visível o que já quebrou, antes que custe caro.",
    heroBody:
      "Engenheiro de software focado em automação com IA pra sistemas legados e observabilidade operacional. Tudo abaixo é uma reconstrução anonimizada, feita do zero, de arquitetura real de produção — dado fictício, engenharia real.",
    heroCta: "Ver os sistemas ↓",
    aiSectionLabel: "IA EM PRODUÇÃO",
    aiSectionTitle: "Três sistemas, três jeitos diferentes de usar IA",
    aiCards: [
      {
        title: "Classificador de chamado",
        stat: "2.256 chamados classificados · US$ 4,11 de custo total de API",
        body: "Uma camada de regras + busca full-text resolve a maioria dos chamados sozinha. Um modelo só é acionado nos casos difíceis o suficiente pra precisar de um. Toda classificação ainda passa por revisão humana antes de virar decisão final.",
      },
      {
        title: "Monitor de disponibilidade com rascunho de causa raiz",
        stat: "93 ambientes observados em tempo real",
        body: "Detecta uma queda, coleta evidência por acesso somente-leitura, e rascunha um relatório de causa raiz seguindo o mesmo roteiro de investigação que a equipe de plantão já usa — antes de alguém abrir um terminal.",
      },
      {
        title: "Orquestrador de agentes de código",
        stat: "criado pro meu próprio fluxo, adotado pelo time",
        body: "Roda vários agentes de código em paralelo, cada um isolado no próprio ambiente de trabalho, com quadro de tarefas e chat compartilhado pra não pisarem um no outro.",
      },
    ],
    migrationLabel: "MIGRAÇÃO E DISCIPLINA DE ENGENHARIA",
    migrationTitle: "11+ ferramentas legadas migradas — nenhuma \"parecia estar pronta\"",
    migrationBody:
      "Toda migração só foi considerada pronta depois de comparar a saída, linha a linha ou byte a byte, contra o sistema que ela substituiu — nunca só porque parecia funcionar. Essa disciplina gerou mais de 400 testes automatizados nas ferramentas migradas, e é a mesma regra que esse portfolio inteiro segue: dry-run por padrão, confirmação explícita antes de qualquer escrita destrutiva, evidência antes de afirmação.",
    projectsLabel: "SEIS SISTEMAS, RECONSTRUÍDOS DO ZERO",
    projectsTitle: "Escolha um e olhe por dentro",
    projectsSub:
      "Cada repo abaixo é uma reconstrução anonimizada, com dado fictício, da arquitetura de uma ferramenta interna real — mesma decisão técnica, nenhum dado de cliente.",
    codeLink: "código",
    stackLabel: "STACK",
    footerNote: "Construído e documentado com Claude Code. Dado fictício do início ao fim — MapCidade não é um lugar real.",
  },
} as const;
