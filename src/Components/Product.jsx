import React from 'react'

const Product = ({age , data}) => {
  return (
    <>
      <h1>{age}</h1>
      <h2>{data.name}</h2>
      <h2>{data.age}</h2>
    </>
  )
}

export default Product;
