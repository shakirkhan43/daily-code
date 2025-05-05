
  // Yeh sirf Electronics wale products return karega
  
  function ProductFilter() {
    const Products = [
        { id: 1, name: 'Phone', category: 'Electronics' },
        { id: 2, name: 'Shirt', category: 'Clothing' },
        { id: 3, name: 'Laptop', category: 'Electronics' }
      ];
      
    const filtered = Products.filter((product) => product.category === 'Clothing');

    return (
      <div className="bg-gray-200 py-10 px-4 text-center"> 
        {filtered.map((data) => (
          <div key={data.id}>
            <strong>{data.name}</strong>
            <p>Category: {data.category}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default ProductFilter