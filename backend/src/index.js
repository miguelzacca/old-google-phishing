import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/recv", (req, res) => {
  const data = JSON.stringify(req.body);
  const log = `\n${data}\n`;

  fs.appendFile("./logs/output.log", log, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log(`\nlog++`);
  });

  res.sendStatus(200);
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Listen... :${PORT}`);

  fs.writeFile("./logs/output.log", "", (err) => {
    if (err) {
      console.error(err);
    }
  });
});
