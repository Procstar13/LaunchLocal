import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-section-bg border-t border-text-muted/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Brand Section */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="text-xl font-bold text-text-primary font-poppins">
                LaunchLocal
              </span>
              <div className="w-2 h-2 bg-accent rounded-full"></div>
            </div>
            <p className="text-text-secondary text-sm font-inter max-w-xs mx-auto md:mx-0">
              Websites + Automation for Small Businesses. Get online, get found, and save time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center">
            <h3 className="text-text-primary font-semibold font-poppins">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#pricing" className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm font-inter">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm font-inter">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm font-inter">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-center md:text-left md:mr-8">
            <h3 className="text-text-primary font-semibold font-poppins">Contact</h3>
            <div className="space-y-2 text-sm font-inter">
              <p className="text-text-secondary">
                Ready to get started?
              </p>
              <Link 
                href="/#contact" 
                className="inline-block btn-primary text-sm py-2 px-4"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-text-muted/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-muted text-sm font-inter">
            © {new Date().getFullYear()} LaunchLocal. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-text-muted hover:text-text-secondary transition-colors duration-200 text-sm font-inter">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-text-muted hover:text-text-secondary transition-colors duration-200 text-sm font-inter">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
