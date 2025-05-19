import React from "react";

function UpdateProduct() {
  const updateProduct = () => {
    fetch("https://dummyjson.com/products/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "New Updated Title",
        price: 555,
      })
    })
    .then(res => res.json())
    .then(data => console.log("Updated Product:", data))
    .catch(err => console.error("Error:", err));
  };

  return (
    <button onClick={updateProduct}>
      Update Product
    </button>
  );
}

export default UpdateProduct;
