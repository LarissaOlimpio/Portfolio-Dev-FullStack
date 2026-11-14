import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { Experience } from '../data/experience';

export function ExperienceCard({ item }: { item: Experience }) {
  const [expanded, setExpanded] = useState(false);
  const reduceMotion = useReducedMotion();
  return (
    <motion.article
      className="experience-card"
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
      aria-label={`${expanded ? 'Recolher' : 'Expandir'} experiência em ${item.company}`}
    >
      <span className="date-pill">{item.date}</span>
      <h3>{item.company}</h3>
      <h4>{item.role}</h4>
      <p>{item.summary}</p>
      <div className="expand-hint">{expanded ? '− Fechar detalhes' : '+ Ler detalhes'}</div>
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
