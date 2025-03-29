import mongoose from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";

const devSchema = new mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    username: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    avatar: {
        type: String,   
        required: true
    },
    link: {
        type: String,
    }
}, { timestamps: true });

devSchema.plugin(aggregatePaginate)

export const Dev_daily = mongoose.model("daily_trending_dev", devSchema)
export const Dev_weekly = mongoose.model("weekly_trending_dev", devSchema)
export const Dev_monthly = mongoose.model("monthly_trending_dev", devSchema)