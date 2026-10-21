import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-35" />
      <div className="page-shell relative grid min-h-[720px] min-w-0 items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="relative z-10 min-w-0 max-w-2xl">
          <div className="eyebrow">Business systems &amp; automation</div>
          <h1 className="font-display text-[clamp(2.65rem,6vw,5.6rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-text-primary">
            Connect your systems.
            <span className="mt-1 block text-accent">Automate the busywork.</span>
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-8 text-text-secondary sm:text-2xl sm:leading-9">
            We help service businesses connect the tools they already use, remove repetitive handoffs, and build reliable workflows from lead to follow-up.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/?plan=Automation#contact" className="btn-primary w-full sm:w-auto">
              Talk about your systems
              <span aria-hidden="true" className="ml-2">↗</span>
            </Link>
            <Link href="/business-audit" className="btn-secondary w-full sm:w-auto">Get your free Systems Snapshot →</Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-3 border-t border-line pt-6 text-sm font-semibold text-text-secondary sm:flex sm:flex-wrap sm:gap-x-8">
            <span>Lead routing</span>
            <span>CRM workflows</span>
            <span>Follow-up</span>
            <span>Reporting</span>
          </div>
        </div>

        <div className="relative min-w-0 lg:pl-8" aria-label="Example connected business workflow">
          <div className="absolute -inset-8 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative rounded-xl border border-line bg-white p-5 shadow-xl sm:p-7">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div>
                <p className="font-display text-sm font-bold text-text-primary">Lead workflow</p>
                <p className="mt-1 text-xs text-text-muted">Connected and monitored</p>
              </div>
              <span className="flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-accent">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Active
              </span>
            </div>
            <ol className="mt-5 space-y-3">
              {[
                ['01', 'New inquiry received', 'Website or lead source'],
                ['02', 'Contact created', 'CRM'],
                ['03', 'Follow-up triggered', 'Email or text'],
                ['04', 'Team notified', 'Ready for action'],
              ].map(([number, title, detail], index) => (
                <li key={number} className="relative flex items-center gap-4 rounded-lg border border-line bg-section-bg p-4">
                  {index < 3 && <span className="absolute left-[1.85rem] top-full h-3 w-px bg-accent/40" />}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-accent text-xs font-bold text-white">{number}</span>
                  <span className="min-w-0">
                    <span className="block font-display text-sm font-bold text-text-primary">{title}</span>
                    <span className="mt-0.5 block text-xs text-text-muted">{detail}</span>
                  </span>
                  <span className="ml-auto text-accent" aria-hidden="true">✓</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="relative -mt-4 ml-5 max-w-sm rounded-lg border border-blue-200 bg-blue-50 px-5 py-4 shadow-md sm:ml-10">
            <p className="font-display text-sm font-bold text-text-primary">Less copying. Fewer missed steps.</p>
            <p className="mt-1 text-sm text-text-secondary">A workflow built around how your business actually operates.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
