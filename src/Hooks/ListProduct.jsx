import React, { useEffect, useState } from 'react';



function ListProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
  .then(res => res.json())  // .json() method se raw data ko parse kiya jata hai
  .then(data => {
    setProducts(data); 
    // console.log("Products fetched:", data);
  })
  .catch(err => {
    console.error("Error fetching products:", err);
  });

  }, []);

  fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))

  return (
    <div style={{maxWidth:"1200px", margin:"auto"}}>
    <div>
        <h1 style={{color:"green",textAlign:"center", border:"2px solid green", padding:"5px", margin:"10px", fontSize:"30px", fontWeight:"bold", fontFamily:"serif"}}>Product List</h1>
    </div>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      padding: '20px',
      fontFamily:"serif"
    }}>
      {products.map(product => (
        <div key={product.id} style={{
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '15px',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <img 
            src={product.images[0]} 
            alt={product.title} 
            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} 
          />
          <h3 style={{ fontSize: '1.2rem', margin: '10px 0' }}>{product.title}</h3>
          <p style={{ fontWeight: 'bold', color: '#4caf50' }}>₹ {product.price}</p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default ListProduct;

