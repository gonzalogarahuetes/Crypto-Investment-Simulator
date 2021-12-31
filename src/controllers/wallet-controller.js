const db = require("../models");

async function getAllWallets(req, res, next) {
  try {
    const dbRes = await db.Wallet.find({});

    res.status(200).send({
      success: true,
      data: dbRes,
    });
  } catch (err) {
    next(err);
  }
}

async function getSingleWallet(req, res, next) {
  try {
    const { walletId } = req.params;

    const dbRes = await db.Wallet.find({
      _id: walletId,
    });

    res.status(200).send({
      success: true,
      data: dbRes,
    });
  } catch (err) {
    next(err);
  }
}

async function createWallet(req, res, next) {
  try {
    const newWallet = req.body;
    const dbRes = await db.Wallet.create(newWallet);

    res.status(201).send({
      success: true,
      message: "Wallet created",
      data: dbRes,
    });
  } catch (err) {
    next(err);
  }
}

async function updateWallet(req, res, next) {
  try {
    const { walletId } = req.params;
    const newData = req.body;

    dbRes = await db.Wallet.findOneAndUpdate(walletId, newData, { new: true });

    res.status(200).send({
      success: true,
      message: "Wallet updated",
      data: dbRes,
    });
  } catch (err) {
    next(err);
  }
}

async function deleteWallet(req, res, next) {
  try {
    const { walletId } = req.params;

    const dbRes = await db.Wallet.findOneAndDelete({
      _id: walletId,
    });

    res.status(200).send({
      success: true,
      message: "Wallet deleted",
      data: dbRes,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllWallets,
  getSingleWallet,
  createWallet,
  updateWallet,
  deleteWallet,
};
