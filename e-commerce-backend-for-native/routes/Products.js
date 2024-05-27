const router=require("express").Router()

const {createProduct,getAllProduct,getProduct,searchProduct}=require("../controllers/ProductsController")


router.post("/",createProduct)
router.get("/",getAllProduct)
router.get("/:id",getProduct)
router.get("/search/:key",searchProduct)



module.exports=router