// import React, { useEffect, useState } from "react";

// function WriteApi() {
//   const [post, setPost] = useState(null); // 🔸 State to store API response
//   const [error, setError] = useState(null); // 🔸 Error state (optional)

//   useEffect(() => {
//     // ✅ useEffect ke andar API call sirf 1 baar chalegi (on mount)

//     const fetchData = async () => {
//       try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/");
//         const data = await res.json();
//         setPost(data); // ✅ Set data in state to update UI
//       } 
//       catch (err) {
//         console.error("API Error:", err);
//         setError("Something went wrong while fetching data.");
//       }
//     };

//     fetchData(); // 🔁 Function call

// }, []); // 🔸 Empty dependency array => run once on mount

//   return (
//     <div>
//       <h1>useEffect API Fetch ✅</h1>

//       {/* ✅ Error show karo agar API fail ho jaye */}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {/* ✅ Agar data mila to show karo */}
//       {post ? (
//         <div>
//           <h2>{post.title}</h2>
//           <p>{post.body}</p>
//         </div>
//       ) : (
//         <p>Loading...</p> // 🔄 Jab tak data aaye, loading message dikhao
//       )}
//     </div>
//   );
// }

// export default WriteApi;



import React, { useEffect, useState } from 'react';

function WriteApi() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message); // Error ko state me set kar liya
      }
    };

    fetchUsers();
  });

  return (
    <div>
      <h1>User List</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
      
        ))}
      </ul>
    </div>
  );
}

export default WriteApi;

