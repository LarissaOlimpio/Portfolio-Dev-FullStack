import { createContext, useContext, useEffect, useState } from 'react';
import { Route, Switch, Link, useLocation, Router } from 'wouter';
import { ArrowDown, Github, Linkedin, Moon, Sun } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Language } from './data/config';
import { copy, education, githubUrl, linkedinUrl, principles, profile } from './data/config';
import { experiences } from './data/experience';
import { projects } from './data/projects';
import { skills } from './data/skills';
import profilePhoto from './assets/imagem_corrigida_1794954638366.jpg';
import { Section } from './components/Section';
import { Pill } from './components/Pill';
import { ExperienceCard } from './components/ExperienceCard';
import { ProjectCard } from './components/ProjectCard';

type Theme = 'dark' | 'light';
type Preferences = {
  language: Language;
  setLanguage: (language: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const PreferencesContext = createContext<Preferences | null>(null);

function usePreferences() {
  const value = useContext(PreferencesContext);
  if (!value) throw new Error('Site preferences are not available.');
  return value;
}

function setPageMetadata(title: string, description: string) {
  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
}

function Navbar() {
  const [active, setActive] = useState('inicio');
  const [location] = useLocation();
  const { language, setLanguage, theme, setTheme } = usePreferences();
  const labels = copy[language];
  const links = [
    { id: 'inicio', label: labels.navigation.home, href: '/' },
    { id: 'sobre', label: labels.navigation.about, href: '/#sobre' },
    { id: 'projetos', label: labels.navigation.projects, href: '/#projetos' },
  ];

  useEffect(() => {
    if (location !== '/') return;
    const observers: IntersectionObserver[] = [];
    links.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: '-28% 0px -62% 0px' },
      );
      observer.observe(element);
      observers.push(observer);
    });
    return () => observers.forEach((observer) => observer.disconnect());
  }, [location, language]);

  return (
    <header className="nav-wrap">
      <nav className="container nav-inner" aria-label={labels.navigationLabel}>
        <Link href="/" className="logo" aria-label={language === 'pt' ? 'Larissa.dev — início' : 'Larissa.dev — home'} data-testid="link-home">
          larissa<span>.dev</span>
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={active === link.id && location === '/' ? 'active' : ''}
              data-testid={`link-nav-${link.id}`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button
            type="button"
            className="nav-toggle language-toggle"
            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
            aria-label={language === 'pt' ? 'Switch language to English' : 'Mudar idioma para português'}
            title={language === 'pt' ? 'English' : 'Português'}
            data-testid="button-language"
          >
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
          <button
            type="button"
            className="nav-toggle theme-toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={theme === 'dark' ? (language === 'pt' ? 'Ativar tema claro' : 'Switch to light theme') : (language === 'pt' ? 'Ativar tema escuro' : 'Switch to dark theme')}
            title={theme === 'dark' ? (language === 'pt' ? 'Tema claro' : 'Light theme') : (language === 'pt' ? 'Tema escuro' : 'Dark theme')}
            data-testid="button-theme"
          >
            {theme === 'dark' ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
          </button>
          <a className="btn btn-yellow nav-cta" href="/#contato" data-testid="link-contact">{labels.navigation.letsTalk}</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const [typed, setTyped] = useState('');
  const reduceMotion = useReducedMotion();
  const { language } = usePreferences();
  const labels = copy[language];
  const content = profile[language];

  useEffect(() => {
    setTyped('');
    if (reduceMotion) {
      setTyped(content.currently);
      return;
    }
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTyped(content.currently.slice(0, index));
      if (index >= content.currently.length) window.clearInterval(timer);
    }, 36);
    return () => window.clearInterval(timer);
  }, [content.currently, reduceMotion]);

  return (
    <section className="container hero" id="inicio">
      <motion.div initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="eyebrow">
          <svg viewBox="0 0 38 27" aria-hidden="true">
            <path d="M35 4C24 2 15 9 10 20M10 20l-1-8m1 8 8-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {content.intro}
        </div>
        <h1>
          {content.headlineBefore}
          <span className="circled-word">
            {content.headlineWord}
            <svg viewBox="0 0 220 80" aria-hidden="true"><ellipse cx="110" cy="40" rx="105" ry="32" transform="rotate(-5 110 40)" /></svg>
          </span>
        </h1>
        <p className="hero-copy">{content.description}</p>
        <p className="typed-line" aria-label={`${labels.currentlyAt} ${content.currently}`}>
          {labels.currentlyAt} <strong>{typed}</strong><span className="cursor" aria-hidden="true" />
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projetos" data-testid="link-hero-projects">
            {labels.navigation.projects} <ArrowDown size={14} aria-hidden="true" />
          </a>
          <a
            className="btn btn-outline"
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-linkedin"
          >
            <Linkedin size={14} aria-hidden="true" />{labels.linkedin}
          </a>
        </div>
      </motion.div>
      <motion.div
        className="portrait-wrap"
        initial={reduceMotion ? false : { opacity: 0, y: 20, rotate: 1 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.7, delay: 0.12 }}
      >
        <div className="portrait-back" />
        <div className="portrait-card has-photo" data-testid="img-profile">
          <img
            className="profile-photo"
            src={profilePhoto}
            alt={language === 'pt' ? 'Imagem de perfil de Larissa' : 'Larissa’s profile image'}
          />
        </div>
      </motion.div>
    </section>
  );
}

