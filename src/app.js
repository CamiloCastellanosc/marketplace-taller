const express = require("express");
const server = express()
server.name = "Protalento B7 mongo"


server.use(express.urlencoded({extended:false}));
server.use(express.json());


const routes = require("./routes/index.routes");
server.use("/", routes);


require("./db.js");

module.exports = server;