import mongoose from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";

const repoSchema = new mongoose.Schema({
    author: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    title: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    description: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    link: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        lowercase: true,
        trim: true
    },
    stars: {
        type: String,
        required: true
    },
    forks: {
        type: String,
        required: true
    },
    current_period_stars: {
        type: String,
        required: true
    },
    builtBy: [{
        name: {
            type: String,
            lowercase: true,
            trim: true
        },
        username: {
            type: String,
            lowercase: true,
            trim: true
        },
        link: {
            type: String,
        }
    }]
}, { timestamps: true });

repoSchema.plugin(aggregatePaginate)

export const Repo_daily = mongoose.model("daily_trending_repo", repoSchema);
export const Repo_weekly = mongoose.model("weekly_trending_repo", repoSchema);
export const Repo_monthly = mongoose.model("monthly_trending_repo", repoSchema);