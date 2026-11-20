import type { Language } from './config';
import bootcampVideo from '../assets/bootcamp-dados_1794954607381.mp4';
import workoutVideo from '../assets/workout-Tracker_1794954612834.mp4';

export type Project = {
  id: string;
  title: string;
  badge: string;
  description: string;
  tags: string[];
  link: string;
  mediaKind: 'video' | 'browser';
  preview: string;
  videoSrc?: string;
  posterSrc?: string;
};

export const projects: Record<Language, Project[]> = {
  pt: [
    {
      id: 'workout-tracker',
      title: 'Workout Tracker - Train Up',
      badge: 'Em desenvolvimento',
      description: 'Plataforma full stack para quem treina em casa. Está sendo construída em monorepo, com autenticação completa (cadastro, login, recuperação de senha e perfil), PostgreSQL e envio de e-mails de teste em Docker, com front-end em React. É o projeto em que mais exercito o ciclo completo de um produto, do banco à interface.',
      tags: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Docker'],
      link: 'https://github.com/LarissaOlimpio/workout-tracker',
      mediaKind: 'video',
      preview: 'Prévia do Workout Tracker',
      videoSrc: workoutVideo,
      posterSrc: '/workout-tracker-poster.jpg',
    },
    {
      id: 'events-api',
      title: 'API de Eventos',
      badge: 'Em desenvolvimento',
      description: 'Uma API REST completa para gerenciar eventos, com CRUD e relacionamento entre tabelas. Quis tratar como produto real: autenticação e autorização com Spring Security, migrações versionadas com Flyway e testes unitários rodando automaticamente no GitHub Actions. Aplico MVC, injeção de dependência, Repository, DTO e Singleton. Usei o Codex (CLI) como apoio, guiado por um arquivo de contexto, mas as decisões de arquitetura e segurança e a revisão de todo o código foram minhas.',
      tags: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Flyway', 'GitHub Actions'],
      link: 'https://github.com/LarissaOlimpio/events-api',
      mediaKind: 'browser',
      preview: 'Em breve',
    },
    {
      id: 'digital-retail-bi',
      title: 'Eficiência Comercial e Maximização de Margem Operacional no Varejo Digital',
      badge: 'Business Intelligence',
      description: 'Pipeline completo de Business Intelligence — da normalização de dados brutos em SQL até uma dashboard executiva interativa no Power BI.',
      tags: ['SQL', 'Power BI', 'Excel', 'BigQuery'],
      link: 'https://github.com/LarissaOlimpio/Eficiencia-Comercial-no-Varejo-Digital',
      mediaKind: 'video',
      preview: 'Prévia do projeto de dados',
      videoSrc: bootcampVideo,
      posterSrc: '/data-analytics-poster.jpg',
    },
  ],
  en: [
    {
      id: 'workout-tracker',
      title: 'Workout Tracker - Train Up',
      badge: 'In development',
      description: 'A full stack platform for people who work out at home. It is being built in a monorepo with complete authentication (sign-up, login, password recovery, and profiles), PostgreSQL, test email delivery in Docker, and a React front end. This is where I get the most practice with the full product lifecycle, from database to interface.',
      tags: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Docker'],
      link: 'https://github.com/LarissaOlimpio/workout-tracker',
      mediaKind: 'video',
      preview: 'Workout Tracker preview',
      videoSrc: workoutVideo,
      posterSrc: '/workout-tracker-poster.jpg',
    },
    {
      id: 'events-api',
      title: 'Events API',
      badge: 'In development',
      description: 'A complete REST API for event management, with CRUD operations and relational tables. I approached it as a real product: authentication and authorization with Spring Security, versioned migrations with Flyway, and unit tests running automatically in GitHub Actions. I apply MVC, dependency injection, Repository, DTO, and Singleton patterns. I used Codex CLI as a supporting tool with a context file, while I made the architecture and security decisions and reviewed all the code.',
      tags: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Flyway', 'GitHub Actions'],
      link: 'https://github.com/LarissaOlimpio/events-api',
      mediaKind: 'browser',
      preview: 'Coming soon',
    },
    {
      id: 'digital-retail-bi',
      title: 'Commercial Efficiency and Operating Margin Maximization in Digital Retail',
      badge: 'Business Intelligence',
      description: 'End-to-end Business Intelligence pipeline—from raw data normalization in SQL to an interactive executive dashboard in Power BI.',
      tags: ['SQL', 'Power BI', 'Excel', 'BigQuery'],
      link: 'https://github.com/LarissaOlimpio/Eficiencia-Comercial-no-Varejo-Digital',
      mediaKind: 'video',
      preview: 'Data project preview',
      videoSrc: bootcampVideo,
      posterSrc: '/data-analytics-poster.jpg',
    },
  ],
};
