import mongoose, { Schema, Document } from 'mongoose'


export interface User extends Document {
    username: string;
    email: string;
    password: string;
    isAdmin: string;
}

const UserSchema: Schema<User> = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: String,
        default: "regular",
        enum: ["admin", "regular"]
    }
})

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema)

export default UserModel;