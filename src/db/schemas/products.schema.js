import Joi from "joi";

const id = Joi.number().integer();
const name = Joi.string().min(3).max(50);
const description = Joi.string().min(10).max(200);
const price = Joi.number().integer().min(0);
const stock = Joi.number().integer().min(0);
const state = Joi.boolean();

const limit = Joi.number().integer();
const offset = Joi.number().integer()

export const createProductSchema = Joi.object({
    name: name.required(),
    description: description.required(),
    price: price.required(),
    stock: stock.required(),
    state: state,
})

export const getProductSchema = Joi.object({
  id: id.required(),
});

export const updateProductSchema = Joi.object({
    name: name,
    description: description,
    price: price,
    stock: stock,
    state: state,
})

export const querySchema = Joi.object({
  limit, offset
})