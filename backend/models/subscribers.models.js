import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Subscribers = mongoose.model("Subscribers", subscriberSchema);
export default Subscribers;