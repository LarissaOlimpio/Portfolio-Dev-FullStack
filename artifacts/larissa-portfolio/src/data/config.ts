export type Language = 'pt' | 'en';

export const copy: Record<
  Language,
  {
    navigation: { home: string; about: string; projects: string; contact: string; letsTalk: string };
    navigationLabel: string;
    aboutTitle: string;
    experienceTitle: string;
    experienceSubtitle: string;
    projectsTitle: string;
    projectsSubtitle: string;
    principlesTitle: string;
    educationTitle: string;
    volunteerTitle: string;
    linkedin: string;
    linkedinMissing: string;
    github: string;
    currentlyAt: string;
    skillsLabel: string;
    expandExperience: string;
    collapseExperience: string;
    projectTags: string;
    viewRepository: string;
    videoPlaceholder: string;
    videoDescription: string;
    completed: string;
    inProgress: string;
    contactGithub: string;
  }
> = {
  pt: {
    navigation: { home: 'Início', about: 'Sobre', projects: 'Projetos', contact: 'Contato', letsTalk: 'Vamos conversar' },
    navigationLabel: 'Navegação principal',
    aboutTitle: 'Sobre mim',
    experienceTitle: 'Experiência',
    experienceSubtitle: 'Experiência em desenvolvimento, desde novas funcionalidades até sistemas em produção.',
    projectsTitle: 'Projetos em destaque',
    projectsSubtitle: 'Projetos que mostram como transformo problemas em soluções de software e dados.',
    principlesTitle: 'Como eu penso',
    educationTitle: 'Formação',
    volunteerTitle: 'Trabalho voluntário',
    linkedin: 'LinkedIn',
    linkedinMissing: 'Adicione o link do LinkedIn para ativar este botão',
    github: 'GitHub',
    currentlyAt: 'Atualmente na',
    skillsLabel: 'Tecnologias e ferramentas',
    expandExperience: 'Ler detalhes',
    collapseExperience: 'Fechar detalhes',
    projectTags: 'Tecnologias do projeto',
    viewRepository: 'Ver repositório',
    videoPlaceholder: 'Vídeo em breve',
    videoDescription: 'Espaço reservado para adicionar uma prévia em vídeo deste projeto.',
    completed: 'Concluído',
    inProgress: 'Cursando',
    contactGithub: 'Veja meus projetos no GitHub',
  },
  en: {
    navigation: { home: 'Home', about: 'About', projects: 'Projects', contact: 'Contact', letsTalk: 'Let’s connect' },
    navigationLabel: 'Main navigation',
    aboutTitle: 'About me',
    experienceTitle: 'Experience',
    experienceSubtitle: 'Development experience, from new features to supporting systems in production.',
    projectsTitle: 'Featured projects',
    projectsSubtitle: 'Projects that show how I turn software and data challenges into solutions.',
    principlesTitle: 'How I think',
    educationTitle: 'Education',
    volunteerTitle: 'Volunteer work',
    linkedin: 'LinkedIn',
    linkedinMissing: 'Add your LinkedIn URL to activate this button',
    github: 'GitHub',
    currentlyAt: 'Currently at',
    skillsLabel: 'Technologies and tools',
    expandExperience: 'Read details',
    collapseExperience: 'Close details',
    projectTags: 'Project technologies',
    viewRepository: 'View repository',
    videoPlaceholder: 'Video coming soon',
    videoDescription: 'Reserved space for a video preview of this project.',
    completed: 'Completed',
    inProgress: 'In progress',
    contactGithub: 'Explore my projects on GitHub',
  },
};

export const profile: Record<
  Language,
  {
    intro: string;
    headlineBefore: string;
    headlineWord: string;
    description: string;
    currently: string;
    aboutSubtitle: string;
    about: string[];
    volunteer: string;
    contactTitle: string;
    contactText: string;
    location: string;
    metadataTitle: string;
    metadataDescription: string;
  }
