import express from "express"
import mongoose from "mongoose"
import userrouter from "./routes/userrouter.js"
import productrouter from "./routes/productrouter.js"
import jwt from "jsonwebtoken"

const mongoURI = "mongodb+srv://nipunab320:niPu123@cluster0.zwrtiur.mongodb.net/Nipuna?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongoURI).then(
    ()=>{
        console.log("database conected")
    }
)

const app = express()

app.use(express.json())

app.use(
    (req,res,next )=>{
        const authorizationHeader  = req.header("Authorization")

        if(authorizationHeader != null){
           
            const token = authorizationHeader.replace("Bearer ","")
             console.log(token);
            

            /*jwt.verify(token, "secretkey#123",
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
            )*/


        }else{
             next()
        }
           

})


app.use("/User",userrouter)
app.use("/Product",productrouter)


app.listen(5000 , 
    ()=>{
        console.log("server is running")
    }
)