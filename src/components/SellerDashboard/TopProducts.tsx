// ===== src/components/TopProducts.tsx =====

import React from "react";
import type { Product } from "../../utils/dummyData";

interface TopProductsProps {
  products: Product[];
}

const rankColors = [
  "text-amber-400",
  "text-gray-400",
  "text-orange-700",
  "text-gray-600",
  "text-gray-600",
];

const TopProducts: React.FC<TopProductsProps> = ({ products }) => {
  const maxSales = Math.max(...products.map((p) => p.sales));

  return (
    <div className="bg-gray-900 dark:bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
        <div>
          <h2 className="text-sm font-semibold text-white">Top Products</h2>
          <p className="text-xs text-gray-500 mt-0.5">By total sales volume</p>
        </div>
        <button className="text-xs font-semibold text-violet-400 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/20 px-3 py-1.5 rounded-full transition-colors">
          See All
        </button>
      </div>

      {/* Products list */}
      <div className="divide-y divide-gray-800/60">
        {products.map((product, i) => {
          const pct = Math.round((product.sales / maxSales) * 100);
          return (
            <div
              key={product.id}
              className="flex items-center gap-3.5 px-5 py-4 hover:bg-gray-800/40 transition-colors group"
            >
              {/* Rank */}
              <span
                className={`text-xs font-bold w-4 text-center flex-shrink-0 ${rankColors[i]}`}
              >
                {i + 1}
              </span>

              {/* Emoji thumb */}
              <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-105 transition-transform">
                {product.emoji}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-sm font-medium text-gray-200 truncate">
                    {product.name}
                  </p>
                  <span className="text-xs font-bold text-violet-400 ml-2 flex-shrink-0">
                    {product.price}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500 transition-all duration-700"
                    style={{ width: `${pct}%` }}
                  />
                </div>

                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-[10px] text-gray-600 uppercase tracking-wider">
                    {product.category}
                  </span>
                  <span className="text-[11px] text-gray-500 font-medium">
                    {product.sales.toLocaleString()} sold
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-gray-800 bg-gray-800/20">
        <p className="text-xs text-gray-600 text-center">
          Total:{" "}
          <span className="text-gray-400 font-semibold">
            {products.reduce((s, p) => s + p.sales, 0).toLocaleString()}
          </span>{" "}
          units sold across all products
        </p>
      </div>
    </div>
  );
};

export default TopProducts;
