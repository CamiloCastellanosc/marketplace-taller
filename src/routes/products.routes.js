const { Router } = require("express");
const router = Router();
const product = require("../models/product");





router.get("/", async(req, res) =>{
    try {
        const allProducts = await product.find()
        // console.log(allProducts);
        res.status(200).json(allProducts);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
});


router.post("/", async (req, res) => {
    try {
        const { title, descripcion } = req.body;

        await product.create({ title:title, descripcion:descripcion});

        res.status(200).json("Producto creado con exito 🛒🛒")
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message})
    }
})




module.exports = router;