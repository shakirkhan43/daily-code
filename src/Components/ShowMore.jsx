// ShowMore.jsx
import React, { useState } from "react";

const ShowMore = () => {
  const [showFull, setShowFull] = useState(false);

  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis nunc at purus cursus, nec condimentum nulla blandit. Sed quis libero ut odio sodales efficitur. Nam ullamcorper.";

  return (
    <div style={{ maxWidth: "500px", margin: "auto", fontFamily: "Arial" }}>
      <h2>📖 Show More / Show Less</h2>

      <p>
        {showFull ? text : `${text.substring(0, 80)}...`}
      </p>

      <button
        onClick={() => setShowFull(!showFull)}
        style={{ padding: "5px 10px" }}
      >
        {showFull ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default ShowMore;
