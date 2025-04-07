import Joi from "joi";


const id = Joi.number().integer();
const id_order = Joi.number().integer();
const id_product = Joi.number().integer();
const quantity = Joi.number().integer();

export const createOrderDetailSchema = Joi.object({
  orderId: id_order.required(),
  productId: id_product.required(),
  quantity_product: quantity.required(),
});

export const getProductSchema = Joi.object({
  id: id.required(),
});