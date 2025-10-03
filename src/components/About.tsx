'use client'

export default function About() {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary font-poppins mb-6">
            Our Philosophy and Process
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        {/* Main Content Card */}
        <div className="max-w-4xl mx-auto">
          <div className="card relative overflow-hidden">
            {/* Accent divider */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/50 via-accent to-accent/50"></div>
            
            <div className="pt-8">
              {/* Main content */}
              <div className="space-y-6 text-center">
                <p className="text-xl text-text-secondary font-inter leading-relaxed">
                  At LaunchLocal, we believe every small business deserves a professional online presence without the big agency price tag. We keep things simple: affordable websites, local SEO, and automation tools that help you get found and save time, <strong>without changing your process</strong>. No jargon, no hassle — just results that grow with your business.
                </p>
                
                <p className="text-lg text-text-muted font-inter leading-relaxed">
                  To keep things clear and effective, we follow six key principles:
                </p>
              </div>

              {/* Six Key Principles */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-background/50 rounded-xl border border-accent/20">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-text-primary font-poppins mb-2">Source</h4>
                  <p className="text-text-muted font-inter text-sm">Identify where your customers are searching and make sure your business shows up.</p>
                </div>
                
                <div className="text-center p-6 bg-background/50 rounded-xl border border-accent/20">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-text-primary font-poppins mb-2">Convert</h4>
                  <p className="text-text-muted font-inter text-sm">Turn visitors into leads with websites and funnels designed to drive action.</p>
                </div>
                
                <div className="text-center p-6 bg-background/50 rounded-xl border border-accent/20">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-text-primary font-poppins mb-2">Analyze</h4>
                  <p className="text-text-muted font-inter text-sm">Track what's working (and what's not) with clear data you can actually understand.</p>
                </div>
                
                <div className="text-center p-6 bg-background/50 rounded-xl border border-accent/20">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-text-primary font-poppins mb-2">Automate</h4>
                  <p className="text-text-muted font-inter text-sm">Save time with smart tools that handle follow-ups, missed calls, and scheduling.</p>
                </div>
                
                <div className="text-center p-6 bg-background/50 rounded-xl border border-accent/20">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-text-primary font-poppins mb-2">Report</h4>
                  <p className="text-text-muted font-inter text-sm">Get simple, transparent updates that show your progress without the fluff.</p>
                </div>
                
                <div className="text-center p-6 bg-background/50 rounded-xl border border-accent/20">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-text-primary font-poppins mb-2">Optimize</h4>
                  <p className="text-text-muted font-inter text-sm">Continuously improve your online presence so your growth doesn't stall.</p>
                </div>
              </div>

              {/* Closing Statement */}
              <div className="mt-12 p-6 bg-background/50 rounded-xl border border-accent/20">
                <p className="text-text-secondary font-inter text-center leading-relaxed">
                  With this framework, LaunchLocal takes the guesswork out of your digital presence, so you can focus on running your business while we handle the tech.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <p className="text-text-secondary font-inter mb-6">
                  Ready to work with a team that cares about your success?
                </p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="btn-primary text-lg px-8 py-4"
                >
                  Let&apos;s Talk About Your Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
