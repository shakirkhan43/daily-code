import React, { useState } from "react";
function EasyFrom(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

   const handlerSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
   }
  let data = { name, email };
   fetch("https://jsonplaceholder.typicode.com/posts", {
            method:"POST",
            headers :{
                "Content-Type" : "application/json",
            }, 
           body: JSON.stringify(data),
           
   }).then((res) => console.log("Response:", res));
    console.log("Data:", data);
    return(
        <>
        <form>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
            <button type="submit" onClick={handlerSubmit}>Submit</button>
        </form>
        </>
    )
}

export default EasyFrom;