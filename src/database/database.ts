import { Sequelize } from "sequelize";

const db = new Sequelize("postgres://postgres:docker@localhost:5432/todoapi");

export default db;
