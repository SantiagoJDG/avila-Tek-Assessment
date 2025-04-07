import { Router } from 'express';
import validatorHandler from "../middleware/validator.handler.js";
import {
  createProductSchema,
  getProductSchema,
  updateProductSchema,
  querySchema,
} from "../db/schemas/products.schema.js";
import ProductService from "../services/product.service.js";
import passport from 'passport';

const productsRouter = Router();
const service = new ProductService();

productsRouter.get(
  "/",
  validatorHandler(querySchema, "query"),
  async (req, res) => {
    const products = await service.getProducts(req);
    res.json(products);
  }
);

productsRouter.get("/available",
  validatorHandler(querySchema, "query"),
  async (req, res, next) => {
  try {
    const category = await service.getAvailableProducts();
    res.json(category);
  } catch (error) {
    next(error);
  }
});

productsRouter.get(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.getProductById(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

productsRouter.post("/",
  passport.authenticate("jwt", { session: false }),
  validatorHandler(createProductSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProduct = await service.createProduct(body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  });

productsRouter.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  validatorHandler(getProductSchema, "params"),
  validatorHandler(updateProductSchema, "body"),
  async (req, res, next) => {

    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.updateProduct(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  
  }
);


productsRouter.delete(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  async (req, res, next) => {
    try {

      const { id } = req.params;
      await service.deleteProduct(id);
      res.status(201).json({ id });

    } catch (error) {

      next(error);

    }

  }
);



export default productsRouter;