var admin = require("firebase-admin");

const config = require("../../config/app-config");

admin.initializeApp({
  credential: admin.credential.cert(config.firebase.certConfig),
});

const auth = admin.auth();

module.exports = {
  auth: auth,
  admin: admin,
};
