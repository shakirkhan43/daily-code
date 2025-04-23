import { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
 
    setName(e.target.value);
    console.log(e.target.value);
    // console.log(e.target.value); 


  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    alert(`Hello, ${name}!`);
    // console.log(`Hello, ${name}!`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome Form</h1>


      <form  onSubmit={handleSubmit}>{/* onSubmit={handleSubmit} */}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
          style={{ padding: "8px", fontSize: "16px" }}
        />
        
        <button
          type="submit"
          style={{ marginLeft: "10px", padding: "8px 16px" }}
        >
          Submit
        </button>
      </form>

      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        Live Preview: <strong>{name}</strong>
      </p>


    </div>
  );
}

export default SimpleForm;
