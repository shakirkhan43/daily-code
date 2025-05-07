// ✅ React aur useState hook import kiya gaya hai
import React, { useState } from "react";

// ✅ JSON data import kiya gaya jisme products ka data hai (title, price, image, etc.)
import Data from "../MapFunction/RealProduct.json";

// ✅ Navbar component import kiya gaya jo upar cart count dikhata hai
import Navbar from "../Filter/FilterNavbar";

// ✅ Functional component start
function AddToCart() {
  // ✅ Search term ko handle karne ke liye state (initially khali string)
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Cart items ko store karne ke liye state (initially empty array)
  const [cartItems, setCartItems] = useState([]);

  // ✅ Filtered products banaye gaye jo search term ke according filter honge
  const filteredProducts = Data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||      // title me match ho
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||   // category me match ho
    item.description.toLowerCase().includes(searchTerm.toLowerCase())   // ya description me match ho
  );

  // ✅ Jab user "Add to Cart" kare, tab selected product cart me add ho jaye
  const handleAddToCart = (product) => {
    setCartItems([
      ...cartItems, 
      product]); // purani list + naya item
  };

  // ✅ Component ka return part
  return (
    <>
      {/* ✅ Navbar component use kiya gaya hai upar, jisme cart ka item count pass kiya gaya */}
      <Navbar cartCount={cartItems.length} />

      


      {/* ✅ Main wrapper div: light gray background + padding */}
      <div className="bg-gray-100 min-h-screen py-10 px-4">

        {/* ✅ Heading: Explore Our Products */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Explore Our Products
        </h1>

        {/* ✅ Search bar: input box jo searchTerm ko update karega */}
        <div className="max-w-md mx-auto mb-10">
          <input
            type="text"
            placeholder="Search by name, category, or description..."
            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}                        // input ki value state se aayegi
            onChange={(e) => setSearchTerm(e.target.value)} // typing se state update
          />
        </div>

        {/* ✅ Product Grid: responsive 1, 2 ya 3 column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {
            // ✅ Agar products filter hone ke baad bache hain
            filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
                >
                  {/* ✅ Product image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-60 w-full object-contain p-5 bg-gray-50"
                  />

                  {/* ✅ Product content */}
                  <div className="p-5">
                    {/* ✅ Title */}
                    <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
                      {item.title}
                    </h2>

                    {/* ✅ Price */}
                    <p className="text-green-600 text-xl font-bold mb-1">₹{item.price}</p>

                    {/* ✅ Short description */}
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>

                    {/* ✅ Category tag */}
                    <p className="text-xs text-blue-600 mb-2 capitalize">{item.category}</p>

                    {/* ✅ Rating info */}
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>⭐ {item.rating.rate}</span>
                      <span>{item.rating.count} reviews</span>
                    </div>

                    {/* ✅ Add to Cart Button */}
                    <button
                      className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                      onClick={() => handleAddToCart(item)} // ✅ click par cart me add hoga
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))
            ) : (
              // ✅ Agar filtered list empty ho to message show kare
              <p className="text-center text-gray-600 col-span-3">No products found.</p>
            )
          }
        </div>
      </div>





{/* ✅ Cart Items Section */}
<div className="max-w-5xl mx-auto mt-16">
  <h2 className="text-2xl font-bold mb-4">🛒 Cart Items ({cartItems.length})</h2>

  {cartItems.length === 0 ? (
    <p className="text-gray-600">No items in cart.</p>
  ) : (
    <>
      <ul className="space-y-4">
        {cartItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-white p-4 rounded shadow"
          >
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">₹{item.price}</p>
              </div>
            </div>
            <p className="text-green-600 font-bold">₹{item.price}</p>
          </li>
        ))}
      </ul>

      {/* ✅ Total Price Calculation without reduce */}
      <div className="mt-6 text-right">
  <h3 className="text-xl font-bold text-gray-800">
    Total: ₹
    {cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
  </h3>
</div> 
    </>
  )}
</div>
    </>
  );
}

// ✅ Export the component
export default AddToCart;











// for each Loop

// <div className="mt-6 text-right">
// <h3 className="text-xl font-bold text-gray-800">
//   Total: ₹
//   {
//     // Total Price Calculate Without Reduce
//     (() => {
//       let total = 0;
//       cartItems.forEach((item) => {
//         total += item.price; // Sum price for each item
//       });
//       return total.toFixed(2); // Format to 2 decimal places
//     })()
//   }
// </h3>
// </div>

















// import React, { useState } from "react";
// import Data from "../MapFunction/RealProduct.json";

// function AddToCart() {
//   const [searchTerm, setSearchTerm] = useState(""); // ✅ Search term
//   const [cartItems, setCartItems] = useState([]);   // ✅ Cart ke products

//   // ✅ Filter products based on title, category, or description
//   const filteredProducts = Data.filter((item) =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     item.description.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // ✅ Function to add product to cart
//   const handleAddToCart = (product) => {
//     setCartItems([...cartItems, product]); // purani list me naya product add karo
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen py-10 px-4">
//       {/* ✅ Show Cart Count */}
//       <div className="text-right max-w-7xl mx-auto mb-4 text-lg font-semibold">
//         🛒 Cart: {cartItems.length} item(s)
//       </div>

//       <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
//         Explore Our Products
//       </h1>

//       {/* ✅ Search Input */}
//       <div className="max-w-md mx-auto mb-10">
//         <input
//           type="text"
//           placeholder="Search by name, category, or description..."
//           className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* ✅ Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="h-60 w-full object-contain p-5 bg-gray-50"
//               />

//               <div className="p-5">
//                 <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
//                   {item.title}
//                 </h2>

//                 <p className="text-green-600 text-xl font-bold mb-1">${item.price}</p>
//                 <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
//                 <p className="text-xs text-blue-600 mb-2 capitalize">{item.category}</p>

//                 <div className="flex justify-between items-center text-sm text-gray-500">
//                   <span>⭐ {item.rating.rate}</span>
//                   <span>{item.rating.count} reviews</span>
//                 </div>

//                 {/* ✅ Add to Cart Button */}
//                 <button
//                   className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
//                   onClick={() => handleAddToCart(item)} // yahan se cart me jayega
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-600 col-span-3">No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AddToCart;
