import { motion } from 'framer-motion';

const skills = ['Java', 'Spring Boot', 'React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Oracle', 'Datadog', 'Docker', 'SQL', 'Power BI', 'GitHub Actions'];
const ease = [0.22, 1, 0.36, 1] as const;

export function Scene2() {
  return (
    <motion.section className="scene" style={{ background: '#101831' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, rotateY: -12, scale: .92 }} transition={{ duration: .38 }}>
      <motion.div className="absolute outline" style={{ left: '4%', top: '10%', fontSize: '25vmin', fontWeight: 800, letterSpacing: '-.1em', lineHeight: .85 }} initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .7, ease }}>BUILD</motion.div>
      <motion.div className="absolute eyebrow" style={{ left: '8%', top: '15%' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .15 }}>ABOUT / SOBRE</motion.div>
      <motion.h2 className="absolute" style={{ left: '8%', top: '28%', fontSize: '6.2vmin', letterSpacing: '-.07em', margin: 0 }} initial={{ y: 22, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .3, duration: .6, ease }}>Build. Learn. <span className="yellow">Share.</span></motion.h2>
      <div className="absolute" style={{ left: '11%', top: '47%', width: '77%', display: 'grid', gridTemplateColumns: 'repeat(4, max-content)', gap: '1.4vmin', perspective: '800px', transform: 'rotate(-4deg)' }}>
        {skills.map((skill, index) => <motion.div key={skill} className="pill-chip" style={{ background: index === 0 || index === 1 || index === 2 ? '#ffd43b' : 'rgba(18,26,49,.82)', color: index < 3 ? '#111729' : '#e3e9ff' }} initial={{ opacity: 0, scale: .45, y: 35, rotate: -6 }} animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }} transition={{ delay: .52 + index * .12, duration: .45, ease }}>{skill}</motion.div>)}
      </div>
      <motion.div className="absolute" style={{ left: '13%', top: '80%', color: '#c6cee3', fontSize: '2.5vmin', letterSpacing: '-.03em' }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.7, duration: .6, ease }}>Engineering, with curiosity.</motion.div>
      <motion.div className="absolute" style={{ left: '7%', top: '43%', width: '86%', height: '38%', border: '1px solid rgba(255,212,59,.62)', borderRadius: '50%', rotate: -5 }} initial={{ scale: .55, opacity: 0 }} animate={{ scale: 1, opacity: [.1, .65, .45] }} transition={{ delay: .45, duration: 3.5, ease: 'easeInOut' }} />
      <motion.div className="absolute" style={{ right: '-8%', top: '-25%', width: '38vmin', height: '38vmin', borderRadius: '50%', background: '#2447e8', opacity: .7 }} animate={{ scale: [1, 1.14, 1], x: [0, -12, 0] }} transition={{ duration: 5.5, ease: 'easeInOut' }} />
      <div className="absolute mono" style={{ right: '8%', bottom: '7%', color: '#8491ad', fontSize: '1.5vmin' }}>02 / TOOLKIT</div>
    </motion.section>
  );
}
