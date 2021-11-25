import mongoose, { Schema } from "mongoose";

const PriceSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: String,
    },
  },
  { timestamps: true }
);

const CourierSchema: Schema = new mongoose.Schema(
  {
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    postal_code: {
      type: String,
    },
    prices: {
      type: [PriceSchema],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Courier", CourierSchema);
