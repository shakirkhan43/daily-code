import React, { useState, useEffect } from "react";
// import axios from "axios";

function MyComponent() {
    const [data, setData] = useState(null);
  // const [error, setError] = useState(null);

  // console.log("data", data);

  //   Get ?

  //   const apidata = async () => {
  //     await fetch("https://dummyjson.com/products")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((res) => setData(res))
  //       .catch((err) => console.log(err));

  //     };
  //     console.log("data", data);

  const apidata = () => {
     
    fetch("https://dummyjson.com/products")
        .then( (res) => {
          return res.json();
        })
        .then ( (res) => {
          return setData(res);

        })
        
        
        
      }
      console.log("data", data);
  
      useEffect(() => {
        apidata();
      } , [])

  // Post

  // const data = {
  //   userId: 133,
  //   title: "Deepak Singh",
  //   category: "beauty",
  //   price: 100,
  //   description: "Deepak Singh",
  // };

  // const apidata = () => {
  //   fetch("https://dummyjson.com/products/add", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => console.log("..........", res))
  //     .catch((err) => console.log(err));
  // };

  return (
    <div>
      {/* Display data */}
      <h1>Api</h1>
      <button onClick={apidata}>Get Data </button>
    </div>
  );
}

export default MyComponent;


// async await 
// Promise 
// try catch 
// then catch 
// json 
// cors error

// private routing 