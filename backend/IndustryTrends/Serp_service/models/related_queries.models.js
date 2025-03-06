import mongoose from "mongoose";

const risingSchema = new mongoose.Schema({
    query: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    extracted_value: {
        type: Number,
        required: true
    }
}, { _id: false });

const topSchema = new mongoose.Schema({
    query: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    extracted_value: {
        type: Number,
        required: true
    }
}, { _id: false });

const relatedQuriesSchema = new mongoose.Schema({
    engine: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    rising: [],
    top: [],
    data_type: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const RelatedQuery = mongoose.model("RelatedQuery", relatedQuriesSchema);