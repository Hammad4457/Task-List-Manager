import express from "express";
const router = express.Router();
import * as taskController from "../controllers/tasksController.js";
import { AuthenticateToken } from "../Middlewares/AuthenticateToken.js";
import upload from "../config/multer.js";
router.use(AuthenticateToken);
// Get all tasks
router.get("/", taskController.getAllTasks);

// Get a single task by ID
router.get("/:id", taskController.getTaskById);

// Create a new task
router.post(
  "/addTasks",
  upload.single("attachment"),
  taskController.createTask
);

// Update a task by ID
router.put("/:id", taskController.updateTask);

// Delete a task by ID
router.delete("/:id", taskController.deleteTask);

export default router;
