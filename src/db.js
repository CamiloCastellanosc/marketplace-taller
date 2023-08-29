const { Mongoose, default: mongoose } = require("mongoose")
require("dotenv").config();
const { URI_MONGO } = process.env;


module.exports = ()=> {
    mongoose.connect(
        URI_MONGO
    )
    .catch((e) => console.log("Error de conexion con el servidor de mongo 😵", e));
};


