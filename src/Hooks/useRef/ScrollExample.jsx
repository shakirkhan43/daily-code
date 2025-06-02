import React, { useRef } from "react";

function ScrollExample() {
  const sectionRef = useRef(null); // step 1: section ka ref

  const scrollToSection = () => {
    // step 3: scrollIntoView use karo
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Top Section */}
      <div style={{ height: "100vh", background: "#eee", padding: "50px" }}>
        <h1>Welcome!</h1>
        <button onClick={scrollToSection}>Go to Bottom Section</button>
      </div>

      {/* Target Section */}
      <div
        ref={sectionRef} // step 2: yahan ref lagao
        style={{ height: "100vh", background: "#cde", padding: "50px" }}
      >
        <h2>This is the target section 🚀</h2>
      </div>
    </div>
  );
}

export default ScrollExample;
