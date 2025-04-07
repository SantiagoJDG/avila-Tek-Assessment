import { Model, DataTypes, Sequelize } from "sequelize";
import { ORDER_TABLE } from "./order.model.js";
import { PRODUCT_TABLE } from "./product.model.js";

export const ORDER_DETAIL_TABLE = 'order_details';

export const OrderDetailSchema = {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  orderId: {
    field: "order_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ORDER_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  productId: {
    field: "product_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCT_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  quantity_product: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdDate: {
    type: DataTypes.DATE,
    allowNull: false,
    field: "created_date",
    defaultValue: Sequelize.NOW,
  },
};

export class OrderDetail extends Model {
  static associate(models) {
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_DETAIL_TABLE,
      modelName: "OrderDetail",
      timestamps: false,
    };
  }
}
