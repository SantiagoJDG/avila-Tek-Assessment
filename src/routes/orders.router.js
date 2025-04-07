import { Router } from "express";
import validatorHandler from "../middleware/validator.handler.js";
import {
  createOrderSchema,
  getOrderSchema,
} from "../db/schemas/order.schema.js";
import OrdersService from "../services/orders.service.js";
import passport from "passport";

const ordersRouter = Router();
const service = new OrdersService();

ordersRouter.get(
  "/",
  async (req, res, next) => {
    try {
      const orders = await service.getOrders();
      res.json(orders);
    } catch (error) {
      next(error);
    }
  }
);

ordersRouter.get(
  "/:id",
  validatorHandler(createOrderSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const orders = await service.getOrderById(id);
      res.json(orders);
    } catch (error) {
      next(error);
    }
  }
);

ordersRouter.get(
  "/user/:id",
  validatorHandler(createOrderSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const userOrders = await service.getOrdersByUserId(id);
      res.json(userOrders);
    } catch (error) {
      next(error);
    }
  }
);


ordersRouter.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  validatorHandler(getOrderSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newOrder = await service.createOrder(body);
      res.json(newOrder);
    } catch (error) {
      next(error);
    }
  }
);

export default ordersRouter;
