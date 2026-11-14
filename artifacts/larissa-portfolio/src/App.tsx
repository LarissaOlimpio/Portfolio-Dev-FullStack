import { useEffect, useState } from 'react';
import { Route, Switch, Link, useLocation, useParams, Router } from 'wouter';
import { ArrowDown, ArrowLeft, Github, Linkedin, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Section } from './components/Section';
import { Pill } from './components/Pill';
import { ExperienceCard } from './components/ExperienceCard';
import { ProjectCard } from './components/ProjectCard';
import { PostCard } from './components/PostCard';
import { experiences } from './data/experience';
import { projects } from './data/projects';
import { skills } from './data/skills';
import { posts } from './data/posts';
import { copy, principles, profile, showBlog } from './data/config';

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
  const sections = ['inicio', 'sobre', 'projetos', ...(showBlog ? ['blog'] : [])];

  useEffect(() => {
    if (location !== '/') return;
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
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
  }, [location]);

  const links = [
    { id: 'inicio', label: copy.navigation.home, href: '/' },
    { id: 'sobre', label: copy.navigation.about, href: '/#sobre' },
    { id: 'projetos', label: copy.navigation.projects, href: '/#projetos' },
    ...(showBlog ? [{ id: 'blog', label: copy.navigation.blog, href: '/#blog' }] : []),
  ];
  return (
    <header className="nav-wrap">
      <nav className="container nav-inner" aria-label="Navegação principal">
        <Link href="/" className="logo" aria-label="Larissa.dev — início">larissa<span>.dev</span></Link>
        <div className="nav-links">
          {links.map((link) => (
            <a key={link.id} href={link.href} className={active === link.id && location === '/' ? 'active' : ''}>
              {link.label}
            </a>
          ))}
        </div>
        <a className="btn btn-yellow nav-cta" href="/#contato">{copy.navigation.contact}</a>
      </nav>
    </header>
  );
}

function Hero() {
  const [typed, setTyped] = useState('');
  const reduceMotion = useReducedMotion();
  const ending = 'Embraer, desenvolvendo em Oracle e .NET';
  useEffect(() => {
    if (reduceMotion) {
      setTyped(ending);
      return;
    }
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTyped(ending.slice(0, index));
      if (index >= ending.length) window.clearInterval(timer);
    }, 48);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section className="container hero" id="inicio">
      <motion.div initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="eyebrow">
          <svg viewBox="0 0 38 27" aria-hidden="true">
            <path d="M35 4C24 2 15 9 10 20M10 20l-1-8m1 8 8-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {profile.intro}
        </div>
        <h1>
          {profile.headlineBefore}
          <span className="circled-word">
            {profile.headlineWord}
            <svg viewBox="0 0 220 80" aria-hidden="true"><ellipse cx="110" cy="40" rx="105" ry="32" transform="rotate(-5 110 40)" /></svg>
          </span>
        </h1>
        <p className="hero-copy">{profile.description}</p>
        <p className="typed-line" aria-label={profile.currently}>
          Atualmente na <strong>{typed}</strong><span className="cursor" aria-hidden="true" />
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projetos">{copy.navigation.projects} <ArrowDown size={14} /></a>
          <a className="btn btn-outline" href="/curriculo.pdf" download>
            Baixar currículo
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
        <div className="portrait-card" role="img" aria-label="Espaço reservado para retrato de Larissa, proporção 4 por 5">
          <span className="placeholder-label">[SUA FOTO AQUI]<br />RETRATO 4:5</span>
        </div>
      </motion.div>
    </section>
  );
}

