import dotenv from 'dotenv';
dotenv.config();

export const configs = {
    port: process.env.PORT,
    mongodb: process.env.MONGO_URI
}
