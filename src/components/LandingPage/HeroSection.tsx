import { useEffect, useState } from "react";
import { Stars } from "../Stars";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      headline: "Shop the Future,",
      sub: "Today.",
      accent: "Millions of products.",
      detail: "One seamless experience.",
    },
    {
      headline: "New Season,",
      sub: "New You.",
      accent: "Fresh arrivals daily.",
      detail: "From the world's best brands.",
    },
    {
      headline: "Deals That",
      sub: "Amaze.",
      accent: "Up to 70% off.",
      detail: "Limited time offers.",
    },
  ];

  useEffect(() => {
    const t = setInterval(
      () => setCurrentSlide((s) => (s + 1) % slides.length),
      4000,
    );
    return () => clearInterval(t);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden flex items-center"
      aria-label="Hero section"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 text-sm text-indigo-200 font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              🔥 Over 50,000 sellers now live
            </div>
            <div
              key={currentSlide}
              className="mb-6"
              style={{ animation: "fadeSlideUp 0.5s ease forwards" }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                {slide.headline}
                <br />
                <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  {slide.sub}
                </span>
              </h1>
              <p className="mt-4 text-xl text-indigo-200 font-medium">
                {slide.accent}{" "}
                <span className="text-gray-400">{slide.detail}</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <button
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 text-white font-medium rounded-2xl shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all hover:-translate-y-0.5 active:scale-95 text-lg"
                aria-label="Shop Now"
              >
                Shop Now
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <button
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-2xl transition-all hover:-translate-y-0.5 text-lg"
                aria-label="Explore products"
              >
                Explore Products
              </button>
            </div>
            {/* Stats */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {[
                ["2M+", "Products"],
                ["150K+", "Sellers"],
                ["5M+", "Happy Buyers"],
                ["4.8★", "Rating"],
              ].map(([n, l]) => (
                <div key={l} className="text-center">
                  <div className="text-2xl font-black text-white">{n}</div>
                  <div className="text-xs text-indigo-300 font-medium">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Floating cards */}
          <div className="relative hidden lg:flex items-center justify-center h-[500px]">
            {/* Central product card */}
            <div
              className="absolute w-64 bg-white rounded-3xl shadow-2xl p-5 z-10 hover:-translate-y-2 transition-transform duration-500"
              style={{ animation: "float 4s ease-in-out infinite" }}
            >
              <div className="w-full h-36 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl flex items-center justify-center text-7xl mb-4">
                🎧
              </div>
              <div className="text-xs font-semibold text-indigo-500 uppercase tracking-wider mb-1">
                Electronics
              </div>
              <div className="font-bold text-gray-800 text-sm mb-1">
                Wireless Pro Headphones
              </div>
              <div className="flex items-center justify-between">
                <div className="font-black text-lg text-gray-900">$129.99</div>
                <Stars rating={4.8} />
              </div>
              <button className="mt-3 w-full py-2 bg-indigo-600 text-white text-xs font-bold rounded-xl hover:bg-indigo-700 transition-colors">
                Add to Cart
              </button>
            </div>

            {/* Floating side cards */}
            <div
              className="absolute -left-4 top-16 w-40 bg-white rounded-2xl shadow-xl p-3 z-20"
              style={{ animation: "float 5s ease-in-out infinite 0.5s" }}
            >
              <div className="text-3xl text-center mb-2">⌚</div>
              <div className="text-xs font-semibold text-gray-700">
                Leather Watch
              </div>
              <div className="text-xs font-bold text-indigo-600">$89.99</div>
            </div>
            <div
              className="absolute -right-4 top-24 w-40 bg-white rounded-2xl shadow-xl p-3 z-20"
              style={{ animation: "float 4.5s ease-in-out infinite 1s" }}
            >
              <div className="text-3xl text-center mb-2">👟</div>
              <div className="text-xs font-semibold text-gray-700">
                Running Sneakers
              </div>
              <div className="text-xs font-bold text-indigo-600">$74.99</div>
            </div>
            <div
              className="absolute left-8 bottom-16 w-44 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl shadow-xl p-3 text-white z-20"
              style={{ animation: "float 3.5s ease-in-out infinite 1.5s" }}
            >
              <div className="text-xs font-bold opacity-80 mb-1">
                🔥 Flash Sale
              </div>
              <div className="text-lg font-black">Up to 70% OFF</div>
              <div className="text-xs opacity-80">Today only</div>
            </div>
            <div
              className="absolute right-4 bottom-20 w-36 bg-white rounded-2xl shadow-xl p-3 z-20"
              style={{ animation: "float 5.5s ease-in-out infinite 0.8s" }}
            >
              <div className="flex items-center gap-1.5">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-lg">
                  ✅
                </div>
                <div>
                  <div className="text-[10px] text-gray-500">
                    Order shipped!
                  </div>
                  <div className="text-[10px] font-bold text-gray-700">
                    Your #8821
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex gap-2 justify-center lg:justify-start mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`rounded-full transition-all ${i === currentSlide ? "w-8 h-2 bg-indigo-400" : "w-2 h-2 bg-white/30"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
      `}</style>
    </section>
  );
}
