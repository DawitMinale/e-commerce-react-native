const Order=require("../models/Order")


module.exports={

    getUserOrders:async(req,res)=>{
        try {
            const orders=await Order.find({userId:req.params.userId}).populate(
                {
                   path: "productId",
                     select: "-description -product_location"
                }
            
            ).exec()
            res.status(200).json(orders)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}