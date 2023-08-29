const { Router } = require("express");
const router = Router();
const user = require("../models/user");




router.get("/", async(req, res) =>{
    try {
        const allUsers = await user.find()
        console.log(allUsers);
        res.status(200).json(allUsers);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message})
    }
});


router.post("/", async (req, res) => {
    try {
        const { name, password } = req.body;

        await user.create({ name:name, password:password});

        res.status(200).json("Usuario creado con exito😁😁")
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message})
    }
})


 


module.exports = router;