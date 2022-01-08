const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { json } = require("body-parser");
const cors = require("cors");
const config = require("./config/app-config");

const { UserRouter, WalletRouter } = require("./routes");
const { errorMiddleware, authMiddleware } = require("./middlewares");

const app = express();

app.use(json());
app.use(morgan("dev"));
app.use(helmet());
app.use(
  cors({
    origin: config.client.URL,
  })
);

app.use("/users", authMiddleware, UserRouter);
app.use("/wallets", WalletRouter);

app.get("/", (req, res) => {
  res.status(200).send({
    data: "working!",
  });
});

app.use(errorMiddleware);

module.exports = app;
