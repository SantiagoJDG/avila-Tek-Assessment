import { Model, DataTypes, Sequelize } from "sequelize";
import { USER_TABLE } from "./user.model.js";

export const ORDER_TABLE = 'orders';

export const OrderSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    field: "user_id",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  createdDate: {
    type: DataTypes.DATE,
    allowNull: false,
    field: "created_date",
    defaultValue: Sequelize.NOW,
  },
};

export class Order extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: "user", foreignKey: "userId" });
    this.belongsToMany(models.OrderDetail, {
      as: "productsOrder",
      through: models.OrderDetail,
      foreignKey: "orderId",
      otherKey: "productId",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: "Order",
      timestamps: false,
    };
  }
}
