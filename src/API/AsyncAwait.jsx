import { useEffect } from "react";

function AsincAwait() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log("Post:", data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, []);

  return <h1>Async Await in React</h1>;
}

export default AsincAwait;