import { Model, DataTypes, Sequelize } from "sequelize";

export const PRODUCT_TABLE = "products";

export const ProductSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  createdDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_date',
      defaultValue: Sequelize.NOW
  }
}

export class Product extends Model {
  static associate(models) {
  }
  
  static config(sequelize) {
      return {
        sequelize,
        tableName: PRODUCT_TABLE,
        modelName: "Product",
        timestamps: false,
      };
  }
}
