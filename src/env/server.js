// import express from "express";
// import pg from "pg";
// import dotenv from "dotenv";
// import bcrypt from "bcrypt";
// import session from "express-session";
// import cors from "cors";

// dotenv.config();
// const app = express();

// app.use(express.json());
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// // Session setup
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: false }, // ubah ke true jika pakai HTTPS
//   })
// );

// // PostgreSQL connection
// const { Pool } = pg;
// const pool = new Pool({
//   host: process.env.PG_HOST,
//   port: process.env.PG_PORT,
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   database: process.env.PG_DATABASE,
// });

// // 🔹 REGISTER USER
// app.post("/api/register", async (req, res) => {
//   const { username, email, password } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const result = await pool.query(
//       "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id",
//       [username, email, hashedPassword]
//     );

//     res.json({ message: "User registered successfully", user_id: result.rows[0].id });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Registration failed" });
//   }
// });

// // 🔹 LOGIN USER
// app.post("/api/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
//     if (result.rows.length === 0) {
//       return res.status(401).json({ error: "Email not found" });
//     }

//     const user = result.rows[0];
//     const validPassword = await bcrypt.compare(password, user.password);
//     if (!validPassword) {
//       return res.status(401).json({ error: "Invalid password" });
//     }

//     // Simpan session
//     req.session.user = { id: user.id, username: user.username, email: user.email };
//     res.json({ message: "Login successful", user: req.session.user });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Login failed" });
//   }
// });

// // 🔹 LOGOUT USER
// app.post("/api/logout", (req, res) => {
//   req.session.destroy(() => {
//     res.json({ message: "Logout successful" });
//   });
// });

// // 🔹 CEK SESSION LOGIN
// app.get("/api/check-session", (req, res) => {
//   if (req.session.user) {
//     res.json({ loggedIn: true, user: req.session.user });
//   } else {
//     res.json({ loggedIn: false });
//   }
// });

// // Jalankan server
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`✅ Server running at http://localhost:${PORT}`);
// });






import express from "express";
import cors from "cors";
import pkg from "pg";

const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "syga120705",
  port: 5432,
});

app.get("/", async (req, res) => {
  res.send("API is running");
});

app.listen(3001, () => console.log("API running on http://localhost:3001"));
