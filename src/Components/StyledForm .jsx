import React, { useState } from "react";
import "./StyledForm.css"; // External CSS file

const StyledForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "male",
    skills: [],
    country: "India",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target.value)
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      
    }));
    console.log(value)
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        skills: prev.skills.filter((skill) => skill !== value),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form Submitted ✅");
  };

  return (
    <div className="form-container">
      <h2>📝 User Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Gender:
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
        </label>

        <label>
          Skills:
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                value="HTML"
                checked={formData.skills.includes("HTML")}
                onChange={handleCheckboxChange}
              />
              HTML
            </label>
            <label>
              <input
                type="checkbox"
                value="CSS"
                checked={formData.skills.includes("CSS")}
                onChange={handleCheckboxChange}
              />
              CSS
            </label>
            <label>
              <input
                type="checkbox"
                value="JavaScript"
                checked={formData.skills.includes("JavaScript")}
                onChange={handleCheckboxChange}
              />
              JavaScript
            </label>
          </div>
        </label>

        <label>
          Country:
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Germany">Germany</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>

      <div className="preview">
        <h3>📋 Preview:</h3>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Gender:</strong> {formData.gender}</p>
        <p><strong>Skills:</strong> {formData.skills.join(", ") || "None"}</p>
        <p><strong>Country:</strong> {formData.country}</p>
      </div>
    </div>
  );
};

export default StyledForm;
