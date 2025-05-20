// React ke hooks import kar rahe hain: useEffect (side effects ke liye), useState (state management ke liye)
import { useEffect, useState } from "react";

// Lucide-react library se PencilLine icon import kar rahe hain jo Edit button me use hoga
import { PencilLine } from "lucide-react";

export default function PutFormUi() {
  // Form ke inputs ke liye ek state object banaya jisme name, email, phone, city fields hain
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: ""
  });

  // Users list ko store karne ke liye state, jisme backend se users ka data aayega
  const [users, setUsers] = useState([]);

  // Ek boolean state jo batata hai ki form "Edit" mode me hai ya "Add" mode me (default false yani Add mode)
  const [isEdit, setIsEdit] = useState(false);

  // Edit mode me user ke email ko store karte hain, jisse backend me user identify karke update kar sake
  const [editEmail, setEditEmail] = useState("");

  // Input fields me change hone par ye function call hota hai, jisme event se name aur value le kar form state update karte hain
  const handleChange = (e) => {
    const { name, value } = e.target; // Input field ka name (jaise 'name', 'email') aur uski value le rahe hain
    setForm((prev) => ({
      ...prev,       // Purana form object spread kar rahe hain (copy karna)
      [name]: value  // Jo input change hua uske corresponding field ko update kar rahe hain
    }));
  };

  // Form submit hone par ye function call hota hai
  const handleSubmit = async (e) => {
    e.preventDefault();  // Default form submission ko rokte hain (page reload nahi hoga)

    try {
      if (isEdit) {
        // Agar Edit mode me hain to PUT request bhejenge jisme backend pe user update hoga
        const res = await fetch(`http://localhost:4000/user/${editEmail}`, {
          method: "PUT",  // HTTP method PUT for update
          headers: { "Content-Type": "application/json" },  // Request me JSON data bhej rahe hain
          body: JSON.stringify(form)  // Form ke data ko JSON me convert kar ke bhej rahe hain
        });

        const data = await res.json();  // Server ka response JSON me parse kar rahe hain

        if (res.ok) {
          alert("User updated successfully!");  // Update successful hone par alert
          setIsEdit(false);    // Edit mode off kar do
          setEditEmail("");    // Edit email ko clear kar do
        } else {
          alert(data.message); // Agar error aaye to backend se error message dikhao
        }
      } else {
        // Add mode me POST request bhejenge naya user add karne ke liye
        const res = await fetch("http://localhost:4000/user", {
          method: "POST",  // HTTP POST for new record
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        });

        const data = await res.json();

        if (!res.ok) return alert(data.message); // Agar POST me error aaye to message dikhayein
        alert("User added successfully!");       // Success alert
      }

      // Form ko reset kar dete hain jisse input fields clear ho jaye
      setForm({ name: "", email: "", phone: "", city: "" });

      // Users ki list ko refresh karne ke liye dubara fetch karte hain
      fetchUsers();
    } catch (err) {
      // Agar network ya fetch request me koi error aaye to console me print kar denge
      console.error("Submit Error:", err);
    }
  };

  // Backend se users ko fetch karne ke liye function, jo API call karke users data set karta hai
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:4000/user");  // GET request for users
      const data = await res.json();  // JSON response parse karna
      setUsers(data);  // Users state update karna
    } catch (err) {
      console.error("Fetch Error:", err);  // Error aaye to console me print karo
    }
  };

  // Jab Edit button pe click karte hain to ye function call hota hai jo form me user ke data ko bhar deta hai
  const handleEdit = (user) => {
    setForm({
      name: user.name,
      email: user.email,
      phone: user.phone,
      city: user.city
    });
    setIsEdit(true);        // Edit mode on kar dete hain
    setEditEmail(user.email); // Jo user edit kar rahe hain uska email store karte hain
  };

  // React useEffect hook jisme component mount hone par users fetch karte hain
  useEffect(() => {
    fetchUsers();  // Component first render me users load karne ke liye call
  }, []);

  // JSX return kar rahe hain jisme form aur users list render ho rahi hai

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center px-4">
  <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-4xl">
    <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8 tracking-tight">
      {isEdit ? "✏️ Update User" : "➕ Add New User"}
    </h2>

    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter Name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter Email"
          required
          disabled={isEdit}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter Phone"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
        />
      </div>

      {/* City */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
        <input
          type="text"
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="Enter City"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
        />
      </div>

      {/* Submit Button - Full Width on Desktop */}
      <div className="md:col-span-2">
        <button
          type="submit"
          className={`w-full ${
            isEdit ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
          } text-white font-bold py-2.5 rounded-xl shadow-md transition duration-300`}
        >
          {isEdit ? "Save Changes" : "Add User"}
        </button>
      </div>
    </form>

    {/* Users List */}
    <h3 className="text-xl font-semibold text-gray-700 mt-10 mb-4 border-b pb-2">
      👥 All Users
    </h3>
    <ul className="space-y-4">
      {users.map((user) => (
        <li
          key={user.email}
          className="flex justify-between items-center bg-gray-50 border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition"
        >
          <div className="text-sm text-gray-700">
            <span className="font-semibold text-lg text-gray-900">{user.name}</span> (
            <span className="text-blue-600">{user.email}</span>) <br />
            📞 {user.phone} &nbsp; | &nbsp; 🏙️ {user.city}
          </div>
          <button
            onClick={() => handleEdit(user)}
            className="flex items-center gap-1 text-xs text-white bg-yellow-500 px-3 py-1.5 rounded-lg hover:bg-yellow-600 transition"
          >
            <PencilLine className="w-4 h-4" />
            Edit
          </button>
        </li>
      ))}
    </ul>
  </div>
</div>

  );
}
