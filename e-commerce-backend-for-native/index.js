const express = require('express')
const app = express()
const mongoose=require("mongoose")

const dotenv=require("dotenv")
const port = 3000
const productRouter=require('./routes/Products')
const authRouter=require("./routes/Auth")
const userRouter=require("./routes/User")
const orderRouter=require("./routes/Order")
const cartRouter=require("./routes/Cart")
const cors = require('cors');


app.use(cors());

dotenv.config()

app.use(express.json({limit:"10mb"}))
app.use(express.urlencoded({limit:"10mb",extended:true}))
app.use("/api/products",productRouter)
app.use("/api",authRouter)
app.use("/api/users",userRouter)
app.use("/api/carts",cartRouter)
app.use("/api/orders",orderRouter)




mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log(err)
})
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${process.env.PORT}!`))