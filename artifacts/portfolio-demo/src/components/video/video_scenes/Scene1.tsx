import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;
const portrait = `${import.meta.env.BASE_URL}images/larissa-portrait.jpg`;

export function Scene1() {
  return (
    <motion.section className="scene" style={{ background: '#0a0e1a' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.12, filter: 'blur(8px)' }} transition={{ duration: .36 }}>
      <motion.div className="absolute" style={{ left: '57%', top: '11%', width: '34%', height: '82%', borderRadius: '4vmin', background: '#ffd43b', rotate: 5 }} initial={{ scale: .7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: .7, ease, delay: .08 }} />
      <motion.div className="absolute overflow-hidden" style={{ left: '55%', top: '8%', width: '34%', height: '82%', borderRadius: '4vmin', background: '#2447e8', border: '1px solid rgba(255,255,255,.2)' }} initial={{ scale: .76, y: 40, rotate: -2, opacity: 0 }} animate={{ scale: 1, y: 0, rotate: 0, opacity: 1 }} transition={{ duration: .85, ease, delay: .12 }} exit={{ scale: 3.2, opacity: 0, x: '-20%' }}>
        <motion.img className="portrait" src={portrait} alt="" style={{ width: '100%', height: '100%' }} animate={{ scale: [1.04, 1.08, 1.02] }} transition={{ duration: 4.7, ease: 'easeInOut' }} />
      </motion.div>
      <motion.div className="absolute" style={{ left: '10%', top: '21%', width: '38%', zIndex: 2 }} initial={{ x: -35, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .55, ease, delay: .18 }}>
        <div className="eyebrow">Hi, I’m Larissa</div>
        <h1 className="headline" style={{ fontSize: '8.6vmin', marginTop: '2.4vmin' }}>I turn business<br />rules into software<br />that <span className="yellow">works.</span></h1>
        <motion.div className="rule" style={{ width: '30%', marginTop: '3vmin' }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: .75, delay: .75, ease }} />
        <p className="brand-tag" style={{ marginTop: '2.8vmin' }}>FULL STACK · JAVA · REACT</p>
      </motion.div>
      <motion.div className="absolute mono" style={{ right: '8%', bottom: '7%', fontSize: '2.5vmin', color: '#f2f5ff', zIndex: 3 }} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .75, duration: .45 }}>larissa<span className="yellow">.dev</span></motion.div>
      <motion.div className="ring" style={{ left: '59%', top: '17%', width: '28vmin', height: '28vmin' }} initial={{ scale: .3, opacity: 0, rotate: -70 }} animate={{ scale: [1, 1.09, 1], opacity: 1, rotate: 8 }} transition={{ duration: 3.2, delay: .5, ease: 'easeInOut' }} />
      <div className="absolute mono" style={{ right: '8%', top: '9%', color: '#8d9bb9', fontSize: '1.5vmin' }}>01 / INTRO</div>
    </motion.section>
  );
}
