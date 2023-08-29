const { Router } = require("express");
const router = Router()
const users = require("./users.routes");
const products = require("../routes/products.routes");


router.get("/", (req, res) =>{
    res.send("la conexion salio exitosa")
});

router.use("/user", users);//localhost://3000/users
router.use("/products", products);//localhost://3000/products

module.exports = router;