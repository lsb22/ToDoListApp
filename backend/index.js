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

// fetching tasks
app.get("/toDoos", (req, res) => {
  res.send(data.tasks);
});

// adding new task
app.post("/addTodo", (req, res) => {
  if (!req.body)
    return res.status(400).json({ message: "Please Enter details" });
  const newTask = {
    tasks: [...data.tasks, req.body],
  };
  fs.writeFileSync(filePath, JSON.stringify(newTask));
  res.send(newTask.tasks);
});

// removing completed task

app.delete("/complete/:id", (req, res) => {
  const { id } = req.params;

  const updatedTasks = {
    tasks: data.tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: true } : task
    ),
  };

  fs.writeFileSync(filePath, JSON.stringify(updatedTasks));
  res.send(updatedTasks.tasks);
});

// deleting tasks

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  const updatedTasks = {
    tasks: data.tasks.map((task) =>
      task.id === id ? { ...task, isDeleted: true } : task
    ),
  };

  fs.writeFileSync(filePath, JSON.stringify(updatedTasks));
  res.send(updatedTasks.tasks);
});

// const d = {
//   ...data,
//   task3: {
//     name: "sport",
//     date: 10,
//   },
// };

// fs.writeFileSync(filePath, JSON.stringify(d));
