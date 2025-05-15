import React, { useEffect, useState } from "react";

function ProductList1() {
  const [products, setProducts] = useState([]); // 🔹 Products store karne ke liye
  const [loading, setLoading] = useState(true); // 🔹 Loading flag
  const [error, setError] = useState("");       // 🔹 Error message

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // ✅ Step 1: API Call
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        // ✅ Step 2: State me store karo
        setProducts(data);
        setLoading(false);
      } catch (err) {
        // ❌ Error handle
        setError("Failed to load products.");
        setLoading(false);
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts(); // ✅ Call function

  }, []); // 🔁 Empty dependency => sirf ek baar chalega

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Product List (GET API)</h2>

      {/* 🔄 Loading */}
      {loading && <p>Loading products...</p>}

      {/* ❌ Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* ✅ Data Render */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "10px"}}>
            <img src={product.image} alt={product.title} width={100} height={100} />
            <h4>{product.title.slice(0, 30)}...</h4>
            <p>💰 ₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList1;




//  API: https://fakestoreapi.com/products
// 20 fake products deta hai (title, image, price)

// Real eCommerce jaisa experience


// Steps Summary:
// | Step                | Kya hota hai?                          |
// | ------------------- | -------------------------------------- |
// | `useEffect()`       | Component mount hote hi fetch hota hai |
// | `fetch()`           | API call                               |
// | `await res.json()`  | JSON me convert                        |
// | `setProducts(data)` | State update                           |
// | `loading`, `error`  | User experience better banata hai      |






