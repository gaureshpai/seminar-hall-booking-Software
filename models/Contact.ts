import mongoose, {Document, Schema} from "mongoose"

export interface IContact extends Document {
    userId: mongoose.Schema.Types.ObjectId;
    name: string;
    email: string;
    subject: string;
    message: string;
    createdAt: Date;
}

export interface IContactClient {
  _id: string;
  userId: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

const ContactSchema : Schema<IContact> = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true
    },
}, {timestamps: true})

const ContactModel = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export default ContactModel;