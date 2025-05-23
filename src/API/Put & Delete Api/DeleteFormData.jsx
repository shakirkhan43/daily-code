import { useEffect, useState } from "react"; // React hooks import kiye gaye
import axios from "axios"; // Axios API call ke liye

function DeleteFromData() {
  // 🔹 Form fields ke liye state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  // 🔹 Edit mode ke liye state
  const [isEdit, setIsEdit] = useState(false);      // true ho to PUT request chalegi
  const [editEmail, setEditEmail] = useState("");   // edit hone wale user ka email store

  // 🔹 All users ko dikhane ke liye state
  const [users, setUsers] = useState([]);

  // ✅ 1. API se user data fetch karne wala function
  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:4000/user"); // GET request
      setUsers(res.data); // response me aayi user list ko set karna
    } catch (err) {
      console.error("Fetch Error:", err);
    }
  };

  // ✅ 2. Component jab mount ho tab user data load ho jaye
  useEffect(() => {
    fetchUsers();
  }, []);

  // ✅ 3. Form submit hone par (POST ya PUT)
  const handleSubmit = async (e) => {
    e.preventDefault(); // page reload se rokna
    const userData = { name, email, phone, city }; // ek object me data store

    try {
      if (isEdit) {
        // Agar edit mode on hai to PUT request
        await axios.put(`http://localhost:4000/user/${editEmail}`, userData);
        alert("User updated successfully");
      } else {
        // Agar edit mode nahi hai to POST request
        await axios.post("http://localhost:4000/user", userData);
        alert("User added successfully");
      }

      

      // 🔄 Form reset + user list reload
      setName("");
      setEmail("");
      setPhone("");
      setCity("");
      setIsEdit(false);     // Edit mode khatam karo
      setEditEmail("");     // Edit hone wale user ka email hata do
      fetchUsers();         // Server se latest user list reload karo


    } catch (err) {
      console.error("Submit Error:", err);
      alert("Something went wrong");
    }
  };


  // 🔴 Delete function add kiya gaya hai
const handleDelete = async (email) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this user?");
  if (!confirmDelete) return;

  try {
    await axios.delete(`http://localhost:4000/user/${email}`);
    alert("User deleted successfully");
    fetchUsers(); // List ko refresh karo
  } catch (err) {
    console.error("Delete Error:", err);
    alert("Failed to delete user");
  }
};

  // ✅ 4. Kisi user par "Edit" button dabane par form me uska data bharna
  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    setCity(user.city);
    setIsEdit(true); // ab form edit mode me chala gaya
    setEditEmail(user.email); // PUT ke liye email ko identify karna
  };

  return (
    <>
     <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", backgroundColor: "#fefefe" }}>
      
      {/* Heading change hoti hai Add/Edit mode ke hisaab se */}
      <h2 style={{ textAlign: "center", fontSize: "24px", marginBottom: "20px", color: "#333" }}>
        {isEdit ? "✏️ Edit User" : "➕ Add New User"}
      </h2>

      {/* ✅ Form for adding/updating user */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        /><br /><br />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isEdit}
          style={{ ...inputStyle, backgroundColor: isEdit ? "#eee" : "white", cursor: isEdit ? "not-allowed" : "text" }}
        /><br /><br />

        <input
          type="text"
          placeholder="Enter your phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={inputStyle}
        /><br /><br />

        <input
          type="text"
          placeholder="Enter your city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={inputStyle}
        /><br /><br />

        <div style={{ textAlign: "center" }}>
          <button type="submit" style={buttonStyle}>
            {isEdit ? "Save Changes" : "Add User"}
          </button>
        </div>
      </form>

      <hr style={{ margin: "40px 0", borderColor: "#ddd" }} />

      {/* ✅ All Users List + Edit Button */}
      <h2 style={{ textAlign: "center", color: "#333" }}>📋 All Users</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {users.map((user, index) => (
          <li key={index} style={userCardStyle}>
            <div>
              <strong>{user.name}</strong> ({user.email})<br />
              📞 {user.phone} | 📍 {user.city}
            </div>
            <button onClick={() => handleEdit(user)} style={editBtnStyle}>
              Edit
            </button>
              <button onClick={() => handleDelete(user.email)} style={deleteBtnStyle}>
        🗑️ Delete
      </button>
          </li>
        ))}
      </ul>
 
 {/* Delete button add kiya gaya hai */}

      {users.map((user, index) => (
  <li key={index} style={userCardStyle}>
    <div>
      <strong>{user.name}</strong> ({user.email})<br />
      📞 {user.phone} | 📍 {user.city}
    </div>
    <div style={{ display: "flex", gap: "10px" }}>
      <button onClick={() => handleEdit(user)} style={editBtnStyle}>
        ✏️ Edit
      </button>
      <button onClick={() => handleDelete(user.email)} style={deleteBtnStyle}>
        🗑️ Delete
      </button>
    </div>
  </li>
        ))}

    </div>
    </>
  );
}



// ✅ Reusable CSS styles
const inputStyle = {
  padding: "10px",
  width: "100%",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const buttonStyle = {
  backgroundColor: "#007BFF",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  fontSize: "15px",
  cursor: "pointer",
  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
  transition: "0.3s",
};

const userCardStyle = {
  backgroundColor: "#f9f9f9",
  marginBottom: "15px",
  padding: "15px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const editBtnStyle = {
  backgroundColor: "#28a745",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  padding: "8px 16px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "14px",
  width: "150px",
};

// Delete button style
const deleteBtnStyle = {
  backgroundColor: "#dc3545",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  padding: "8px 16px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "14px",
  width: "150px",
};

export default DeleteFromData; 
