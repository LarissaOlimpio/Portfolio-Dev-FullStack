export function BrowserMockup({ label, projectId }: { label: string; projectId: string }) {
  return (
    <div className="browser-mockup" role="img" aria-label={label} data-testid={`project-preview-${projectId}`}>
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
