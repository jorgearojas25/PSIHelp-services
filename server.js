const cool = require("cool-ascii-faces");
const express = require("express");
const app = express();
const server = require("http").Server(app);
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./network/routes");
const db = require("./db");
const config = require("./config");

//! instance for database connection, in case use any other change the implementation in ./db if needs
//* this project use mongo atlas
db(
  `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`
);

//TODO: update this
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

router(app);

//route fot static elements like OpenAPI documentation for the BE
app.use(`${config.publicRoute}`, express.static("public"));

//route for test this service
app.get("/cool", (req, res) => {
  res.send(cool());
});
//route for test the correct charge of enviroment variables
app.get("/testENV", (req, res) => {
  res.send(`${config.test}`);
});

//config, you can add "/${version}" if nedeed
server.listen(config.port, () => {
  console.log(`App is working on ${config.host}:${config.port}`);
});
