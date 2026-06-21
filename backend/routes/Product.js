const express=require('express')
const productController=require("../controllers/Product")
const { verifyToken, verifyAdmin } = require('../middleware/VerifyToken')
const router=express.Router()

router
    .post("/",verifyToken,verifyAdmin,productController.create)
    .get("/",productController.getAll)
    .get("/:id",productController.getById)
    .patch("/:id",verifyToken,verifyAdmin,productController.updateById)
    .patch("/undelete/:id",verifyToken,verifyAdmin,productController.undeleteById)
    .delete("/:id",verifyToken,verifyAdmin,productController.deleteById)

module.exports=router
