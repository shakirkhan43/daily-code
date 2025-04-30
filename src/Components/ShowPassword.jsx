// ShowPassword.jsx
import React, { useState } from "react";

const ShowPassword = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  }

  return (
    <div style={{ maxWidth: "400px", margin: "auto", fontFamily: "Arial" }}>
      <h2>🔐 Show / Hide Password</h2>

      <input
        type={show ? "text" : "password"}
        placeholder="Enter password"
        style={{ padding: "8px", width: "100%" }}
      />

      <button
        onClick={toggleShow}
        style={{ marginTop: "10px", padding: "5px 10px" }}
      >
        {show ? "Hide" : "Show"} Password
      </button>
    </div>
  );
};

export default ShowPassword;
