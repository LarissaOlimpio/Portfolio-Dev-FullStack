import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { Experience } from '../data/experience';
import type { Language } from '../data/config';
import { copy } from '../data/config';

export function ExperienceCard({ item, language }: { item: Experience; language: Language }) {
  const [expanded, setExpanded] = useState(false);
  const reduceMotion = useReducedMotion();
  const labels = copy[language];
  return (
    <motion.article
      className="experience-card"
      data-testid={`card-experience-${item.company.toLowerCase()}`}
      layout={!reduceMotion}
      onClick={() => setExpanded((value) => !value)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          setExpanded((value) => !value);
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      aria-label={`${expanded ? labels.collapseExperience : labels.expandExperience}: ${item.company}`}
    >
      <span className="date-pill">{item.date}</span>
      <h3>{item.company}</h3>
      <h4>{item.role}</h4>
      <p>{item.summary}</p>
      <div className="expand-hint">{expanded ? `− ${labels.collapseExperience}` : `+ ${labels.expandExperience}`}</div>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            className="experience-detail"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.25 }}
          >
            {item.detail}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
