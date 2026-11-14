export function BrowserMockup({ label }: { label: string }) {
  return (
    <div className="browser-mockup" role="img" aria-label={`Prévia do projeto: ${label}`}>
      <div className="browser-top" aria-hidden="true">
        <i className="browser-dot" />
        <i className="browser-dot" />
        <i className="browser-dot" />
        <i className="browser-address" />
      </div>
      <div className="browser-screen">
        <span>{label}</span>
      </div>
    </div>
  );
}
