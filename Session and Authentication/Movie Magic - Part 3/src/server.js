const express = require("express");
const { router } = require("./config/router");
const { hbsConfig } = require("./config/handelbars");
const { expressConfig } = require("./config/express");
const { main } = require("./config/mongoose");
const { sessionConfig } = require("./config/session");

async function start() {
    await main();
    let app = express();
    hbsConfig(app);
    expressConfig(app);
    sessionConfig(app);

    app.use(router);
    app.listen(3000, () => {
        console.log("server is listening on port 3000...");
    });
}

start();