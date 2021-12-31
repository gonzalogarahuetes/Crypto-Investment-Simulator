const db = require("../models");

async function getAllUsers(req, res, next) {
  try {
    const dbRes = await db.User.find({});

    res.status(200).send({
      success: true,
      data: dbRes,
    });
  } catch (err) {
    next(err);
  }
}

async function getSingleUser(req, res, next) {
  try {
    const { userId } = req.params;

    const dbRes = await db.User.find({
      _id: userId,
    });

    res.status(200).send({
      success: true,
      data: dbRes,
    });
  } catch (err) {
    next(err);
  }
}

async function createUser(req, res, next) {
  try {
    const newUser = req.body;

    const dbRes = await db.User.create(newUser);

    res.status(201).send({
      success: true,
      message: "User created",
      data: dbRes,
    });
  } catch (err) {
    next(err);
  }
}

async function updateUser(req, res, next) {
  try {
    const { userId } = req.params;

    const newData = req.body;

    const dbRes = await db.User.findOneAndUpdate(userId, newData, {
      new: true,
    });

    res.status(200).send({
      success: true,
      message: "User updated",
      data: dbRes,
    });
  } catch (err) {
    next(err);
  }
}

async function deleteUser(req, res, next) {
  try {
    const { userId } = req.params;

    const dbRes = await db.User.findOneAndDelete({
      _id: userId,
    });

    res.status(200).send({
      success: true,
      message: "User deleted",
      data: dbRes,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