function Home() {
  const { language } = usePreferences();
  const labels = copy[language];
  const content = profile[language];

  useEffect(() => {
    setPageMetadata(content.metadataTitle, content.metadataDescription);
  }, [content.metadataDescription, content.metadataTitle]);

  return (
    <div className="portfolio-shell">
      <Navbar />
      <main>
        <Hero />
        <Section id="sobre" title={labels.aboutTitle} subtitle={content.aboutSubtitle}>
          <div className="about-grid">
            <div className="about-copy">
              {content.about.map((paragraph, index) => <p key={index} data-testid={`text-about-${index + 1}`}>{paragraph}</p>)}
            </div>
            <div className="skills-cloud" aria-label={labels.skillsLabel}>
              {skills.map((skill) => <Pill key={skill.name} highlight={skill.highlight}>{skill.name}</Pill>)}
            </div>
          </div>
        </Section>
        <Section id="experiencia" title={labels.experienceTitle} subtitle={labels.experienceSubtitle}>
          <div className="experience-grid">
            {experiences[language].map((item) => <ExperienceCard key={item.company} item={item} language={language} />)}
          </div>
        </Section>
        <Section id="formacao" title={labels.educationTitle}>
          <div className="education-grid">
            {education[language].map((item, index) => (
              <article className="education-card" key={item.title} data-testid={`card-education-${index + 1}`}>
                <div className="education-icon" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
                <div className="education-copy">
                  <span className={`education-status ${item.status}`}>{item.status === 'completed' ? labels.completed : labels.inProgress}</span>
                  <h3>{item.title}</h3>
                  <p className="education-institution">{item.institution}</p>
                  <p className="education-detail">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>
        <Section id="projetos" title={labels.projectsTitle} subtitle={labels.projectsSubtitle}>
          <div className="project-list">
            {projects[language].map((project, index) => <ProjectCard key={project.id} project={project} index={index} language={language} />)}
          </div>
        </Section>
        <Section id="pensamento" title={labels.principlesTitle}>
          <div className="principles-grid">
            {principles[language].map((principle, index) => (
              <article className="principle" key={principle.title} data-testid={`card-principle-${index + 1}`}>
                <h3>{principle.title}</h3><p>{principle.text}</p>
              </article>
            ))}
          </div>
        </Section>
        <Section id="voluntariado" title={labels.volunteerTitle}>
          <article className="volunteer-card" data-testid="text-volunteer">
            <div className="volunteer-mark" aria-hidden="true">ONE</div>
            <p>{content.volunteer}</p>
          </article>
        </Section>
        <section className="container section" id="contato">
          <div className="contact-panel">
            <h2>{content.contactTitle}</h2>
            <p>{content.contactText}</p>
            <div className="contact-actions">
              <a className="btn btn-yellow" href={githubUrl} target="_blank" rel="noopener noreferrer" data-testid="link-contact-github">
                <Github size={14} aria-hidden="true" />{labels.contactGithub}
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <span>© 2026 Larissa Olimpio</span>
        <span>{content.location}</span>
      </footer>
    </div>
  );
}

function NotFound() {
  const { language } = usePreferences();
  const copyText = language === 'pt' ? { title: 'Esta página não está disponível.', back: 'Voltar ao início' } : { title: 'This page is not available.', back: 'Back to home' };
  return (
    <main className="container article">
      <div className="section-kicker">404</div>
      <h1>{copyText.title}</h1>
      <Link className="btn btn-primary" href="/" data-testid="link-back-home">{copyText.back}</Link>
    </main>
  );
}

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem('larissa-portfolio-language');
    return saved === 'en' ? 'en' : 'pt';
  });
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = window.localStorage.getItem('larissa-portfolio-theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    window.localStorage.setItem('larissa-portfolio-language', language);
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', language === 'pt' ? 'pt_BR' : 'en_US');
  }, [language]);

  useEffect(() => {
    window.localStorage.setItem('larissa-portfolio-theme', theme);
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0a0e1a' : '#f4f6fc');
  }, [theme]);

  const preferences = { language, setLanguage, theme, setTheme };
  return (
    <PreferencesContext.Provider value={preferences}>
      <Router base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Switch>
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </PreferencesContext.Provider>
  );
}

export default App;
