import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const categoriesSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        unique: true
    },
    index: {
        type: Number,
        required: true
    }
}, { timestamps: true });

categoriesSchema.plugin(mongooseAggregatePaginate)

export const Category = mongoose.model("Category", categoriesSchema);