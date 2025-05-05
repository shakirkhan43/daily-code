import React, { useState } from "react";
import Data from "../MapFunction/RealProduct.json";

function SearchProduct() {
  // ✅ Step 1: Search ke liye state banayi — input box me user jo likhega wo yahan store hoga
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Step 2: Ye line original data ko filter karegi — agar product title ya category match kare searchTerm se
  const filteredProducts = Data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || // Title match
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) // Category match 
    || item.description.toLowerCase().includes(searchTerm.toLowerCase()) //description match 
  );

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      {/* ✅ Heading */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Explore Our Products
      </h1>

      {/* ✅ Step 3: Search Input Box — isme likhne se searchTerm update hoga */}
      <div className="max-w-md mx-auto mb-10">
        <input
          type="text"
          placeholder="Search by name or category..."
          className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm} // Controlled input: value state se bind hai
          onChange={(e) => setSearchTerm(e.target.value)} // User jab type kare, state update ho
        />
      </div>

      {/* ✅ Step 4: Grid layout for products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {/* ✅ Step 5: Agar filteredProducts me data ho to render karo, warna "No products found" */}
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* ✅ Product Image */}
              <img
                src={item.image}
                alt={item.title}
                className="h-60 w-full object-contain p-5 bg-gray-50"
              />

              {/* ✅ Product Info Section */}
              <div className="p-5">
                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
                  {item.title}
                </h2>

                {/* Price */}
                <p className="text-green-600 text-xl font-bold mb-1">${item.price}</p>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {item.description}
                </p>

                {/* Category */}
                <p className="text-xs text-blue-600 mb-2 capitalize">
                  {item.category}
                </p>

                {/* Rating & Review */}
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>⭐ {item.rating.rate}</span>
                  <span>{item.rating.count} reviews</span>
                </div>

                {/* Add to Cart Button */}
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          // ✅ Step 6: Agar kuch bhi match na ho, to ye message show hoga
          <p className="text-center text-gray-600 col-span-3">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}

export default SearchProduct;
