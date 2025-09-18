import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | LaunchLocal',
  description: 'Privacy Policy for LaunchLocal - How we collect, use, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-text-primary font-poppins mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-text-secondary font-inter">
            <p className="text-sm text-text-muted mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary font-poppins mb-4">
                1. Information We Collect
              </h2>
              <p>
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Contact us through our website or email</li>
                <li>Request a quote or consultation</li>
                <li>Subscribe to our newsletter</li>
                <li>Engage with our services</li>
              </ul>
              <p className="mt-4">
                This information may include your name, email address, business information, and any other details you choose to provide.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary font-poppins mb-4">
                2. How We Use Your Information
              </h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you technical notices, updates, and administrative messages</li>
                <li>Communicate with you about products, services, and promotional offers</li>
                <li>Monitor and analyze trends and usage</li>
                <li>Detect, investigate, and prevent fraudulent transactions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary font-poppins mb-4">
                3. Information Sharing and Disclosure
              </h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>With service providers who assist us in operating our website and conducting our business</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary font-poppins mb-4">
                4. Data Security
              </h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary font-poppins mb-4">
                5. Cookies and Tracking Technologies
              </h2>
              <p>
                We may use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. Disabling cookies may affect the functionality of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary font-poppins mb-4">
                6. Third-Party Services
              </h2>
              <p>
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary font-poppins mb-4">
                7. Your Rights and Choices
              </h2>
              <p>
                You have the right to:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of the data we have about you</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary font-poppins mb-4">
                8. Data Retention
              </h2>
              <p>
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary font-poppins mb-4">
                9. Children's Privacy
              </h2>
              <p>
                Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary font-poppins mb-4">
                10. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-text-primary font-poppins mb-4">
                11. Contact Us
              </h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us through our website or at the contact information provided in our service agreements.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
