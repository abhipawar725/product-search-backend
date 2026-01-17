import dotenv from "dotenv"
import express from "express"
import cors from "cors"
dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is live 🚀");
});

// NORMAL SEARCH (NO DEBOUNCE YET)
// app.get("/api/search", (req, res) => {
//   const q = req.query.q?.toLowerCase() || "";

//   const result = products.filter(p =>
//     p.name.toLowerCase().includes(q)
//   );

//   res.json(result);
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
