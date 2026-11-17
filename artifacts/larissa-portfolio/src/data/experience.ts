import type { Language } from './config';

export type Experience = {
  company: string;
  date: string;
  role: string;
  summary: string;
  detail: string;
};

export const experiences: Record<Language, Experience[]> = {
  pt: [
    {
      company: 'Embraer',
      date: '09/2026 – atual',
      role: 'Estagiária de Desenvolvimento Full Stack',
      summary: 'Gráficos e análises sobre base Oracle. Um gráfico de dispersão apoia o Planejamento em decisões de estoque e giro.',
      detail: 'Construo gráficos e análises sobre uma base Oracle para o time de Planejamento de uma indústria aeronáutica, com ASP.NET, JavaScript e Highcharts. Um dos meus gráficos de dispersão passou a apoiar decisões de estoque e giro de materiais. Também faço o levantamento de requisitos direto com as áreas de negócio e trabalho com versionamento de código.',
    },
    {
      company: 'Alura',
      date: '06/2024 – 06/2025',
      role: 'Desenvolvedora Full Stack Java',
      summary: 'Regra de congelamento de matrículas sem bitributação, automação do catálogo e refatoração de código legado.',
      detail: 'Foi onde mais aprendi sobre sistemas em produção. Implementei a regra de congelamento e retomada automática de matrículas em novos produtos, garantindo a integridade do faturamento e evitando bitributação. Automatizei o agendamento e a publicação de cursos e trilhas, o que eliminou a intervenção manual do time de Produto e reduziu erros de sincronização do catálogo. No dia a dia, refatorei código legado em Java, Spring Boot e JSP com testes unitários, otimizei queries MySQL, apoiei a resolução de incidentes com logs e monitoramento no Datadog e participei de code reviews, deploys e pipelines com Jenkins, Git e GitHub Actions.',
    },
    {
      company: 'Supliu',
      date: '08/2023 – 01/2024',
      role: 'Desenvolvedora Front-end',
      summary: 'Aplicações em React, TypeScript e MUI a partir do Figma, com painel financeiro de dados dinâmicos.',
      detail: 'Desenvolvi aplicações web para imobiliárias e lanchonetes com React, TypeScript e MUI, a partir de protótipos do Figma, com fidelidade visual e responsividade. Criei um painel financeiro com visualização dinâmica de dados e atenção à performance de renderização, além de formulários e modais validados, consumindo APIs REST e GraphQL.',
    },
  ],
  en: [
    {
      company: 'Embraer',
      date: '09/2026 – present',
      role: 'Full Stack Development Intern',
      summary: 'Charts and analyses using Oracle data. A scatter plot supports Planning decisions about inventory and stock turnover.',
      detail: 'I build charts and analyses from an Oracle database for the Planning team at an aerospace manufacturer, using ASP.NET, JavaScript, and Highcharts. One of my scatter plots now supports decisions about inventory and material turnover. I also gather requirements directly from business teams and work with version control.',
    },
    {
      company: 'Alura',
      date: '06/2024 – 06/2025',
      role: 'Full Stack Java Developer',
      summary: 'Enrollment freeze rules without double billing, catalog automation, and legacy code refactoring.',
      detail: 'This is where I learned the most about systems in production. I implemented enrollment freeze and automatic resumption rules for new products, protecting billing integrity and preventing duplicate charges. I automated course and learning-path scheduling and publishing, eliminating manual work for the Product team and reducing catalog synchronization errors. Day to day, I refactored legacy Java, Spring Boot, and JSP code with unit tests, optimized MySQL queries, supported incident resolution with Datadog logs and monitoring, and took part in code reviews, deployments, and Jenkins, Git, and GitHub Actions pipelines.',
    },
    {
      company: 'Supliu',
      date: '08/2023 – 01/2024',
      role: 'Front-end Developer',
      summary: 'React, TypeScript, and MUI applications built from Figma designs, including a financial dashboard with dynamic data.',
      detail: 'I built web applications for real estate agencies and restaurants with React, TypeScript, and MUI, following Figma prototypes with visual accuracy and responsive layouts. I created a financial dashboard with dynamic data visualization and careful rendering performance, as well as validated forms and modals consuming REST and GraphQL APIs.',
    },
  ],
};
