import { useScrollAnimation } from "../../Hooks/useScrollAnimation";

export function SectionHeader({ badge, title, subtitle, center = true }:any) {
  const [ref, visible] = useScrollAnimation();
  return (
    <div ref={ref} className={`mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${center ? "text-center" : ""}`}>
      {badge && <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">{badge}</div>}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-500 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}