> = {
  pt: {
    intro: 'Oi, eu sou a Larissa',
    headlineBefore: 'Transformo regras de negócio em software que ',
    headlineWord: 'funciona',
    description: 'Desenvolvedora full stack com atuação em Java/Spring Boot e React/TypeScript, da criação de funcionalidades à sustentação de sistemas em produção.',
    currently: 'Embraer, desenvolvendo gráficos e análises com Oracle e .NET',
    aboutSubtitle: 'Desenvolvimento full stack com experiência em aplicações, dados e sistemas em produção.',
    about: [
      'Sou desenvolvedora full stack, com atuação em Java/Spring Boot e React/TypeScript. Já trabalhei do desenvolvimento de novas funcionalidades à sustentação de sistemas em produção: regras de negócio de faturamento, refatoração de código legado, testes unitários, monitoramento com Datadog e pipelines de CI/CD.',
      'Gosto de investigar problemas a fundo, trabalhar em equipe e compartilhar o que aprendo. Fui monitora voluntária e integrante do comitê do ONE Next Education, onde ajudei a criar o conceito do hackathon adotado pelas turmas seguintes.',
      'Hoje, estou na Embraer desenvolvendo gráficos e análises sobre dados de planejamento, e continuo evoluindo com projetos próprios, como o Workout Tracker e a Events API. Abaixo você encontra os projetos em que estou trabalhando.',
    ],
    volunteer:
      'Atuei como aluna monitora voluntária e integrante do comitê do ONE Next Education, programa de formação tecnológica em parceria com a Oracle. Fui referência de apoio para outros alunos, respondendo dúvidas técnicas e mantendo o engajamento da turma. Também contribuí para a organização de eventos e lives. Um dos momentos mais marcantes foi a criação do conceito do Hackathon, idealizado no comitê e adotado pelas turmas seguintes. Participamos da seleção dos novos integrantes, acreditando que a rotatividade entre ex-alunos mantém o programa vivo e diverso. A experiência desenvolveu comunicação clara, liderança colaborativa e visão de comunidade.',
    contactTitle: 'Tem um projeto em mente ou quer trocar uma ideia sobre tecnologia?',
    contactText: 'Estou sempre aberta a novos desafios, freelas e conexões com pessoas e times que valorizam código bem estruturado e boas práticas.',
    location: 'São José dos Campos, SP · remoto',
    metadataTitle: 'Larissa Olimpio | Desenvolvedora Full Stack',
    metadataDescription: 'Portfólio de Larissa Olimpio, desenvolvedora full stack em Java, Spring Boot, React e TypeScript.',
  },
  en: {
    intro: 'Hi, I’m Larissa',
    headlineBefore: 'I turn business rules into software that ',
    headlineWord: 'works',
    description: 'Full stack developer working with Java/Spring Boot and React/TypeScript, from building new features to supporting systems in production.',
    currently: 'Embraer, building charts and analyses with Oracle and .NET',
    aboutSubtitle: 'Full stack development experience across applications, data, and production systems.',
    about: [
      'I’m a full stack developer working with Java/Spring Boot and React/TypeScript. My experience spans new feature development and production support, including billing business rules, legacy code refactoring, unit testing, Datadog monitoring, and CI/CD pipelines.',
      'I enjoy investigating problems in depth, collaborating with a team, and sharing what I learn. I volunteered as a student mentor and served on the ONE Next Education committee, where I helped create a hackathon concept adopted by later cohorts.',
      'Today, I’m at Embraer building charts and analyses for planning data, while continuing to grow through personal projects like Workout Tracker and Events API. Below are the projects I’m working on.',
    ],
    volunteer:
      'I volunteered as a student mentor and served on the committee of ONE Next Education, a technology training program in partnership with Oracle. I supported other students by answering technical questions and helping keep the cohort engaged. I also contributed to organizing events and livestreams. One of the highlights was creating the Hackathon concept with the committee; later cohorts adopted it. We also helped select new members, believing that alumni rotation keeps the program active and diverse. This experience strengthened my clear communication, collaborative leadership, and sense of community.',
    contactTitle: 'Have a project in mind or want to talk tech?',
    contactText: 'I’m always open to new challenges, freelance work, and connecting with people and teams who value well-structured code and good practices.',
    location: 'São José dos Campos, Brazil · remote',
    metadataTitle: 'Larissa Olimpio | Full Stack Developer',
    metadataDescription: 'Portfolio of Larissa Olimpio, a full stack developer working with Java, Spring Boot, React, and TypeScript.',
  },
};

export const education: Record<
  Language,
  { title: string; institution: string; detail: string; status: 'completed' | 'inProgress' }[]
> = {
  pt: [
    { title: 'Segurança da Informação', institution: 'Uninter', detail: 'Tecnólogo', status: 'inProgress' },
    { title: 'Análise e Desenvolvimento de Sistemas', institution: 'Uninter', detail: 'Tecnólogo', status: 'completed' },
    { title: 'Bootcamp de Análise de Dados', institution: 'Soulcode Academy / Accenture', detail: 'SQL, Power BI, Excel e BigQuery', status: 'completed' },
  ],
  en: [
    { title: 'Information Security', institution: 'Uninter', detail: 'Associate degree', status: 'inProgress' },
    { title: 'Systems Analysis and Development', institution: 'Uninter', detail: 'Associate degree', status: 'completed' },
    { title: 'Data Analytics Bootcamp', institution: 'Soulcode Academy / Accenture', detail: 'SQL, Power BI, Excel, and BigQuery', status: 'completed' },
  ],
};

export const principles: Record<Language, { title: string; text: string }[]> = {
  pt: [
    {
      title: 'Engenharia e Boas Práticas',
      text: 'Aplico princípios SOLID, Arquitetura Limpa e boas práticas. Priorizo separação de responsabilidades para que o sistema seja fácil de testar, entender e evoluir.',
    },
    {
      title: 'Inteligência Artificial com Critério',
      text: 'Uso IA no dia a dia para acelerar entregas, mas sou eu quem define a arquitetura, o que pedir e reviso o resultado. A leitura de “Competente o Suficiente” (Fabio Akita) reforça essa visão: sem medo e sem hype, com senso crítico.',
    },
    {
      title: 'Aprendizado e Idioma',
      text: 'Com inglês intermediário em evolução ativa, consumo documentação, artigos e conteúdos diretamente na fonte.',
    },
  ],
  en: [
    {
      title: 'Engineering and Best Practices',
      text: 'I apply SOLID principles, Clean Architecture, and established best practices. I prioritize separation of concerns so systems are easy to test, understand, and evolve.',
    },
    {
      title: 'Thoughtful Use of Artificial Intelligence',
      text: 'I use AI every day to deliver faster, but I make the architecture decisions, shape the prompts, and review the results. Fabio Akita’s book “Competente o Suficiente” reinforces this view: no fear and no hype, just critical thinking.',
    },
    {
      title: 'Learning and Language',
      text: 'As I actively improve my intermediate English, I read documentation, articles, and other content directly from the source.',
    },
  ],
};

export const githubUrl = 'https://github.com/LarissaOlimpio';
export const linkedinUrl = 'https://www.linkedin.com/in/larissaolimpio/';
