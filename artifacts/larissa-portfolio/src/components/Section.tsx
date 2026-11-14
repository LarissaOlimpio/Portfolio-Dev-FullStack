import { type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, subtitle, children, className = '' }: SectionProps) {
  const reduceMotion = useReducedMotion();
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        <motion.div
          className="section-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
        >
          {eyebrow && <div className="section-kicker">{eyebrow}</div>}
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
