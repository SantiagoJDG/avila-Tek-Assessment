import { Router } from "express";
import validatorHandler from "../middleware/validator.handler.js";
import {
  createOrderDetailSchema,
  getProductSchema,
} from "../db/schemas/orderDetail.schema.js";
import OrdersDetailService from "../services/ordersDetail.service.js";
import passport from "passport";

const ordersDetailRouter = Router();
const service = new OrdersDetailService();

ordersDetailRouter.get("/", async (req, res, next) => {
  try {
    const orders = await service.getOrdersDetail();
    res.json(orders);
  } catch (error) {
    next(error);
  }
});

ordersDetailRouter.get(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const orders = await service.getOrderDetailById(id);
      res.json(orders);
    } catch (error) {
      next(error);
    }
  }
);

ordersDetailRouter.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  validatorHandler(createOrderDetailSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newOrder = await service.createOrderDetail(body);
      res.json(newOrder);
    } catch (error) {
      next(error);
    }
  }
);

export default ordersDetailRouter;
