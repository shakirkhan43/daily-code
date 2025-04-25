import { useEffect, useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted or updated");

    return () => {
      console.log("Cleanup when component unmounts or before update");
      
    };
  }, []); // Runs on mount and whenever `count` changes

  return (
  
  <div>
<button onClick={() => setCount(count + 1)}>Click</button>
{count}

    
  </div>

);
}

export default MyComponent;