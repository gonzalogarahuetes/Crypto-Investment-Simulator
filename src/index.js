const app = require("./server");
const connect = require("./db/connect");
const config = require("./config/app-config");

(async function onServerInit() {
  await connect();
  app.listen(config.app.PORT, async () => {
    console.log("Server listening on http:localhost:4000");
  });
})();
