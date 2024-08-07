import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "data.json");
const data = JSON.parse(fs.readFileSync(filePath));

// console.log(data.tasks);

app.listen(5000, () => {
  console.log("server is running on port 5000");
});

app.get("/toDoos", (req, res) => {
  res.send(data.tasks);
});

// const d = {
//   ...data,
//   task3: {
//     name: "sport",
//     date: 10,
//   },
// };

// fs.writeFileSync(filePath, JSON.stringify(d));
