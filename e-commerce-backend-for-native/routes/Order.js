const router=require("express").Router()
const orderController=require("../controllers/OrderController")


router.post("/:id",orderController.getUserOrders)



module.exports=router