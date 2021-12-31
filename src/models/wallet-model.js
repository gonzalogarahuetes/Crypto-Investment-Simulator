const mongoose = require("mongoose");

const WalletSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    currencies: {
      type: [
        {
          currency: {
            type: String,
            required: true,
          },
          amount: {
            type: Number,
            required: true,
          },
          id: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  },
  { timestamps: true }
);

const WalletModel = mongoose.model("wallet", WalletSchema);

module.exports = WalletModel;
