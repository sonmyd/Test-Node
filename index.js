const express = require("express");
const app = express();

const bodyParser = require("body-Parser");
const router = require("./network/routes");

app.use(bodyParser.json());

router(app);
const port = 3001;

app.listen(port);
