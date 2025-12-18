import mongoose from "mongoose";

const productschema = new mongoose.Schema(
    {
        productID : {
            type : String,
            requried : true,
            unique : true
        },
        name : {
            type : String,
            required : true
        },
        altnames : {
            type : [String],
            default : []
        },
        description : {
            type : String,
            required : true
        },
        price : {
            type : Number,
            required : true
        },
        labeledprice : {
            type : Number,
            requried : true
        },
        images : {
            type : [String],
            required : true
        },
        category : {
            type : String,
            requried : true
        },
        brand : {
            type : String,
            required :true,
            default :"No brand"
        },
        stock : {
            type : Number,
            required : true,
            default : 0
        },
        isavailable : {
            type : Boolean,
            default : true
        }
    }
)

const Product = mongoose.model("Product",productschema)

export default Product;