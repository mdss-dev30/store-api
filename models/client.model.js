import Sequelize from "sequelize";
import db from "../repositories/db.js";

const Client = db.define(
  "clients",
  {
    clientId: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,

      allowNull: false,
    },
  },
  { underscored: true } //informar que o banco esta trabalhando com underline ao invés de camelCase(que é o padrão so sequelize)
);

export default Client;
