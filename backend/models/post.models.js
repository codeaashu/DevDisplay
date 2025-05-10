import mongoose from 'mongoose';
import aggregatePaginate from 'mongoose-aggregate-paginate-v2';

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    linkToProf: {
      type: String,
      required: true,
    },
    dateOfPost: {
      type: Date,
      required: true,
    },
    tags: [
      {
        type: String,
        lowercase: true,
        trim: true,
      },
    ],
    reactions: {
      type: String,
    },
    readTime: {
      type: String,
    },
  },
  { timestamps: true },
);

postSchema.plugin(aggregatePaginate);

export const Post_daily = mongoose.model('daily_trending_post', postSchema);
export const Post_weekly = mongoose.model('weekly_trending_post', postSchema);
export const Post_monthly = mongoose.model('monthly_trending_post', postSchema);
