const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String,
    descripcion:String
});

const product = mongoose.model("product", productSchema)

module.exports = product;