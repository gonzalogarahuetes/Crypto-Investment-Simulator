const Router = require("express").Router;

const WalletController = require("../controllers/wallet-controller");

const WalletRouter = Router();

WalletRouter.get("/", WalletController.getAllWallets);

WalletRouter.get("/:walletId", WalletController.getSingleWallet);

WalletRouter.post("/", WalletController.createWallet);

WalletRouter.patch("/:walletId", WalletController.updateWallet);

WalletRouter.delete("/:walletId", WalletController.deleteWallet);

module.exports = WalletRouter;
