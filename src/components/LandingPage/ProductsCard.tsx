import { useState } from "react";
import { useScrollAnimation } from "../../Hooks/useScrollAnimation";
import { Stars } from "../Stars";

export function ProductCard({ product, delay = 0 }:any) {
  const [added, setAdded] = useState(false);
  const [ref, visible] = useScrollAnimation();
  const discount = Math.round((1 - product.price / product.originalPrice) * 100);
 
  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };
 
  const badgeColors: { [key: string]: string } = {
    "Best Seller": "bg-amber-100 text-amber-700",
    "New": "bg-blue-100 text-blue-700",
    "Sale": "bg-red-100 text-red-600",
    "Top Rated": "bg-green-100 text-green-700",
    "Premium": "bg-violet-100 text-violet-700",
    "Popular": "bg-orange-100 text-orange-700",
    "Hot": "bg-rose-100 text-rose-700",
  };
 
  return (
    <div ref={ref} className={`group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-indigo-100 transition-all duration-500 hover:-translate-y-2 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{transitionDelay:`${delay}ms`}} role="article" aria-label={product.name}>
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-indigo-50/50 h-48">
        <div className="w-full h-full flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-500">{product.image}</div>
        <div className="absolute top-3 left-3">
          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${badgeColors[product.badge] || "bg-gray-100 text-gray-700"}`}>{product.badge}</span>
        </div>
        <div className="absolute top-3 right-3 bg-red-500 text-white text-[11px] font-bold px-2 py-1 rounded-full">-{discount}%</div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
        <button className="absolute bottom-3 right-3 w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-indigo-50" aria-label={`Wishlist ${product.name}`}>
          <svg className="w-4 h-4 text-gray-500 hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        </button>
      </div>
      <div className="p-4">
        <div className="text-[11px] font-semibold text-indigo-500 uppercase tracking-wider mb-1">{product.category}</div>
        <h3 className="font-bold text-gray-800 text-sm leading-snug mb-2 line-clamp-2">{product.name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <Stars rating={product.rating}/>
          <span className="text-[11px] text-gray-400">({product.reviews.toLocaleString()})</span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <div className="text-xl font-black text-gray-900">${product.price}</div>
            <div className="text-xs text-gray-400 line-through">${product.originalPrice}</div>
          </div>
          <button onClick={handleAdd} className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all active:scale-95 ${added ? "bg-green-500 text-white" : "bg-indigo-600 hover:bg-indigo-700 text-white"}`} aria-label={`Add ${product.name} to cart`}>
            {added ? (
              <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg> Added</>
            ) : (
              <><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg> Add</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}