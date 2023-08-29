require("dotenv").config()
const { PORT } = process.env;
const server = require("./src/app.js");
const connection = require("./src/db.js");



connection();
server.listen(PORT, () => {
    console.log("Servidor levantado con exito en el puerto", PORT);
});