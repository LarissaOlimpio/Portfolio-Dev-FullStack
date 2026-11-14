import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/projects';
import { BrowserMockup } from './BrowserMockup';
import { Pill } from './Pill';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-card${index % 2 ? ' reverse' : ''}`}>
      <BrowserMockup label={project.preview} />
      <div className="project-info">
        <div className="project-badge">{project.badge}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags" aria-label="Tecnologias">
          {project.tags.map((tag) => <Pill key={tag}>{tag}</Pill>)}
        </div>
        <a className="btn btn-primary project-link" href={project.link} target="_blank" rel="noreferrer">
          Ver no GitHub <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
