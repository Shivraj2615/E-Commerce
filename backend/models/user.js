const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    cart: [
      {
        book: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Book",
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    wishlist: [
      {
        book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
