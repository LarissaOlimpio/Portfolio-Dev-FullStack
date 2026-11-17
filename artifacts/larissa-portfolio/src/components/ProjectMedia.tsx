import { Play } from 'lucide-react';
import type { Language } from '../data/config';
import { copy } from '../data/config';
import type { Project } from '../data/projects';
import { BrowserMockup } from './BrowserMockup';

export function ProjectMedia({ project, language }: { project: Project; language: Language }) {
  const labels = copy[language];

  if (project.mediaKind === 'browser') {
    return <BrowserMockup label={project.preview} projectId={project.id} />;
  }

  if (project.videoSrc) {
    return (
      <div className="video-frame">
        <video
          className="project-video"
          controls
          preload="none"
          src={project.videoSrc}
          poster={project.posterSrc}
          aria-label={`${project.title} video`}
          data-testid={`video-${project.id}`}
        />
      </div>
    );
  }

  return (
    <div
      className="video-frame video-placeholder"
      role="img"
      aria-label={`${labels.videoDescription} ${project.title}`}
      data-testid={`video-placeholder-${project.id}`}
    >
      <div className="video-placeholder-content">
        <span className="video-play" aria-hidden="true"><Play size={18} fill="currentColor" /></span>
        <span className="video-title">{labels.videoPlaceholder}</span>
        <span className="video-description">{labels.videoDescription}</span>
      </div>
      <div className="video-controls" aria-hidden="true">
        <Play size={12} fill="currentColor" />
        <span className="video-progress"><i /></span>
        <span className="video-time">0:00</span>
      </div>
    </div>
  );
}
