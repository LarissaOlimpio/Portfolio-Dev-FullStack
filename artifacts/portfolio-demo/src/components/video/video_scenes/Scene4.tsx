import { motion } from 'framer-motion';

const workout = `${import.meta.env.BASE_URL}images/workout-poster.jpg`;
const analytics = `${import.meta.env.BASE_URL}images/data-poster.jpg`;
const ease = [0.22, 1, 0.36, 1] as const;

export function Scene4() {
  return (
    <motion.section className="scene" style={{ background: '#090e1b' }} initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1, filter: 'blur(7px)' }} transition={{ duration: .4 }}>
      <motion.div className="absolute eyebrow" style={{ left: '7%', top: '9%' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .08 }}>SELECTED WORK / PROJETOS</motion.div>
      <motion.div className="browser absolute" style={{ left: '7%', top: '18%', width: '54%', height: '69%' }} initial={{ opacity: 0, x: -35, rotateY: -12, scale: .88 }} animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }} transition={{ delay: .15, duration: .72, ease }} exit={{ scale: 2.9, x: '35%', opacity: 0 }}>
        <div className="browser-bar"><i className="browser-dot" /><i className="browser-dot" /><i className="browser-dot" /><div className="browser-address" /></div>
        <div style={{ height: 'calc(100% - 5.5vmin)', overflow: 'hidden' }}><motion.img className="project-image" src={workout} alt="" initial={{ scale: 1.2 }} animate={{ scale: [1.2, 1.08, 1.12] }} transition={{ duration: 6.4, ease: 'easeInOut' }} /></div>
      </motion.div>
      <motion.div className="absolute" style={{ left: '67%', top: '23%', width: '26%' }} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .48, duration: .5, ease }}>
        <div className="mono yellow" style={{ fontSize: '1.55vmin' }}>01 — FULL STACK</div>
        <h2 style={{ fontSize: '5vmin', lineHeight: .96, letterSpacing: '-.07em', margin: '1.6vmin 0' }}>Workout<br />Tracker</h2>
        <div className="frame-caption">TRAIN UP · IN DEVELOPMENT</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.8vmin', marginTop: '2.6vmin' }}>{['React', 'NestJS', 'PostgreSQL', 'Docker'].map(tag => <span className="pill-chip" key={tag} style={{ fontSize: '1.35vmin', padding: '.75vmin 1.15vmin' }}>{tag}</span>)}</div>
      </motion.div>
      <motion.div className="absolute" style={{ left: '0%', top: '18%', width: '100%', height: '69%', background: '#0a0e1a', zIndex: 4, padding: '7vmin 8vmin' }} initial={{ x: '110%' }} animate={{ x: ['110%', '110%', '0%', '0%', '110%'] }} transition={{ times: [0, .42, .48, .86, 1], duration: 6.8, ease: 'easeInOut' }}>
        <motion.div className="browser" style={{ width: '100%', height: '100%', display: 'flex', background: '#f5f2fc' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.9 }}>
          <img src={analytics} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          <motion.div className="absolute mono" style={{ right: '8%', bottom: '13%', background: '#4c2478', color: '#fff', padding: '1.6vmin 2vmin', fontSize: '1.65vmin', zIndex: 1 }} initial={{ opacity: 0, scale: .7 }} animate={{ opacity: [0, 1, 1, 0], scale: [ .7, 1, 1, .8] }} transition={{ delay: 3.6, duration: 2.8, times: [0, .2, .8, 1] }}>SQL → POWER BI</motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="absolute" style={{ right: '7%', bottom: '8%', fontSize: '2vmin', color: '#cbd3e8' }} initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 1, 0] }} transition={{ delay: 5, duration: 1.5, times: [0, .2, .72, 1] }}>Events API · Java / Spring Boot</motion.div>
      <div className="absolute mono" style={{ right: '8%', top: '9%', color: '#8794b0', fontSize: '1.5vmin' }}>04 / PROJECTS</div>
    </motion.section>
  );
}
