const express=require('express')
const orderController=require("../controllers/Order")
const { verifyToken, verifyAdmin } = require('../middleware/VerifyToken')
const router=express.Router()


router
    .post("/",orderController.create)
    .get("/",verifyToken,verifyAdmin,orderController.getAll)
    .get("/user/:id",orderController.getByUserId)
    .patch("/:id",verifyToken,verifyAdmin,orderController.updateById)


module.exports=router
