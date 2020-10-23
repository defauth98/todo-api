import { Router } from "express";
import TodoController from "./Controllers/TodoController";

const todoController = new TodoController();

const routes = Router();

routes.post("/todos", todoController.create);
routes.get("/todos", todoController.index);
routes.put("/todos/:id", todoController.update);
routes.delete("/todos/:id", todoController.delete);

export default routes;
