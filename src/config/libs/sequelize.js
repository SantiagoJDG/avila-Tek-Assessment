import { Sequelize } from "sequelize";
import { config } from '../../config.js';
import { setUpModels } from '../../db/models/index.js';

const USER = encodeURIComponent(config.api.dbUser);
const PASSWORD = encodeURIComponent(config.api.dbPasswords);
const URI = `postgres://${USER}:${PASSWORD}@${config.api.dbHost}:${config.api.dbPort}/${config.api.dbName}`;

export const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    logging: true
})

setUpModels(sequelize);
sequelize.sync()