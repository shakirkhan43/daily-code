import React, { useState } from "react";

export default function UpdateUserForm() {
  // Form ke liye state
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: email zaroori hai update ke liye
    if (!email) {
      setMessage("Please enter the email to update user");
      return;
    }

    // Prepare updated data (filter out empty fields)
    const updatedData = {};
    if (name) updatedData.name = name;
    if (phone) updatedData.phone = phone;
    if (city) updatedData.city = city;

    if (Object.keys(updatedData).length === 0) {
      setMessage("Please enter at least one field to update");
      return;
    }

    try {
      // PUT request API call
      const response = await fetch(`http://localhost:4000/user/${email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`Success: ${data.message}`);
        // Clear form fields
        setName("");
        setPhone("");
        setCity("");
        setEmail("");
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setMessage("Error connecting to server");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Update User Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email (required to identify user):</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter user email"
            required
          />
        </div>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter new name"
          />
        </div>
        <div>
          <label>Phone:</label><br />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter new phone"
          />
        </div>
        <div>
          <label>City:</label><br />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter new city"
          />
        </div>
        <button type="submit" style={{ marginTop: 10 }}>Update User</button>
      </form>

      {message && (
        <p style={{ marginTop: 15, fontWeight: "bold" }}>{message}</p>
      )}
    </div>
  );
}
