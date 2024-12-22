import express from "express";
import rateLimit from "express-rate-limit";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World from dilip ");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
