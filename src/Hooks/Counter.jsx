import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // This effect runs only once when the component mounts
  useEffect(() => {
    console.log("Component mounted! Greeting displayed.");

    // Cleanup function runs when the component is unmounted
    return () => {
      console.log("Component unmounted! Cleanup!");
    };
  }, []); // Empty dependency array: this effect runs once when the component is mounted

  // This effect runs every time the 'count' state changes
  useEffect(() => {
    if (count !== 0) {
      console.log(`Count updated to: ${count}`);
    }
  }, [count]); // Dependency array: this effect runs when 'count' changes

  // This will trigger whenever the 'setCount' function is called
  const increment = () => {
    setCount(count + 1); // Increment the count
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
