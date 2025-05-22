// import { useState } from "react";

// function UserFrom() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//     const [city, setCity] = useState("");

//     const handleSubmit = async () => {
//         console.log(name, email, phone, city);

//         const url = "http://localhost:4000/user"; // ✅ Use full URL with http

//         try {
//             let response = await fetch(url, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ name, email, phone, city }) // ✅ send object
//             });

//             response = await response.json();

//             if (response) {
//                 alert("User added successfully");
//             }
//         } catch (error) {
//             console.error("Error:", error);
//             alert("Something went wrong");
//         }
//     }

//     return (
//         <>
//             <h1>Add New User</h1>
//             <input
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//             /> <br /><br />
//             <input
//                 type="text"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//             /> <br /><br />
//             <input
//                 type="text"
//                 placeholder="Enter your phone"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//             /> <br /><br />
//             <input
//                 type="text"
//                 placeholder="Enter your city"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//             /> <br /><br />
//             <button onClick={handleSubmit}>Submit</button>
//         </>
//     );
// }

// export default UserFrom;











import { useState } from "react";
import axios from "axios";

function UserForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        console.log(name, email, phone, city);
        try {
            const response = await axios.post("http://localhost:4000/user", {
                name,
                email,
                phone,
                city
            });

            if (response) {
                alert("User added successfully");
            }
        } catch (error) {
            console.error("Axios Error:", error);
            alert("Something went wrong");
        }
    };

    return (
        <>
            <h1>Add New User</h1>

            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /> <br /><br />

            <input type="text" placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            /> <br /><br />

            <input type="text" placeholder="Enter your phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            /> <br /><br />

            <input type="text" placeholder="Enter your city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            /> <br /><br />

            <button>Submit</button>
            </form>
        </>
    );
}

export default UserForm;



