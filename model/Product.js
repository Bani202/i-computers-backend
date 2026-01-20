import mongoose from "mongoose";

const productschema = new mongoose.Schema(
    {
        productID : {
            type : String,
            required : true,
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
            required : true
        },
        images : {
            type : [String],
            required : true
        },
        category : {
            type : String,
            required : true
        },
        model : {
            type : String,
            required : true,
            default : "Standed"
        },
        brand : {
            type : String,
            required :true,
            default :"Generic"
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