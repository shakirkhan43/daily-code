// components/FilterNavbar.js
import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

function FilterNavbar({ cartCount }) {
  
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">ShopZone</div>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center text-gray-700 font-medium">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/products" className="hover:text-blue-600">All Products</a>
          <div className="flex items-center gap-1">
            <FaShoppingCart className="text-blue-600" />
            <span>Cart: {cartCount}</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white">
          <a href="/" className="block py-2 hover:text-blue-600">Home</a>
          <a href="/products" className="block py-2 hover:text-blue-600">All Products</a>
          <div className="flex items-center gap-2 py-2 text-gray-700">
            <FaShoppingCart className="text-blue-600" />
            <span>Cart: {cartCount}</span>
          </div>
        </div>
      )}
    </nav>
  );
}

export default FilterNavbar;
