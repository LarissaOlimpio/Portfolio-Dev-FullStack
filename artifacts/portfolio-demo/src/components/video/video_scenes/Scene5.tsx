import { motion } from 'framer-motion';

const portrait = `${import.meta.env.BASE_URL}images/larissa-portrait.jpg`;
const ease = [0.22, 1, 0.36, 1] as const;

export function Scene5() {
  const values = ['Clean architecture.', 'Critical use of AI.', 'Always learning.'];
  return (
    <motion.section className="scene" style={{ background: '#e8ebf5', color: '#11182a' }} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .92, filter: 'blur(6px)' }} transition={{ duration: .45 }}>
      <motion.div className="absolute" style={{ left: '9%', top: '16%', width: '31%', height: '68%', borderRadius: '50%', overflow: 'hidden', background: '#2447e8', border: '.6vmin solid #ffd43b' }} initial={{ scale: .65, rotate: -14, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} transition={{ delay: .15, duration: .9, ease }}>
        <img className="portrait" src={portrait} alt="" style={{ width: '100%', height: '100%' }} />
      </motion.div>
      <motion.div className="ring" style={{ left: '7%', top: '13%', width: '35%', height: '74%', borderRadius: '50%', borderColor: '#2447e8', borderWidth: '.25vmin' }} initial={{ scale: .7, rotate: 35, opacity: 0 }} animate={{ scale: 1.04, rotate: -8, opacity: .48 }} transition={{ duration: 4.8, ease: 'easeInOut' }} />
      <motion.div className="absolute" style={{ left: '49%', top: '13%', width: '42%' }} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .24, duration: .6, ease }}>
        <div className="eyebrow">ENGINEERING WITH CARE</div>
        <h2 className="scene5-title" style={{ margin: '2vmin 0 2.4vmin' }}>Good software<br />starts with <span style={{ color: '#2447e8' }}>good thinking.</span></h2>
        <div style={{ display: 'grid', gap: '1.25vmin' }}>
          {values.map((value, i) => <motion.div key={value} style={{ fontSize: '2.3vmin', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '1.5vmin' }} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .65 + i * .42, duration: .4, ease }}><span style={{ display: 'inline-block', width: '1.3vmin', height: '1.3vmin', borderRadius: '50%', background: '#2447e8' }} />{value}</motion.div>)}
        </div>
        <motion.div className="mono" style={{ marginTop: '2.2vmin', fontSize: '1.45vmin', color: '#53607a' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>PORTUGUÊS <span style={{ color: '#2447e8' }}> / </span> ENGLISH</motion.div>
        <motion.div style={{ marginTop: '2.2vmin', fontSize: '2.25vmin', color: '#4b5670' }} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.7, duration: .4 }}>Have a project in mind?</motion.div>
        <motion.div className="mono" style={{ marginTop: '1.2vmin', fontSize: '1.45vmin', color: '#68738b' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.05 }}>SÃO JOSÉ DOS CAMPOS · BRAZIL</motion.div>
      </motion.div>
      <motion.div className="absolute" style={{ left: '49%', bottom: '10%', color: '#11182a', fontSize: '4.2vmin', fontWeight: 800, letterSpacing: '-.08em' }} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.3, duration: .55, ease }}>larissa<span style={{ color: '#2447e8' }}>.dev</span></motion.div>
      <motion.div className="absolute" style={{ left: '47%', bottom: '7%', width: '46%', height: '.28vmin', background: '#2447e8', transformOrigin: 'left' }} initial={{ scaleX: 0 }} animate={{ scaleX: [0, 1, .08] }} transition={{ delay: 3.5, duration: 2.15, times: [0, .75, 1], ease: 'easeInOut' }} />
      <div className="absolute mono" style={{ right: '7%', top: '8%', color: '#77829a', fontSize: '1.5vmin' }}>05 / THANK YOU</div>
    </motion.section>
  );
}
