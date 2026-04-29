import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { STEPS } from "../../utils/dummyData";
import { SectionHeader } from "./SectionHeader";

export function HowItWorks() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-indigo-950 to-slate-900 relative overflow-hidden"
      aria-label="How it works"
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle,rgba(255,255,255,0.8) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="📋 Simple Process"
          title={
            <>
              <span className="text-white">How It</span>{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Works
              </span>
            </>
          }
          subtitle={
            <span className="text-indigo-300">
              Start shopping in four simple steps — it takes less than a minute.
            </span>
          }
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => {
            const [ref, visible] = useScrollAnimation();
            return (
              <div
                key={s.step}
                ref={ref}
                className={`relative group transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px border-t-2 border-dashed border-indigo-800 z-0 -translate-x-1/2" />
                )}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 z-10">
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <div className="text-4xl font-black text-indigo-500/40 mb-2 leading-none">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">
                    {s.title}
                  </h3>
                  <p className="text-indigo-300 text-sm leading-relaxed">
                    {s.desc}
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
