import express from "express";
import productsRouter from "./products.router.js"; 
import usersRouter from "./users.router.js"; 
import ordersRouter from "./orders.router.js"; 
import ordersDetailRouter from "./ordersDetail.router.js"; 
import authRouter from "./auth.router.js";


const routerApi = (app) => {
  const router = express.Router();
  app.use("/api", router);

  router.use("/auth", authRouter);
  router.use("/products", productsRouter);
  router.use("/users", usersRouter);
  router.use("/orders", ordersRouter);
  router.use("/orders-detail", ordersDetailRouter);
};

export default routerApi;