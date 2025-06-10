import mongoose, { Document, Schema } from "mongoose";

export interface IBooking extends Document {
    userId: mongoose.Schema.Types.ObjectId;
    Date: Date;
    Time: String;
    Department: String;
    Event: String;
    FacultyIncharge: String;
    Hall: String;
    email: String;
    status: String;
    createdAt: String;
    updatedAt: String;
}

const BookingSchema: Schema<IBooking> = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
    },
    Date: {
        type: Date,
        required: true
    },
    Time: {
        type: String,
        required: true
    },
    Department: {
        type: String,
        required: true,
    },
    Event: {
        type: String,
        required: true
    },
    FacultyIncharge: {
        type: String,
        required: true
    },
    Hall: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
}, { timestamps: true })

const BookingModel = mongoose.models.Booking || mongoose.model("Booking", BookingSchema);

export default BookingModel;