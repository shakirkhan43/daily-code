// // index.js
// const express = require("express");
// const app = express();
// const PORT = 4000;

// // Middleware to parse JSON
// app.use(express.json());

// // Dummy array to store user data
// let users = [];

// // ✅ POST API
// app.post("/user", (req, res) => {
//   const { name, email, phone, city } = req.body;
//   const newUser = { name, email, phone, city };
//   users.push(newUser);
//   res.status(201).json({ message: "User data received!", user: newUser });
// });

// // ✅ GET API (optional)
// app.get("/user", (req, res) => {
//   res.json(users);
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });



// const express = require("express");
// const fs = require("fs"); // File system module import karo
// const app = express();
// const PORT = 4000;

// app.use(express.json()); // JSON parse karne ke liye middleware

// const filePath = "./my-api-server/data.json"; // File ka path jahan data store hoga

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



// put code index.js 

// // const express = require("express");
// // 📦 Express framework import kiya (server banane ke liye)
// const express = require("express");

// // 📁 File system module import kiya (file read/write ke liye)
// const fs = require("fs");

// // 📂 Path module import kiya (file ka exact path banane ke liye cross-platform tarike se)
// const path = require("path");

// // 🚀 Express app initialize kiya
// const app = express();

// // 🔢 Port define kiya (yahan local server 4000 pe chalega)
// const PORT = 4000;

// // 🧠 Middleware: Ye line JSON body ko automatically parse karegi (req.body use karne ke liye zaroori)
// app.use(express.json());

// // 📁 JSON file ka path banaya (isi file me user data store hoga)
// const filePath = path.join(__dirname, "./data.json");

// // ==============================
// // 📥 Function: JSON file se data read karna
// // ==============================
// const loadUsersFromFile = () => {
//   try {
//     // Agar file exist karti hai to
//     if (fs.existsSync(filePath)) {
//       // File ka data read karo
//       const data = fs.readFileSync(filePath, "utf8");
//       // Agar file empty nahi hai to JSON parse karo, warna empty array return karo
//       return data ? JSON.parse(data) : [];
//     } else {
//       // Agar file nahi mili to empty array return karo
//       return [];
//     }
//   } catch (err) {
//     console.error("Read Error:", err);
//     return [];
//   }
// };

// // ==============================
// // 💾 Function: JSON file me data save karna
// // ==============================
// const saveUsersToFile = (users) => {
//   try {
//     // Array ko JSON me convert karke file me likh do
//     fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
//   } catch (err) {
//     console.error("Write Error:", err);
//   }
// };

// // ==============================
// // ✅ POST API: Naya user add karne ke liye
// // ==============================
// app.post("/user", (req, res) => {
//   // Client se aaya hua data destructure karo
//   const { name, email, phone, city } = req.body;

//   // New user object banao
//   const newUser = { name, email, phone, city };

//   // Pehle se file me jo users hai unhe load karo
//   const users = loadUsersFromFile();

//   // Optional check: Agar email already exist karta hai to error return karo
//   const isExist = users.some((user) => user.email === email);
//   if (isExist) {
//     return res.status(400).json({ message: "Email already exists" });
//   }

//   // Naye user ko list me add karo
//   users.push(newUser);

//   // File me updated user list save karo
//   saveUsersToFile(users);

//   // Success response bhejo
//   res.status(201).json({ message: "User added", user: newUser });
// });

// // ==============================
// // ✅ PUT API: Email ke base par user update karna
// // ==============================
// app.put("/user/:email", (req, res) => {
//   // URL se email nikalo
//   const email = req.params.email;

//   // Body se updated fields lo
//   const updatedData = req.body;

//   // File se user list load karo
//   let users = loadUsersFromFile();

//   // Email ke base par user ka index dhoondo
//   const index = users.findIndex((user) => user.email === email);

//   // Agar user nahi mila to error bhejo
//   if (index === -1) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   // Jo fields update hui hain sirf unhe update karo (purane data ko preserve karke)
//   users[index] = { ...users[index], ...updatedData };

//   // Updated data file me save karo
//   saveUsersToFile(users);

//   // Success response bhejo
//   res.json({ message: "User updated", user: users[index] });
// });

// // ==============================
// // ✅ GET API: Sare users fetch karne ke liye
// // ==============================
// // app.get("/user", (req, res) => {
// //   // File se user data load karo
// //   const users = loadUsersFromFile();

// //   // User list client ko bhejo
// //   res.json(users);
// // });

// // ==============================
// // 🟢 Server Start kar do
// // ==============================
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });


// Delete Api Start 

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


// Delete Api end



// live form updated data

// // 📦 Express framework import kiya (server banane ke liye)
// const express = require("express");

// // 📁 File system module import kiya (file read/write ke liye)
// const fs = require("fs");

// // 📂 Path module import kiya (file ka exact path banane ke liye cross-platform tarike se)
// const path = require("path");

// // 🔑 CORS middleware import karo (Cross-Origin requests allow karne ke liye)
// const cors = require("cors");

// // 🚀 Express app initialize kiya
// const app = express();

// // 🔢 Port define kiya (yahan local server 4000 pe chalega)
// const PORT = 4000;

// // 🧠 Middleware: CORS enable karo taaki frontend jo alag port pe hai usse request allow ho jaye
// app.use(cors());

// // 🧠 Middleware: Ye line JSON body ko automatically parse karegi (req.body use karne ke liye zaroori)
// app.use(express.json());

// // 📁 JSON file ka path banaya (isi file me user data store hoga)
// const filePath = path.join(__dirname, "./data.json");

// // ==============================
// // 📥 Function: JSON file se data read karna
// // ==============================
// const loadUsersFromFile = () => {
//   try {
//     if (fs.existsSync(filePath)) {
//       const data = fs.readFileSync(filePath, "utf8");
//       return data ? JSON.parse(data) : [];
//     } else {
//       return [];
//     }
//   } catch (err) {
//     console.error("Read Error:", err);
//     return [];
//   }
// };

// // ==============================
// // 💾 Function: JSON file me data save karna
// // ==============================
// const saveUsersToFile = (users) => {
//   try {
//     fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
//   } catch (err) {
//     console.error("Write Error:", err);
//   }
// };

// // ==============================
// // ✅ POST API: Naya user add karne ke liye
// // ==============================
// app.post("/user", (req, res) => {
//   const { name, email, phone, city } = req.body;
//   const newUser = { name, email, phone, city };

//   const users = loadUsersFromFile();

//   const isExist = users.some((user) => user.email === email);
//   if (isExist) {
//     return res.status(400).json({ message: "Email already exists" });
//   }

//   users.push(newUser);

//   saveUsersToFile(users);

//   res.status(201).json({ message: "User added", user: newUser });
// });

// // ==============================
// // ✅ PUT API: Email ke base par user update karna
// // ==============================
// app.put("/user/:email", (req, res) => {
//   const email = req.params.email;
//   const updatedData = req.body;

//   let users = loadUsersFromFile();

//   const index = users.findIndex((user) => user.email === email);
//   if (index === -1) {
//     return res.status(404).json({ message: "User not found" });
//   }

//   users[index] = { ...users[index], ...updatedData };

//   saveUsersToFile(users);

//   res.json({ message: "User updated", user: users[index] });
// });

// // ==============================
// // ✅ GET API: Sare users fetch karne ke liye
// // ==============================
// app.get("/user", (req, res) => {
//   const users = loadUsersFromFile();
//   res.json(users);
// });

// // ==============================
// // 🟢 Server Start kar do
// // ==============================
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
