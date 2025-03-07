import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

// Define the schema for the timeline data (structure of each entry in timeline_data array)
const timelineDataSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  }, 
  timestamp: {
    type: String,  // Store the timestamp as Date
    required: true,
  },
  values: [
    {
      value: String,
      extracted_value: Number
    }
  ]
}, { _id: false }); // Avoid creating a separate _id for each timeline entry

// Define the main Interest Schema
const interestSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category", // Reference to Categories collection
    required: true,
  },
  engine: {
    type: String,
    required: true,
  },
  timeline_data: {
    type: [timelineDataSchema],  // Using the timelineDataSchema to structure the data
    required: true,
  },
  data_type: {
    type: String,
    required: true,
  }
}, { timestamps: true }); // Automatically add createdAt and updatedAt timestamps

interestSchema.plugin(mongooseAggregatePaginate)

// Export the model
export const Interest = mongoose.model("Interest", interestSchema);
