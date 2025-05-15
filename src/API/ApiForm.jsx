// import React, { useState } from 'react';
// function ApiForm(){
// const [name, setName] = useState("");
// const [email, setEmail] = useState("");

// const handelsubmit =  (e) => {
//     e.preventDefault();
//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log({ name, email });
//     const data = { name, email };
//     // API call
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     }).then((res) => console.log("Response:", res));
    
// }

//     return(
//         <>
//         <form>
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
//             <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
//             <button onClick={handelsubmit} type="submit">Submit</button>

//         </form>

//         <h1>Data submitted successfully!</h1>
//         <h2>Name: {name}</h2>
//         <h2>Email: {email}</h2>
//         </>


//     )
// }

// export default ApiForm;






import React, { useState } from 'react';

function ApiForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState(null); // ✅ Submit ke baad show karne ke liye

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { name, email };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json()) // ✅ Response ko JSON me convert karna na bhoolen
      .then((result) => {
        console.log("✅ Response:", result);
        setSubmittedData(data); // ✅ UI me data dikhane ke liye state update
      })
      .catch((err) => console.error("❌ Error:", err));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button type="submit">Submit</button>
      </form>

      {/* ✅ Output browser par dikhega submit ke baad */}
      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h1>Data submitted successfully! ✅</h1>
          <h2>Name: {submittedData.name}</h2>
          <h2>Email: {submittedData.email}</h2>
        </div>
      )}
    </>
  );
}

export default ApiForm;





