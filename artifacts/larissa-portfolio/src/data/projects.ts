export type Project = {
  title: string;
  badge: string;
  description: string;
  tags: string[];
  link: string;
  preview: string;
};

export const projects: Project[] = [
  {
    title: 'Workout Tracker',
    badge: 'Em desenvolvimento',
    description:
      'Plataforma full stack para quem treina em casa. Está sendo construída em monorepo, com autenticação completa (cadastro, login, recuperação de senha e perfil), PostgreSQL e envio de e-mails de teste em Docker, com front-end em React. É o projeto em que mais exercito o ciclo completo de um produto, do banco à interface.',
    tags: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Docker'],
    link: 'https://github.com/LarissaOlimpio/workout-tracker',
    preview: '[PRINT DO WORKOUT TRACKER]',
  },
  {
    title: 'events_api',
    badge: 'API REST',
    description:
      'Uma API REST completa para gerenciar eventos, com CRUD e relacionamento entre tabelas. Quis tratar como produto real: autenticação e autorização com Spring Security, migrações versionadas com Flyway e testes unitários rodando automaticamente no GitHub Actions. Aplico MVC, injeção de dependência, Repository, DTO e Singleton. Usei o Codex (CLI) como apoio, guiado por um arquivo de contexto, mas as decisões de arquitetura e segurança e a revisão de todo o código foram minhas.',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Flyway', 'GitHub Actions'],
    link: 'https://github.com/LarissaOlimpio/events-api',
    preview: '[DIAGRAMA OU PRINT DA API]',
  },
  {
    title: '[Título do projeto de dados]',
    badge: 'Dados',
    description:
      'Um projeto de análise de dados em que transformo dados brutos em respostas para perguntas de negócio, com SQL e dashboards.',
    tags: ['SQL', 'Power BI', '[Tecnologia]'],
    link: 'https://github.com/LarissaOlimpio',
    preview: '[PRINT DO DASHBOARD]',
  },
];
