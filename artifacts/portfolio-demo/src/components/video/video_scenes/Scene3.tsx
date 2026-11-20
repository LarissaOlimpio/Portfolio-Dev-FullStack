import { motion } from 'framer-motion';

const roles = [
  { company: 'Embraer', detail: 'Planning data · Oracle · Highcharts', year: '2026 — NOW', x: '13%', y: '30%' },
  { company: 'Alura', detail: 'Java · Spring Boot · production systems', year: '2024 — 2025', x: '40%', y: '52%' },
  { company: 'Supliu', detail: 'React · TypeScript · data interfaces', year: '2023 — 2024', x: '66%', y: '25%' },
];
const ease = [0.22, 1, 0.36, 1] as const;

export function Scene3() {
  return (
    <motion.section className="scene" style={{ background: '#2447e8' }} initial={{ opacity: 0, rotateY: 9 }} animate={{ opacity: 1, rotateY: 0 }} exit={{ opacity: 0, scale: 1.08, filter: 'blur(6px)' }} transition={{ duration: .4 }}>
      <motion.div className="absolute eyebrow" style={{ left: '8%', top: '10%' }} initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12 }}>EXPERIENCE / EXPERIÊNCIA</motion.div>
      <motion.div className="absolute" style={{ left: '8%', top: '17%', fontSize: '7.5vmin', letterSpacing: '-.08em', fontWeight: 800 }} initial={{ x: -25, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: .2, duration: .55, ease }}>Real work. <span style={{ color: '#ffd43b' }}>Real impact.</span></motion.div>
      <svg className="absolute" viewBox="0 0 1200 700" preserveAspectRatio="none" style={{ inset: 0, width: '100%', height: '100%' }} aria-hidden="true">
        <motion.path d="M180 400 C 380 270, 470 510, 630 360 S 850 250, 1050 320" fill="none" stroke="#ffd43b" strokeWidth="4" strokeDasharray="1200" initial={{ strokeDashoffset: 1200 }} animate={{ strokeDashoffset: 0 }} transition={{ delay: .45, duration: 3.3, ease: 'easeInOut' }} />
        {[180, 630, 1050].map((x, i) => <motion.circle key={x} cx={x} cy={[400, 360, 320][i]} r="10" fill="#ffd43b" initial={{ scale: 0 }} animate={{ scale: [0, 1.4, 1] }} transition={{ delay: .8 + i * 1.15, duration: .4, ease }} />)}
      </svg>
      {roles.map((role, i) => <motion.article key={role.company} className="absolute" style={{ left: role.x, top: role.y, width: '24%', padding: '2.1vmin 2.3vmin', minHeight: '21vmin', background: '#101a37', border: '1px solid rgba(255,255,255,.26)', borderRadius: '2vmin', boxShadow: '0 2vmin 5vmin rgba(6,14,46,.24)' }} initial={{ opacity: 0, y: 45, rotate: i === 1 ? 2 : -2 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ delay: .28 + i * .34, duration: .62, ease }}>
        <div className="mono yellow" style={{ fontSize: '1.35vmin' }}>{role.year}</div>
        <h3 style={{ fontSize: '4vmin', margin: '1.4vmin 0 .6vmin', letterSpacing: '-.06em' }}>{role.company}</h3>
        <p style={{ color: '#bac6e5', fontSize: '1.75vmin', lineHeight: 1.45, margin: 0 }}>{role.detail}</p>
      </motion.article>)}
      <motion.div className="absolute" style={{ left: '29%', bottom: '9%', fontSize: '2.5vmin', fontWeight: 600 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2 }}>From requirements to release.</motion.div>
      <div className="absolute mono" style={{ right: '8%', bottom: '7%', color: '#c4d0ff', fontSize: '1.5vmin' }}>03 / EXPERIENCE</div>
    </motion.section>
  );
}
