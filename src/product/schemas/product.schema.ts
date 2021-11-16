import { Schema } from 'mongoose';

const ProductSchema = new Schema(
  {
    name: String,
    description: String,
    price: Number,
    quantity: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
export default ProductSchema;
