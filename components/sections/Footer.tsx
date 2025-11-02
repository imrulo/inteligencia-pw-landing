const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-luxury-navy text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-lg mb-2">
            Made with ❤️ by{" "}
            <a
              href="mailto:imrulo.eth@proton.me"
              className="text-luxury-gold hover:text-luxury-gold-dark transition-colors font-semibold"
            >
              imrulo.eth
            </a>
          </p>
          <p className="text-sm text-gray-400">
            © {currentYear} All rights reserved.
          </p>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-400">
            <div>
              <h3 className="text-white font-semibold mb-3">Legal Notice</h3>
              <p className="leading-relaxed">
                This is a domain landing page for sale purposes only. No active
                services are implied. Domain availability may change. All offers
                subject to verification and acceptance.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Privacy</h3>
              <p className="leading-relaxed">
                We respect your privacy — no cookies, no tracking, no analytics
                (except Vercel Analytics for performance insights). Your data is not
                sold or shared with third parties. GDPR compliant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

