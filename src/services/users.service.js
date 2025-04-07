import { sequelize } from "../config/libs/sequelize.js";
import { notFound } from "@hapi/boom";
import bcrypt from "bcrypt";

class UsersService {
    
    async getAllUsers() {
        return await sequelize.models.User.findAll();
    }
    
    async getUserById(id) {
        const user = await sequelize.models.User.findByPk(id);
        if (!user) {
          throw notFound("User not found");
        }
        return user;
    }

    async getUserByEmail(email) {
        const user = await sequelize.models.User.findOne({
            where: {
                email
            }
        });
        if (!user) {
          throw notFound("User not found");
        }
        return user;
    }

    async getUserById(id) {
        const user = await sequelize.models.User.findByPk(id);
        if (!user) {
          throw notFound("User not found");
        }
        return user;
    }
    
    async createUser(userData) {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const newUser = await sequelize.models.User.create({
            ...userData,
            password: hashedPassword
        });
        delete newUser.dataValues.password
        return newUser;
    }
    
    async updateUser(id, userData) {
        const user = await this.getUserById(id);
        const response = user.update(userData);
        return response;
    }
    
    async deleteUser(id) {
        const user = await this.getUserById(id);
        const response = user.destroy(userData);
        return response;
    }
    
}

export default UsersService;