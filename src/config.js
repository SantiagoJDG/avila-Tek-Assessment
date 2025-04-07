import dotenv from 'dotenv';
dotenv.config();

export const config = {
  api: {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || "dev",
    dbUser: process.env.DB_USER,
    dbPasswords: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
    jwtSecret: process.env.JWT_SECRET,
  },
};