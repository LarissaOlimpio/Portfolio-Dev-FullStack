export type Experience = {
  company: string;
  date: string;
  role: string;
  summary: string;
  detail: string;
};

export const experiences: Experience[] = [
  {
    company: 'Embraer',
    date: '09/2026 – atual',
    role: 'Estagiária de Desenvolvimento Full Stack',
    summary:
      'Gráficos e análises sobre base Oracle. Um gráfico de dispersão apoiou o Planejamento em decisões de estoque e giro.',
    detail:
      'Construo gráficos e análises sobre uma base Oracle para o time de Planejamento de uma indústria aeronáutica, com ASP.NET, JavaScript e Highcharts. Um dos meus gráficos de dispersão passou a apoiar decisões de estoque e giro de materiais. Também faço o levantamento de requisitos direto com as áreas de negócio e trabalho com versionamento de código.',
  },
  {
    company: 'Alura',
    date: '06/2024 – 06/2025',
    role: 'Desenvolvedora Full Stack Java',
    summary:
      'Regra de congelamento de matrículas sem bitributação, automação do catálogo e refatoração de código legado.',
    detail:
      'Foi onde mais aprendi sobre sistemas em produção. Implementei a regra de congelamento e retomada automática de matrículas em novos produtos, garantindo a integridade do faturamento e evitando bitributação. Automatizei o agendamento e a publicação de cursos e trilhas, o que eliminou a intervenção manual do time de Produto e reduziu erros de sincronização do catálogo. No dia a dia, refatorei código legado em Java, Spring Boot e JSP com testes unitários, otimizei queries MySQL, apoiei a resolução de incidentes com logs e monitoramento no Datadog e participei de code reviews, deploys e pipelines com Jenkins, Git e GitHub Actions.',
  },
  {
    company: 'Supliu',
    date: '08/2023 – 01/2024',
    role: 'Desenvolvedora Front-end',
    summary:
      'Aplicações em React, TypeScript e MUI a partir do Figma, com painel financeiro de dados dinâmicos.',
    detail:
      'Desenvolvi aplicações web para imobiliárias e lanchonetes com React, TypeScript e MUI, a partir de protótipos do Figma, com fidelidade visual e responsividade. Criei um painel financeiro com visualização dinâmica de dados e atenção à performance de renderização, além de formulários e modais validados, consumindo APIs REST e GraphQL.',
  },
];
