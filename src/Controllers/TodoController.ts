import { Request, Response } from "express";
import { where } from "sequelize/types";
import Todos from "../Models/Todos";

export default class TodoController {
  async create(request: Request, response: Response) {
    const { name, done } = request.body;

    await Todos.create({ name, done });

    response.status(201).json({ message: "success" });
  }

  async index(request: Request, response: Response) {
    const todos = await Todos.findAll();
    response.json(todos);
  }

  async update(request: Request, response: Response) {
    const { name, done } = request.body;
    const { id } = request.params;

    await Todos.update(
      {
        name,
        done,
      },
      {
        where: { id },
      }
    );

    response.status(202).send();
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    await Todos.destroy({ where: { id } });

    response.send();
  }
}
