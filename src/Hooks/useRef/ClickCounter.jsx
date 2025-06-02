import React, { useRef, useState } from "react";

function ClickCounter() {
  const clickCount = useRef(0);  // hold value

  const [dummy, setDummy] = useState(0); // just to force re-render

  const handleClick = () => {
    clickCount.current += 1;
    console.log("Click Count:", clickCount.current);
    setDummy((prev) => prev + 1); // re-render karne ke liye
  };

  return (
    <div>
      <p>Button clicked: {clickCount.current} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ClickCounter;