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

app.listen(5000, () => {
  console.log("server is running on port 5000");
});

// fetching tasks
app.get("/toDoos", (req, res) => {
  return res.send(data.tasks);
});

// adding new task
app.post("/addTodo", (req, res) => {
  if (!req.body)
    return res.status(400).json({ message: "Please Enter details" });
  const newTask = {
    tasks: [...data.tasks, req.body],
  };
  fs.writeFileSync(filePath, JSON.stringify(newTask));
  return res.send(newTask.tasks);
});

// removing completed task

app.delete("/complete/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const updatedTasks = {
    tasks: data.tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: true } : task
    ),
  };
  fs.writeFileSync(filePath, JSON.stringify(updatedTasks));
  return res.send(updatedTasks.tasks);
});

// deleting tasks

app.delete("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const updatedTasks = {
    tasks: data.tasks.map((task) =>
      task.id === id ? { ...task, isDeleted: true } : task
    ),
  };

  fs.writeFileSync(filePath, JSON.stringify(updatedTasks));
  return res.send(updatedTasks.tasks);
});

// updating edited tasks

app.patch("/updateTask/:id", (req, res) => {
  if (!req.body)
    return res.status(400).send({ message: "Please enter the details" });
  const id = parseInt(req.params.id);

  const updatedTasks = {
    tasks: data.tasks.map((t) => (t.id === id ? req.body : t)),
  };

  fs.writeFileSync(filePath, JSON.stringify(updatedTasks));
  return res.send(updatedTasks.tasks);
});
