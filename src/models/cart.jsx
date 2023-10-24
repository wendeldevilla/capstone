import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    ProductID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  { timestamps: true }
);

const Cart = mongoose.models.Cart || mongoose.models("Cart", CartSchema);
export default Cart;
