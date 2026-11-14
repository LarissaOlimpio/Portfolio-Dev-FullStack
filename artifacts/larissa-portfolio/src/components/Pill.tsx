type PillProps = { children: string; highlight?: boolean };

export function Pill({ children, highlight = false }: PillProps) {
  return <span className={`pill${highlight ? ' pill-highlight' : ''}`}>{children}</span>;
}
