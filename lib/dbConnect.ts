import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number;
}

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log('Already Connected to the database');
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {});
        connection.isConnected = db.connections[0].readyState;
        console.log('Database Connected Successfully');

    } catch (error) {
        console.error('Database connection Failed: ', error);
        throw new Error('Database connection failed')
    }
}

export default dbConnect;