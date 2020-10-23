import { Request, Response } from "express";
import Todos from "../Models/Todos";

export default class TodoController {
  async create(request: Request, response: Response) {
    const { name, done } = request.body;

    await Todos.create({ name, done });

    response.status(201).json({ message: "success" });
  }

  async index(request: Request, response: Response) {
    const todos = await Todos.findOne();
    response.json(todos);
  }
}
