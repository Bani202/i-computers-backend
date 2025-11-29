import express from "express"
import mongoose from "mongoose"
import userrouter from "./routes/userrouter.js"
import productrouter from "./routes/productrouter.js"
import jwt from "jsonwebtoken"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const mongoURI = process.env.MONGO_URL
mongoose.connect(mongoURI).then(
    ()=>{
        console.log("database conected")
    }
)

const app = express()

app.use(cors())

app.use(express.json())

app.use(
    (req,res,next )=>{
        const authorizationHeader  = req.header("Authorization")

        if(authorizationHeader != null){
           
            const token = authorizationHeader.replace("Bearer ","")
            

            jwt.verify(token,process.env.JWT_SECRET,
                (error, content)=>{

                    if(content == null){

                        console.log("invalid token")

                        res.json({
                            message : "invalid token"
                        })

                    }else{
                        
                        req.user = content

                        next()
                    }
                }
            )


        }else{
             next()
        }
           

})


app.use("/api/user",userrouter)
app.use("/api/product",productrouter)


app.listen(5000 , 
    ()=>{
        console.log("server is running")
    }
)