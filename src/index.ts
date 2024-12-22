import express from "express";
import cors from "cors";
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World from dilip with cors ");
});

app.get("/name", (req, res) => {
  res.send("my name is dilip with typescript dist 12345678 ");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
