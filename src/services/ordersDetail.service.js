import { sequelize } from "../config/libs/sequelize.js";
import { notFound } from "@hapi/boom";

class OrdersDetailService {

  async getOrderDetailById(id) {
    const orderDetail = await sequelize.models.OrderDetail.findByPk(id);
    if (!orderDetail) {
      throw notFound("OrderDetail not found");
    }
    return orderDetail;
  }

  async getOrdersDetail() {
    return await sequelize.models.OrderDetail.findAll();
  }

  async createOrderDetail(orderDataDetail) {
    const newOrderDetail = await sequelize.models.OrderDetail.create(orderDataDetail);
    return newOrderDetail;
  }
}

export default OrdersDetailService;
