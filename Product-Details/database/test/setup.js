// import MongoMemoryServer from "mongodb-memory-server";

// const path = require("path");
// const fs = require("fs");

// const globalConfigPath = path.join(__dirname, "globalConfig.json");

// const mongoServer = new MongoMemoryServer({
//   autoStart: false
// });

// module.exports = async () => {
//   if (!mongoServer.isRunning) {
//     await mongoServer.start();
//   }
//   const mongoConfig = {
//     mongoDBName: "jest",
//     mongoUri: await mongoServer.getConnectionString()
//   };

//   // Write global config to disk because all tests run in different contexts.
//   fs.writeFileSync(globalConfigPath, JSON.stringify(mongoConfig));

//   // Set reference to mongod in order to close the server during teardown.
//   global.__MONGOD__ = mongoServer;
// };
