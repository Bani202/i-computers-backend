import mongoose from "mongoose";

const userscehma = new mongoose.Schema(
    {
        email :{
            type : String,
            required : true,
            unique : true
        },
        firstname :{
            type : String,
            required : true
        },
        lastname :{
            type : String,
            required : true
        },
        password :{
            type : String,
            required : true
        },
        role :{
            type : String,
            default :"Customer"
        },
        isblocked :{
            type : Boolean,
            default : false
        },
        isemailverified :{
            type : Boolean,
            default : false
        },
        Image :{
            type : String,
            required : true,
            default : "/default.jpg"
        } 
    }   
)
const User = mongoose.model("User",userscehma)

export default User;