import Joi from "joi";

const id = Joi.number().integer();
const id_user = Joi.number().integer();
const createdDate = Joi.date();

export const createOrderSchema = Joi.object({
    id: id_user.required(),
})

export const getOrderSchema = Joi.object({
  userId: id_user.required(),
});