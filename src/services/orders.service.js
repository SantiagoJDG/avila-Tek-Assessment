import { sequelize } from "../config/libs/sequelize.js";
import { notFound } from "@hapi/boom";

class OrdersService {
  async getOrderById(id) {
    const order = await sequelize.models.Order.findByPk(id, {
      include: [
        "user",
        {
          association: "productsOrder",
        },
      ],
    });
    if (!order) {
      throw notFound("Order not found");
    }
    return order;
  }

  async getOrders() {
    const response = await sequelize.models.Order.findAll({
      include: ["user", "productsOrder"],
    });

    return response;
  }

  async createOrder(orderData) {
    const newOrder = await sequelize.models.Order.create(orderData);
    return newOrder;
  }

  async getOrdersByUserId(userId) {
    const orders = await sequelize.models.Order.findAll({
      where: { user_id: userId },
      include: ["productsOrder", "user"],
    });

    if (!orders || orders.length === 0) {
      throw notFound("No orders found for this user");
    }

    return orders;
  }
}

export default OrdersService;
