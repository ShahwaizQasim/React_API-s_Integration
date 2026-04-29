import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { CATEGORIES } from "../../utils/dummyData";
import { SectionHeader } from "./SectionHeader";

export function Categories() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section className="py-20 bg-white" aria-label="Shop by category">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="🗂️ Categories" title={<>Shop by <span className="text-indigo-600">Category</span></>} subtitle="Find exactly what you're looking for across our wide range of categories."/>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat, i) => {

            return (
                <div ref={ref}>
              <Link to="#" key={cat.name} className={`group flex flex-col items-center gap-3 p-6 rounded-3xl bg-gray-50 hover:bg-gradient-to-br hover:${cat.color} hover:text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} style={{transitionDelay:`${i*80}ms`}} aria-label={`Browse ${cat.name}`}>
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{cat.icon}</div>
                <div className="text-center">
                  <div className="font-bold text-gray-800 group-hover:text-white text-sm transition-colors">{cat.name}</div>
                  <div className="text-[11px] text-gray-400 group-hover:text-white/80 transition-colors mt-0.5">{cat.count}</div>
                </div>
              </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}