import { useState } from "react";
import { PRODUCTS } from "../../utils/dummyData";
import { SectionHeader } from "./SectionHeader";
import { ProductCard } from "./ProductsCard";

export function FeaturedProducts() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Electronics", "Fashion", "Home", "Beauty", "Kitchen"];
  const filtered = filter === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === filter || (filter === "Home" && p.category === "Home") );
 
  return (
    <section className="py-20 bg-gray-50" aria-label="Featured products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="🛍️ Featured Products" title={<>Curated Just <span className="text-indigo-600">For You</span></>} subtitle="Hand-picked products from our top-rated sellers with the best deals."/>
        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${filter === f ? "bg-indigo-600 text-white shadow-md shadow-indigo-200" : "bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 border border-gray-200"}`} aria-pressed={filter === f}>
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((p, i) => <ProductCard key={p.id} product={p} delay={i * 80}/>)}
        </div>
        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-indigo-600 text-indigo-600 font-bold rounded-2xl hover:bg-indigo-600 hover:text-white transition-all" aria-label="View all products">
            View All Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}