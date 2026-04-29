import { useScrollAnimation } from "../../Hooks/useScrollAnimation";

export function CTABanner() {
  const [ref, visible] = useScrollAnimation();
  return (
    <section
      ref={ref}
      className={`py-20 bg-white transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      aria-label="Call to action"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-6xl mb-6">🛍️</div>
        <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
          Ready to Start <span className="text-indigo-600">Shopping?</span>
        </h2>
        <p className="text-gray-500 text-xl mb-8">
          Join over 5 million shoppers who trust Bazario for the best deals, top
          brands, and fast delivery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-xl shadow-indigo-200 hover:shadow-indigo-300 transition-all hover:-translate-y-0.5 text-lg active:scale-95"
            aria-label="Create free account"
          >
            Create Free Account
          </button>
          <button
            className="px-10 py-4 border-2 border-gray-200 hover:border-indigo-400 text-gray-700 hover:text-indigo-700 font-semibold rounded-2xl transition-all text-lg"
            aria-label="Browse as guest"
          >
            Browse as Guest
          </button>
        </div>
        <p className="mt-6 text-sm text-gray-400">
          No credit card required · Cancel anytime · Free shipping on first
          order
        </p>
      </div>
    </section>
  );
}
