const router=require("express").Router()
const UserController=require("../controllers/UserController")

router.delete("/:id",UserController.deleteUser)
router.get("/:id",UserController.getUser)



module.exports=router