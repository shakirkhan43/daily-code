// 📁 App.jsx (or App.js)

// ✅ React ke built-in hooks import kar rahe hain
import { useEffect, useState } from "react";

// ✅ Functional Component define kar rahe hain
export default function PostFormUi() {

  // ✅ State for form input values
  const [form, setForm] = useState({
    name: "",     // 👉 User ka naam
    email: "",    // 👉 User ka email
    phone: "",    // 👉 User ka phone number
    city: ""      // 👉 User ka city
  });

  // ✅ State to store users fetched from server
  const [users, setUsers] = useState([]);

  // ✅ Form ke inputs me jo bhi likha jaaye usko update karta hai
  const handleChange = (e) => {
    const { name, value } = e.target; // 👉 Input field ka name aur value lete hain
    setForm((prev) => ({
      ...prev,           // 👉 Purani state ko preserve karte hain
      [name]: value      // 👉 Sirf current field ko update karte hain
    }));
  };

  // ✅ Form submit karne par chalta hai
  const handleSubmit = async (e) => {
    e.preventDefault(); // 👉 Page reload hone se rokta hai (default behavior ko prevent karta hai)

    try {
      // ✅ Server par POST request bhej kar user ko add karte hain
      const res = await fetch("http://localhost:4000/user", {
        method: "POST", // 👉 POST ka use new user add karne ke liye hota hai
        headers: { "Content-Type": "application/json" }, // 👉 Data JSON format me bhej rahe hain
        body: JSON.stringify(form) // 👉 Form ka data string me convert karke bhejte hain
      });

      const data = await res.json(); // 👉 Response ko JSON me convert karte hain

      if (res.ok) {
        alert("User added successfully!"); // ✅ Alert agar user add ho gaya
        setForm({ name: "", email: "", phone: "", city: "" }); // ✅ Form reset
        fetchUsers(); // ✅ Naye user ko list me dikhane ke liye fresh data fetch karte hain
      } else {
        alert(data.message); // ❌ Agar kuch error aaya to alert karte hain
      }
    } catch (err) {
      console.error("Submit Error:", err); // ❌ Console me error print karte hain
    }
  };

  // ✅ Server se saare users fetch karta hai
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:4000/user"); // 👉 GET request
      const data = await res.json(); // 👉 Response ko JSON me convert karte hain
      setUsers(data); // ✅ Users state update karte hain
    } catch (err) {
      console.error("Fetch Error:", err); // ❌ Agar koi error aaya to console me dikhate hain
    }
  };

  // ✅ Component load hote hi users ko fetch karta hai (sirf 1 baar)
  useEffect(() => {
    fetchUsers(); // ✅ Mount hote hi fetchUsers call hota hai
  }, []); // 👉 Dependency array empty hai, isliye ye sirf 1 baar chalega

  return (
    // ✅ Full screen container, center aligned
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      {/* ✅ White card container */}
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg">

        {/* ✅ Title */}
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          User Form
        </h2>

        {/* ✅ Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* ✅ Name Input */}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* ✅ Email Input */}
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* ✅ Phone Input */}
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* ✅ City Input */}
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* ✅ Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Add User
          </button>
        </form>

        {/* ✅ User List Title */}
        <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4">
          All Users
        </h3>

        {/* ✅ Users List */}
        <ul className="space-y-2">
          {users.map((user) => (
            <li
              key={user.email} // 👉 Email ko unique key ke roop me use kar rahe hain
              className="bg-gray-50 border border-gray-200 p-3 rounded-md shadow-sm"
            >
              {/* ✅ Display user info */}
              <span className="font-medium text-gray-900">{user.name}</span> (
              <span className="text-blue-600">{user.email}</span>) - {user.phone},{" "}
              {user.city}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
