import { Model, DataTypes, Sequelize } from "sequelize";

export const USER_TABLE = 'users';

export const UserSchema = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdDate: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_date',
        defaultValue: Sequelize.NOW
    }
}

export class User extends Model {
    static associate(models) {
        this.hasMany(models.Order, {
          as: "orders",
          foreignKey: "userId",
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false
        }
    }
}
