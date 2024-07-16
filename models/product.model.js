import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Supplier from "./supplier.model.js";

const Product = db.define(
  "products",
  {
    productId: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    value: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    stock: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  { underscored: true } //informar que o banco esta trabalhando com underline ao invés de camelCase(que é o padrão so sequelize)
);

Product.belongsTo(Supplier, { foreignKey: "supplierId" });

export default Product;
