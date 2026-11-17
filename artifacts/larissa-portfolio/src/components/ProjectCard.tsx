import { Github } from 'lucide-react';
import type { Language } from '../data/config';
import { copy } from '../data/config';
import type { Project } from '../data/projects';
import { ProjectMedia } from './ProjectMedia';
import { Pill } from './Pill';

export function ProjectCard({ project, index, language }: { project: Project; index: number; language: Language }) {
  const labels = copy[language];
  return (
    <article className={`project-card${index % 2 ? ' reverse' : ''}`} data-testid={`card-project-${project.id}`}>
      <ProjectMedia project={project} language={language} />
      <div className="project-info">
        <div className="project-badge">{project.badge}</div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags" aria-label={labels.projectTags}>
          {project.tags.map((tag) => <Pill key={tag}>{tag}</Pill>)}
        </div>
        <a
          className="btn btn-primary project-link"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          data-testid={`link-repository-${project.id}`}
        >
          <Github size={14} aria-hidden="true" />{labels.viewRepository}
        </a>
      </div>
    </article>
  );
}
