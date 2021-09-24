const db = require("mongoose");

db.Promise = global.Promise;
const connect = async (url) => {
  try {
    await db.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("[db] Connected!");
  } catch (e) {
    console.error(`[bd] ${e}`);
  }
};

module.exports = connect;
