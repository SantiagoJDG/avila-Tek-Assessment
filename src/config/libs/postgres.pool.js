import pg from 'pg';
import { config } from '../../config.js';

const { Pool } = pg;

const USER = encodeURIComponent(config.api.dbUser);
const PASSWORD = encodeURIComponent(config.api.dbPasswords);
const URI = `postgres://${USER}:${PASSWORD}@${config.api.dbHost}:${config.api.dbPort}/${config.api.dbName}`;

export const pool = new Pool({
  connectionString: URI,
}); 

