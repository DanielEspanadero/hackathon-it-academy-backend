import dotenv from 'dotenv';

const envFound = dotenv.config();
if (envFound.error) {
    // This error should crash whole process
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
};

export default {
    port: parseInt(process.env.PORT as string, 3000),
    databaseURL: process.env.MONGODB_URI,
    
};