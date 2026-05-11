const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
  {
    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true, 
      index: true // 🔥 fast queries per user
    },

    title: { 
      type: String, 
      required: true, 
      trim: true 
    },

    amount: { 
      type: Number, 
      required: true,
    },

    type: {
      type: String,
      enum: ["income", "expense"],
      required: true,
      default: "expense",
    },

    category: { 
      type: String, 
      enum: [
        "Food", 
        "Entertainment", 
        "Travel", 
        "Shopping",
        "Health",
        "Education",
        "Rent",
        "Savings", 
        "Utilities",
        "Salary",
        "Freelance",
        "Investment",
        "Others"
      ], 
      default: "Others", 
      trim: true 
    },

    note: { 
      type: String, 
      default: "", 
      trim: true 
    },

    tags: [{ 
      type: String, 
      trim: true 
    }],

    date: { 
      type: Date, 
      default: Date.now, 
      index: true // 🔥 useful for sorting/filtering
    },
  },
  { 
    timestamps: true 
  }
);

module.exports = mongoose.model("Transaction", TransactionSchema);
