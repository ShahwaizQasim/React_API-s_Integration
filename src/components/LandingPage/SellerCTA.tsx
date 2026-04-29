import { useScrollAnimation } from "../../Hooks/useScrollAnimation";

export function SellerPromo() {
  const [ref, visible] = useScrollAnimation();
  return (
    <section
      ref={ref}
      className={`py-20 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-700 relative overflow-hidden transition-all duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}
      aria-label="Become a seller"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-white/90 text-sm font-medium mb-6">
              🏪 For Sellers
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              Turn Your Passion
              <br />
              Into <span className="text-yellow-300">Profit</span>
            </h2>
            <p className="text-indigo-200 text-lg mb-8">
              Join 150,000+ sellers already growing their business on Bazario.
              Zero setup fees, powerful tools, and millions of ready buyers.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                ["🚀", "Quick Setup", "Be live in minutes"],
                ["📊", "Rich Analytics", "Know your numbers"],
                ["💰", "Low Fees", "Keep more profit"],
                ["🛡️", "Seller Protection", "Secure payments"],
              ].map(([icon, t, d]) => (
                <div
                  key={t}
                  className="flex items-start gap-3 bg-white/10 rounded-2xl p-4"
                >
                  <span className="text-xl">{icon}</span>
                  <div>
                    <div className="text-white font-bold text-sm">{t}</div>
                    <div className="text-white/70 text-xs">{d}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                className="px-8 py-4 bg-white text-indigo-700 font-bold rounded-2xl hover:bg-yellow-300 hover:text-indigo-900 transition-all shadow-xl hover:shadow-2xl active:scale-95"
                aria-label="Start selling"
              >
                Start Selling Today — Free
              </button>
              <button
                className="px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all"
                aria-label="Learn more about selling"
              >
                Learn More →
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["$12,400", "Monthly Revenue", "📈"],
              ["98%", "Order Success", "✅"],
              ["4.9★", "Seller Rating", "⭐"],
              ["24/7", "Support Access", "💬"],
            ].map(([n, l, icon]) => (
              <div
                key={l}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 text-center hover:bg-white/20 transition-colors"
              >
                <div className="text-3xl mb-2">{icon}</div>
                <div className="text-3xl font-black text-white">{n}</div>
                <div className="text-white/70 text-sm">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
