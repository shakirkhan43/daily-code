import React, { useState } from "react";

const ShowHideExample = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const longText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis nunc at purus cursus, nec condimentum nulla blandit. Sed quis libero ut odio sodales efficitur. Nam ullamcorper.";

  return (
    <div style={{ maxWidth: "500px", margin: "auto", fontFamily: "Arial" }}>
      <h2>🔐 Show/Hide Password</h2>

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
      />
      <button
        onClick={() => setShowPassword(!showPassword)}
        style={{ marginLeft: "10px" }}
      >
        {showPassword ? "Hide" : "Show"}
      </button>

      <hr />

      <h2>📖 Show More / Show Less</h2>
      <p>
        {showMore ? longText : `${longText.substring(0, 80)}...`}
      </p>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default ShowHideExample;
