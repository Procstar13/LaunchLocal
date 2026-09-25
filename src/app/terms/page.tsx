import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for LaunchLocal website, Google, local SEO, and review services.',
  alternates: { canonical: '/terms' },
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <div className="page-shell py-20 sm:py-28">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-text-primary font-poppins mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none text-text-secondary font-inter">
            <p className="text-sm text-text-muted mb-8">
              Last updated: September 9, 2026
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary font-poppins mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using LaunchLocal's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary font-poppins mb-4">
                2. Description of Service
              </h2>
              <p>
                LaunchLocal provides website development, local visibility support, digital audits, and related services for small businesses. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Website design and development</li>
                <li>Local SEO and business profile support</li>
                <li>Business systems and automation</li>
                <li>Technical consulting services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary font-poppins mb-4">
                3. User Responsibilities
              </h2>
              <p>
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Provide accurate and complete information when requested</li>
                <li>Use our services in compliance with all applicable laws and regulations</li>
                <li>Not use our services for any unlawful or prohibited activities</li>
                <li>Respect intellectual property rights</li>
                <li>Maintain the confidentiality of any account credentials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary font-poppins mb-4">
                4. Payment Terms
              </h2>
              <p>
                Payment terms will be specified in individual service agreements. Generally:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Payment is due according to the agreed schedule</li>
                <li>Late payments may incur additional fees</li>
                <li>Refunds are subject to our refund policy as outlined in service agreements</li>
                <li>All prices are subject to change with notice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary font-poppins mb-4">
                5. Intellectual Property
              </h2>
              <p>
                All content, designs, and materials created by LaunchLocal remain our intellectual property unless otherwise specified in writing. Clients retain rights to their own content and materials provided to us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary font-poppins mb-4">
                6. Limitation of Liability
              </h2>
              <p>
                LaunchLocal shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary font-poppins mb-4">
                7. Termination
              </h2>
              <p>
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary font-poppins mb-4">
                8. Changes to Terms
              </h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary font-poppins mb-4">
                9. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms of Service, contact us through our website or email Launchlocalaz@gmail.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
