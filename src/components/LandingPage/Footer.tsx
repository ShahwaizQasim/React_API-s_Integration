export function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                <span className="text-white font-black text-lg">B</span>
              </div>
              <span className="font-black text-xl text-white">Bazario</span>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-xs">
              The world's most trusted marketplace. Shop, sell, and thrive — all
              in one place.
            </p>
            <div className="flex gap-3">
              {["𝕏", "in", "f", "📷"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-indigo-600 flex items-center justify-center text-sm transition-colors"
                  aria-label={`Social link ${i + 1}`}
                >
                  {icon}
                </a>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 font-medium">
                All systems operational
              </span>
            </div>
          </div>
          {/* Links */}
          {[
            {
              title: "Shop",
              links: [
                "All Products",
                "New Arrivals",
                "Best Sellers",
                "Deals & Offers",
                "Gift Cards",
              ],
            },
            {
              title: "Sell",
              links: [
                "Become a Seller",
                "Seller Dashboard",
                "Seller Resources",
                "Fees & Pricing",
                "Partner Program",
              ],
            },
            {
              title: "Support",
              links: [
                "Help Center",
                "Track Order",
                "Returns",
                "Contact Us",
                "Community",
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-indigo-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Trust badges */}
        <div className="border-t border-white/10 pt-8 pb-6">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
            {[
              "🔒 SSL Secured",
              "💳 PCI Compliant",
              "🏆 ISO Certified",
              "📱 App Store 4.8★",
              "🌍 Ships Worldwide",
            ].map((b) => (
              <span
                key={b}
                className="text-xs text-gray-500 flex items-center gap-1"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span>© 2025 Bazario Inc. All rights reserved.</span>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Cookie Policy",
              "Accessibility",
            ].map((l) => (
              <a
                key={l}
                href="#"
                className="hover:text-indigo-400 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
