import React, { useRef, useState } from 'react';

function RefCounter() {
  const countRef = useRef(0); // value change hogi but re-render nahi
  const [stateCount, setStateCount] = useState(0); // state change se re-render hoga

  const handleClick = () => {
    countRef.current += 1; // value badhi
    console.log("Ref Count:", countRef.current);

    setStateCount(prev => prev + 1); // UI update hoga
  };

  return (
    <div>
      <h2>State Count: {stateCount}</h2>
      <p>Ref Count (console me dekhna)</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default RefCounter;