import { User, UserSchema } from "./user.model.js";
import { Product, ProductSchema } from "./product.model.js";
import { Order, OrderSchema } from "./order.model.js";
import { OrderDetail, OrderDetailSchema } from "./orderDetail.model.js";

export const setUpModels = (sequelize) => {

    Product.init(ProductSchema, Product.config(sequelize));
    User.init(UserSchema, User.config(sequelize));
    Order.init(OrderSchema, Order.config(sequelize));
    OrderDetail.init(OrderDetailSchema, OrderDetail.config(sequelize));

    User.associate(sequelize.models);
    Order.associate(sequelize.models);

}
