import React, { useState } from "react";
import "./ReadMore.css";

const ReadMore = ({ text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }) => {  // Default value = ""
  const [showFull, setShowFull] = useState(false);

  const toggleText = () => {
    setShowFull(!showFull);
  };

  return (
    <div className="read-more-container">
      <p>
        {showFull ? text : text.substring(0, 80) + "..."}
      </p>
      <button onClick={toggleText}>
        {showFull ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReadMore;
