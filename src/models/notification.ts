import mongoose, { Schema } from "mongoose";

const NotificationSchema: Schema = new mongoose.Schema(
  {
    ref: {
      type: String,
    },
    title: {
      type: String,
    },
    paragraph: {
      type: String,
    },
    created_by: {
      type: String,
    },
    updated_by: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Notification", NotificationSchema);
