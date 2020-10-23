import { Sequelize } from "sequelize";

const db = new Sequelize("postgres://postgres:@localhost:5432/todo-api");

export default db;
