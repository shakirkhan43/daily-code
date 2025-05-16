import React, { useState } from "react";

function FormPostAPI() {
  // 🔸 1. Form fields ke liye state banayi
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  // 🔸 2. Input change par state update karne wala function
  const handleChange = (e) => {
    const { name, value } = e.target; // input ka name aur value nikal rahe
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 🔸 3. Form submit karne par POST API call
  const handleSubmit = async (e) => {
    e.preventDefault(); // form reload na ho

    try {
      const response = await fetch("http://localhost:4000/user", {
        method: "POST", // 🔁 POST request bhej rahe
        headers: {
          "Content-Type": "application/json", // server ko bataya ki hum JSON bhej rahe
        },
        body: JSON.stringify(formData), // form data ko JSON format me convert kiya
      });

      const data = await response.json(); // response ko JSON me convert kiya
      console.log("✅ Data posted successfully:", data); // console me result
      alert("Data POST API se bheja gaya ✅");

      // Optional: form ko reset karna
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
      });

    } catch (error) {
      console.error("❌ POST API error:", error); // error aane par
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", alignItems: "center", margin: "auto", border: "2px solid black", borderRadius: "10px", marginTop:"110px" }}>
      <h2>📨 Simple POST API Form</h2>

      <form onSubmit={handleSubmit}>
        {/* 🔹 Name Field */}
        <input
          className="border-2 border-gray-500"
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br /><br />

        {/* 🔹 Email Field */}
        <input
          className="border-2 border-gray-500"
          type="text"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br /><br />

        {/* 🔹 Phone Field */}
        <input
          className="border-2 border-gray-500"
          type="text"
          name="phone"
          placeholder="Enter Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        /><br /><br />

        {/* 🔹 City Field */}
        <input
          className="border-2 border-gray-500"
          type="text"
          name="city"
          placeholder="Enter City"
          value={formData.city}
          onChange={handleChange}
          required
        /><br /><br />

        {/* 🔹 Submit Button */}
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default FormPostAPI;
