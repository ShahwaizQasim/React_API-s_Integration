import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { BENEFITS } from "../../utils/dummyData";
import { SectionHeader } from "./SectionHeader";

export function Benefits() {
  return (
    <section className="py-20 bg-white" aria-label="Why choose us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="💎 Why Choose Us"
          title={
            <>
              Built Around <span className="text-indigo-600">Your Trust</span>
            </>
          }
          subtitle="Every decision we make puts shoppers first. Here's our promise to you."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((b, i) => {
            const [ref, visible] = useScrollAnimation();
            return (
              <div
                key={b.title}
                ref={ref}
                className={`group flex gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-indigo-50 border border-transparent hover:border-indigo-100 transition-all duration-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl group-hover:shadow-md transition-shadow">
                  {b.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
