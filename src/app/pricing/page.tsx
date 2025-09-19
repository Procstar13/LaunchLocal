import Pricing from '@/components/Pricing'

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Pricing Cards Component */}
      <Pricing />

      {/* Feature Comparison Table */}
      <section className="py-20 bg-section-bg relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary font-poppins mb-6">
              Feature Comparison
            </h2>
            <p className="text-xl text-text-secondary font-inter mb-8 max-w-3xl mx-auto">
              See exactly what&apos;s included in each plan to make the best choice for your business.
            </p>
          </div>

          <div className="overflow-x-auto mt-8">
            <div className="min-w-full inline-block align-middle">
              <table className="w-full border-collapse text-center text-sm md:text-base">
                <thead>
                  <tr>
                    <th className="bg-background/50 p-4 text-left font-semibold text-text-primary border-b border-text-muted/20 sticky left-0 z-20 shadow-lg">
                      Features
                    </th>
                    <th className="bg-background/50 p-4 font-semibold text-text-primary border-b border-text-muted/20 pt-8">
                      <div className="font-poppins text-lg mt-2">Local Foundation</div>
                      <div className="text-accent font-bold text-xl mt-1">$97/mo</div>
                    </th>
                    <th className="bg-accent/10 p-4 font-semibold text-text-primary border-b border-text-muted/20 relative pt-8">
                      <span className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-accent text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs font-semibold z-10">
                        Most Popular
                      </span>
                      <div className="font-poppins text-lg mt-2">Reputation Builder</div>
                      <div className="text-accent font-bold text-xl mt-1">$197/mo</div>
                    </th>
                    <th className="bg-green-50 dark:bg-green-900/20 p-4 font-semibold text-text-primary border-b border-text-muted/20 relative pt-8">
                      <span className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs font-semibold z-10">
                        Best Value
                      </span>
                      <div className="font-poppins text-lg mt-2">Growth Accelerator</div>
                      <div className="text-accent font-bold text-xl mt-1">$299/mo</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 text-left font-medium text-text-primary bg-background/30 border-b border-text-muted/10 sticky left-0 z-10 shadow-md">
                      Mobile-responsive website
                    </td>
                    <td className="p-4 border-b border-text-muted/10">
                      <span className="text-green-600 text-xl">✅</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-accent/5">
                      <span className="text-green-600 text-xl">✅</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-green-50/50 dark:bg-green-900/10">
                      <span className="text-green-600 text-xl">✅</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-left font-medium text-text-primary bg-background/30 border-b border-text-muted/10 sticky left-0 z-10 shadow-md">
                      Google Business Profile setup & optimization
                    </td>
                    <td className="p-4 border-b border-text-muted/10">
                      <span className="text-green-600 text-xl">✅</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-accent/5">
                      <span className="text-green-600 text-xl">✅</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-green-50/50 dark:bg-green-900/10">
                      <span className="text-green-600 text-xl">✅</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-left font-medium text-text-primary bg-background/30 border-b border-text-muted/10 sticky left-0 z-10 shadow-md">
                      SEO foundation (keywords, tags, indexing)
                    </td>
                    <td className="p-4 border-b border-text-muted/10">
                      <span className="text-green-600 text-xl">✅</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-accent/5">
                      <span className="text-green-600 text-xl">✅</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-green-50/50 dark:bg-green-900/10">
                      <span className="text-green-600 text-xl">✅</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-left font-medium text-text-primary bg-background/30 border-b border-text-muted/10 sticky left-0 z-10 shadow-md">
                      Contact form → email automation
                    </td>
                    <td className="p-4 border-b border-text-muted/10">
                      <span className="text-green-600 text-xl">✅</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-accent/5">
                      <span className="text-green-600 text-xl">✅</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-green-50/50 dark:bg-green-900/10">
                      <span className="text-green-600 text-xl">✅</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-left font-medium text-text-primary bg-background/30 border-b border-text-muted/10 sticky left-0 z-10 shadow-md">
                      Website edits per month
                    </td>
                    <td className="p-4 border-b border-text-muted/10">
                      <span className="text-text-primary font-semibold">3</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-accent/5">
                      <span className="text-text-primary font-semibold">3</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-green-50/50 dark:bg-green-900/10">
                      <span className="text-text-primary font-semibold">3+</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-left font-medium text-text-primary bg-background/30 border-b border-text-muted/10 sticky left-0 z-10 shadow-md">
                      Automated review requests
                    </td>
                    <td className="p-4 border-b border-text-muted/10">
                      <span className="text-red-500 text-xl">❌</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-accent/5">
                      <span className="text-green-600 text-xl">✅</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-green-50/50 dark:bg-green-900/10">
                      <span className="text-green-600 text-xl">✅</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-left font-medium text-text-primary bg-background/30 border-b border-text-muted/10 sticky left-0 z-10 shadow-md">
                      Automated review responses
                    </td>
                    <td className="p-4 border-b border-text-muted/10">
                      <span className="text-red-500 text-xl">❌</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-accent/5">
                      <span className="text-green-600 text-xl">✅</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-green-50/50 dark:bg-green-900/10">
                      <span className="text-green-600 text-xl">✅</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-left font-medium text-text-primary bg-background/30 border-b border-text-muted/10 sticky left-0 z-10 shadow-md">
                      Monthly keyword & reputation report
                    </td>
                    <td className="p-4 border-b border-text-muted/10">
                      <span className="text-red-500 text-xl">❌</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-accent/5">
                      <span className="text-green-600 text-xl">✅</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-green-50/50 dark:bg-green-900/10">
                      <span className="text-green-600 text-xl">✅</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-left font-medium text-text-primary bg-background/30 border-b border-text-muted/10 sticky left-0 z-10 shadow-md">
                      Google Analytics setup
                    </td>
                    <td className="p-4 border-b border-text-muted/10">
                      <span className="text-red-500 text-xl">❌</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-accent/5">
                      <span className="text-green-600 text-xl">✅</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-green-50/50 dark:bg-green-900/10">
                      <span className="text-green-600 text-xl">✅</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-left font-medium text-text-primary bg-background/30 border-b border-text-muted/10 sticky left-0 z-10 shadow-md">
                      Add-on automations included
                    </td>
                    <td className="p-4 border-b border-text-muted/10">
                      <span className="text-red-500 text-xl">❌</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-accent/5">
                      <span className="text-text-primary font-semibold">1</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-green-50/50 dark:bg-green-900/10">
                      <span className="text-text-primary font-semibold">3</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-left font-medium text-text-primary bg-background/30 border-b border-text-muted/10 sticky left-0 z-10 shadow-md">
                      Advanced SEO (content + backlinks)
                    </td>
                    <td className="p-4 border-b border-text-muted/10">
                      <span className="text-red-500 text-xl">❌</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-accent/5">
                      <span className="text-red-500 text-xl">❌</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-green-50/50 dark:bg-green-900/10">
                      <span className="text-green-600 text-xl">✅</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-left font-medium text-text-primary bg-background/30 border-b border-text-muted/10 sticky left-0 z-10 shadow-md">
                      Social media page setup & integration
                    </td>
                    <td className="p-4 border-b border-text-muted/10">
                      <span className="text-red-500 text-xl">❌</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-accent/5">
                      <span className="text-red-500 text-xl">❌</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-green-50/50 dark:bg-green-900/10">
                      <span className="text-text-primary font-semibold">✅ + lead tracking links</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-left font-medium text-text-primary bg-background/30 border-b border-text-muted/10 sticky left-0 z-10 shadow-md">
                      Monthly performance report
                    </td>
                    <td className="p-4 border-b border-text-muted/10">
                      <span className="text-red-500 text-xl">❌</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-accent/5">
                      <span className="text-red-500 text-xl">❌</span>
                    </td>
                    <td className="p-4 border-b border-text-muted/10 bg-green-50/50 dark:bg-green-900/10">
                      <span className="text-green-600 text-xl">✅</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-left font-medium text-text-primary bg-background/30">
                      Monthly strategy call
                    </td>
                    <td className="p-4">
                      <span className="text-red-500 text-xl">❌</span>
                    </td>
                    <td className="p-4 bg-accent/5">
                      <span className="text-red-500 text-xl">❌</span>
                    </td>
                    <td className="p-4 bg-green-50/50 dark:bg-green-900/10">
                      <span className="text-green-600 text-xl">✅</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-text-muted font-inter mb-6 text-lg">
              Ready to get started? Choose your plan above or contact us for a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#pricing" className="btn-primary">
                View Plans
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
