import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/recv", (req, res) => {
  const jsonData = JSON.stringify(req.body);

  console.log(`\n${jsonData}`);

  res.status(200).end();
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Listen... :${PORT}`);
});
