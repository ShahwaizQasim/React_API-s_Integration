import { useEffect, useState } from "react";
import { TESTIMONIALS } from "../../utils/dummyData";
import { SectionHeader } from "./SectionHeader";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { Stars } from "../Stars";

export function Testimonials() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setActive((a) => (a + 1) % TESTIMONIALS.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-20 bg-gray-50" aria-label="Customer testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="💬 Reviews"
          title={
            <>
              What Our <span className="text-indigo-600">Customers</span> Say
            </>
          }
          subtitle="Join millions of satisfied shoppers who trust Bazario every day."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => {
            const [ref, visible] = useScrollAnimation();
            return (
              <div
                key={t.name}
                ref={ref}
                className={`bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"} ${i === active ? "ring-2 ring-indigo-200" : ""}`}
                style={{ transitionDelay: `${i * 100}ms` }}
                role="article"
                aria-label={`Review by ${t.name}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-indigo-50 flex items-center justify-center text-2xl">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 text-sm">
                        {t.name}
                      </div>
                      <div className="text-xs text-gray-400">
                        {t.role} · {t.location}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-gray-400">{t.date}</span>
                </div>
                <Stars rating={t.rating} />
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  "{t.text}"
                </p>
                <div className="mt-4 text-indigo-600 text-xs font-semibold">
                  ✓ Verified Purchase
                </div>
              </div>
            );
          })}
        </div>
        {/* Trust bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 bg-white rounded-2xl p-6 border border-gray-100">
          {[
            ["4.8/5", "Average Rating"],
            ["5M+", "Happy Customers"],
            ["98%", "Satisfaction Rate"],
            ["4.2M", "5-Star Reviews"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="text-2xl font-black text-gray-900">{n}</div>
              <div className="text-xs text-gray-500 font-medium">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
