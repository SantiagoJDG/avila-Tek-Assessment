import { Op } from "sequelize";
import { sequelize } from "../config/libs/sequelize.js";
import { notFound } from "@hapi/boom";

class ProductService {

  async getProducts(req) {
    const { limit, offset } = req.query;
    const query = (limit && offset)
      ? {limit, offset}
      : false
    const response = await sequelize.models.Product.findAll(query ? query : {});
    return response;
  }

  async getAvailableProducts() {
    const response = await sequelize.models.Product.findAll({
      where: {
        stock: {
          [Op.gt]: 0,
        },
      },
    });
    return response;
  }

  async getProductById(id) {
    const product = await sequelize.models.Product.findByPk(id);
    if (!product) {
      throw notFound("product not found");
    }
    return product;
  }

  async createProduct(productData) {
    const newProduct = await sequelize.models.Product.create(productData);
    return newProduct;
  }

  async updateProduct(id, productData) {
    const product = await this.getProductById(id);
    const response = product.update(productData);
    return response;
  }

  async deleteProduct(id) {
    const product = await this.getProductById(id);
    const response = product.destroy();
    return response;
  }
}

export default ProductService;
