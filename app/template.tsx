// Re-mounted on every navigation: a signal-yellow shutter sweeps off the new page.
// Pure CSS, so the page is never left hidden if JavaScript is slow or disabled.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div aria-hidden className="page-shutter bg-signal pointer-events-none fixed inset-0 z-[70] origin-top" />
      <div className="page-enter">{children}</div>
    </>
  );
}