function Home() {
  useEffect(() => {
    setPageMetadata(
      'Larissa Olimpio | Desenvolvedora Full Stack',
      'Portfólio de Larissa Olimpio, desenvolvedora full stack em Java, Spring Boot e React.',
    );
  }, []);

  const visiblePosts = posts.filter((post) => !post.draft).slice(0, 3);
  return (
    <div className="portfolio-shell">
      <Navbar />
      <main>
        <Hero />
        <Section id="sobre" title={copy.aboutTitle} subtitle={profile.aboutSubtitle}>
          <div className="about-grid">
            <div className="about-copy">{profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <div className="skills-cloud" aria-label="Tecnologias e ferramentas">
              {skills.map((skill) => <Pill key={skill.name} highlight={skill.highlight}>{skill.name}</Pill>)}
            </div>
          </div>
        </Section>
        <Section id="experiencia" title={copy.experienceTitle} subtitle={copy.experienceSubtitle}>
          <div className="experience-grid">
            {experiences.map((item) => <ExperienceCard key={item.company} item={item} />)}
          </div>
          <p className="education"><strong>Formação:</strong> {profile.education.replace('Formação: ', '')}</p>
        </Section>
        <Section id="projetos" title={copy.projectsTitle} subtitle={copy.projectsSubtitle}>
          <div className="project-list">
            {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
          </div>
        </Section>
        <Section id="pensamento" title={copy.principlesTitle}>
          <div className="principles-grid">
            {principles.map((principle) => (
              <article className="principle" key={principle.title}>
                <h3>{principle.title}</h3><p>{principle.text}</p>
              </article>
            ))}
          </div>
        </Section>
        {showBlog && (
          <Section id="blog" title={copy.blogTitle} subtitle={copy.blogSubtitle}>
            <div className="blog-grid">{visiblePosts.map((post) => <PostCard key={post.slug} post={post} />)}</div>
            <div className="blog-actions"><Link className="btn btn-outline" href="/blog">{copy.allPosts}</Link></div>
          </Section>
        )}
        <section className="container section" id="contato">
          <div className="contact-panel">
            <h2>{profile.contactTitle}</h2>
            <p>{profile.contactText}</p>
            <div className="contact-actions">
              <a className="btn btn-yellow" href={`mailto:${profile.email}`}><Mail size={14} />{profile.email}</a>
              <a className="btn btn-outline" href={profile.github} target="_blank" rel="noreferrer"><Github size={14} />{copy.github}</a>
              {profile.linkedin.startsWith('http') ? (
                <a className="btn btn-outline" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={14} />{copy.linkedin}</a>
              ) : (
                <span className="btn btn-outline is-placeholder" aria-disabled="true" title="Link do LinkedIn ainda não fornecido">
                  <Linkedin size={14} />{copy.linkedin}
                </span>
              )}
            </div>
          </div>
        </section>
      </main>
      <footer className="container footer"><span>© 2026 Larissa</span><span>{profile.location}</span></footer>
    </div>
  );
}

function BlogIndex() {
  useEffect(() => {
    setPageMetadata(
      'Blog | Larissa Olimpio',
      'Anotações de Larissa Olimpio sobre desenvolvimento de software, projetos e aprendizados.',
    );
  }, []);

  const publishedPosts = posts.filter((post) => !post.draft);
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="page-top">
          <h1 className="section-title">{copy.blogTitle}</h1>
          <p className="section-subtitle">{copy.blogSubtitle}</p>
        </div>
        <div className="blog-list">{publishedPosts.map((post) => <PostCard key={post.slug} post={post} />)}</div>
      </main>
      <footer className="container footer"><Link href="/" className="back-link">← Voltar ao portfólio</Link><span>{profile.location}</span></footer>
    </>
  );
}

function BlogArticle() {
  const params = useParams<{ slug: string }>();
  const post = posts.find((item) => item.slug === params.slug && !item.draft);

  useEffect(() => {
    if (post) setPageMetadata(`${post.title} | Larissa Olimpio`, post.excerpt);
  }, [post]);

  if (!post) return <NotFound />;
  return (
    <>
      <Navbar />
      <main className="container">
        <article className="article">
          <Link className="back-link" href="/blog"><ArrowLeft size={13} style={{ verticalAlign: 'middle', marginRight: 6 }} />{copy.backToPosts}</Link>
          <div className="section-kicker" style={{ marginTop: 38 }}>{post.date}</div>
          <h1>{post.title}</h1>
          <p className="section-subtitle">{post.excerpt}</p>
          <div className="article-content">{post.body}</div>
        </article>
      </main>
      <footer className="container footer"><span>© 2026 Larissa</span><span>{profile.location}</span></footer>
    </>
  );
}

function NotFound() {
  return (
    <main className="container article">
      <div className="section-kicker">{copy.notFoundKicker}</div>
      <h1>{copy.notFoundTitle}</h1>
      <Link className="btn btn-primary" href="/">{copy.backHome}</Link>
    </main>
  );
}

function App() {
  return (
    <Router base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/blog" component={BlogIndex} />
        <Route path="/blog/:slug" component={BlogArticle} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
