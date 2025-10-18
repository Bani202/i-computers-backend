import exprees from "express";
import { createProduct, deleteProduct, getallProducts, getProductByID, updateProduct } from "../controllers/productcontroller.js";
import { get } from "mongoose";

const productrouter = exprees.Router();

productrouter.get("/",getallProducts)
productrouter.get("/treanding", (req,res)=>{
    res.json(
        {message : "treanding product endpoint"}
    )
})
productrouter.post("/",createProduct)

productrouter.get("/:productID",getProductByID)

productrouter.delete("/:prductID",deleteProduct)

productrouter.put("/:productID",updateProduct)

export default productrouter;