// const express = require("express");
// 📦 Express framework import kiya (server banane ke liye)
const express = require("express");

// 📁 File system module import kiya (file read/write ke liye)
const fs = require("fs");

// 📂 Path module import kiya (file ka exact path banane ke liye cross-platform tarike se)
const path = require("path");

const cors = require("cors"); // ✅ Step 1: CORS import karo

// 🚀 Express app initialize kiya
const app = express();

// 🔢 Port define kiya (yahan local server 4000 pe chalega)
const PORT = 4000;

app.use(cors()); // ✅ Step 2: CORS enable karo (ye sabse upar rakho)
// 🧠 Middleware: Ye line JSON body ko automatically parse karegi (req.body use karne ke liye zaroori)
app.use(express.json());

// 📁 JSON file ka path banaya (isi file me user data store hoga)
const filePath = path.join(__dirname, "./data.json");

// ==============================
// 📥 Function: JSON file se data read karna
// ==============================
const loadUsersFromFile = () => {
  try {
    // Agar file exist karti hai to
    if (fs.existsSync(filePath)) {
      // File ka data read karo
      const data = fs.readFileSync(filePath, "utf8");
      // Agar file empty nahi hai to JSON parse karo, warna empty array return karo
      return data ? JSON.parse(data) : [];
    } else {
      // Agar file nahi mili to empty array return karo
      return [];
    }
  } catch (err) {
    console.error("Read Error:", err);
    return [];
  }
};

// ==============================
// 💾 Function: JSON file me data save karna
// ==============================
const saveUsersToFile = (users) => {
  try {
    // Array ko JSON me convert karke file me likh do
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  } catch (err) {
    console.error("Write Error:", err);
  }
};

// ==============================
// ✅ POST API: Naya user add karne ke liye
// ==============================
app.post("/user", (req, res) => {
  const { name, email, phone, city } = req.body;
  const newUser = { name, email, phone, city };
  const users = loadUsersFromFile();

  const isExist = users.some((user) => user.email === email);
  if (isExist) {
    return res.status(400).json({ message: "Email already exists" });
  }

  users.push(newUser);
  saveUsersToFile(users);
  res.status(201).json({ message: "User added", user: newUser });
});

// ==============================
// ✅ PUT API: Email ke base par user update karna
// ==============================
app.put("/user/:email", (req, res) => {
  const email = req.params.email;
  const updatedData = req.body;
  let users = loadUsersFromFile();
  const index = users.findIndex((user) => user.email === email);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = { ...users[index], ...updatedData };
  saveUsersToFile(users);
  res.json({ message: "User updated", user: users[index] });
});

// ==============================
// ✅ PATCH API: Email ke base par user ke kuch fields update karna
// ==============================
app.patch("/user/:email", (req, res) => {
  const email = req.params.email;
  const updatedFields = req.body;
  let users = loadUsersFromFile();

  const index = users.findIndex((user) => user.email === email);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = { ...users[index], ...updatedFields };
  saveUsersToFile(users);

  res.json({ message: "User partially updated", user: users[index] });
});

// ==============================
// ✅ DELETE API: Email ke base par user delete karna
// ==============================
app.delete("/user/:email", (req, res) => {
  const email = req.params.email;
  const users = loadUsersFromFile();

  const index = users.findIndex((user) => user.email === email);
  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  const updatedUsers = users.filter((user) => user.email !== email);
  saveUsersToFile(updatedUsers);

  res.json({ message: `User with email ${email} deleted successfully.` });
});

// ==============================
// ✅ GET API: Sare users fetch karne ke liye
// ==============================
app.get("/user", (req, res) => {
  const users = loadUsersFromFile();
  res.json(users);
});

// ==============================
// 🟢 Server Start kar do
// ==============================
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

