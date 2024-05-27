const router=require("express").Router()
const CartController=require("../controllers/CartController")

router.post("/",CartController.addToCart)
router.get("/find/:id",CartController.getCart)
router.post("/quantity",CartController.decrementCartItem)
router.delete("/:cartItemId",CartController.deleteCartItem)



module.exports=router

