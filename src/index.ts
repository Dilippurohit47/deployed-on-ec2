import express from "express";
import cors from "cors";
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World from dilip with cors ");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
