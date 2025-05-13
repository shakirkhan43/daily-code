import React, { useEffect } from "react";

function PromiseMethod() {
  useEffect(() => {
    const getData = () => {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => res.json())
        .then((data) => console.log("Post:", data))
        .catch((err) => console.error("Error:", err));
    };

    getData();
  }, []);

  return <h1>Check Console</h1>;
}

export default PromiseMethod;
