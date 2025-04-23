import React, { useState } from "react";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError(""); // Clear error while typing
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email) {
      setError("Please fill all fields.");
      return;
    }

    alert(`Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}`);
    console.log("Submitted Data:", formData);
  };

  // Handle reset
  const handleReset = () => {
    setFormData({ name: "", email: "" });
    setError("");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", fontFamily: "Arial" }}>
      <h2>🚀 React Form Example</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <br /><br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <br /><br />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      </form>

      <hr />

      <h4>🔍 Live Preview</h4>
      <p><strong>Name:</strong> {formData.name || "N/A"}</p>
      <p><strong>Email:</strong> {formData.email || "N/A"}</p>
    </div>
  );
};

export default MyForm;
