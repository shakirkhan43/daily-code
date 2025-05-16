// index.js
const express = require("express");
const app = express();
const PORT = 4000;

// Middleware to parse JSON
app.use(express.json());

// Dummy array to store user data
let users = [];

// ✅ POST API
app.post("/user", (req, res) => {
  const { name, email, phone, city } = req.body;
  const newUser = { name, email, phone, city };
  users.push(newUser);
  res.status(201).json({ message: "User data received!", user: newUser });
});

// ✅ GET API (optional)
app.get("/user", (req, res) => {
  res.json(users);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



// const express = require("express");
// const fs = require("fs"); // File system module import karo
// const app = express();
// const PORT = 4000;

// app.use(express.json()); // JSON parse karne ke liye middleware

// const filePath = "./data.json";

// // Helper function: data.json se existing data load karo
// const loadUsersFromFile = () => {
//   try {
//     if (fs.existsSync(filePath)) {
//       const fileData = fs.readFileSync(filePath, "utf8");
//       return fileData ? JSON.parse(fileData) : [];
//     } else {
//       return [];
//     }
//   } catch (err) {
//     console.error("Error reading file:", err);
//     return [];
//   }
// };

// // Helper function: users ko data.json me save karo
// const saveUsersToFile = (users) => {
//   try {
//     fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
//   } catch (err) {
//     console.error("Error writing file:", err);
//   }
// };

// // ✅ POST API: data receive karke file me save karo
// app.post("/user", (req, res) => {
//   const { name, email, phone, city } = req.body;
//   const newUser = { name, email, phone, city };

//   // Pehle file se users load karo
//   let users = loadUsersFromFile();

//   // Naya user add karo
//   users.push(newUser);

//   // Users ko file me save karo
//   saveUsersToFile(users);

//   res.status(201).json({ message: "User data received and saved to file!", user: newUser });
// });

// // ✅ GET API: file se data read karke bhejo
// app.get("/user", (req, res) => {
//   const users = loadUsersFromFile();
//   res.json(users);
// });

// // Server start
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
