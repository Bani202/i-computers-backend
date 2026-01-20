import exprees from "express";
import { createProduct, deleteProduct, getallProducts, getProductByID, updateProduct } from "../controllers/productcontroller.js";

const productRouter = exprees.Router();

productRouter.get("/",getallProducts)
productRouter.get("/treanding", (req,res)=>{
    res.json(
        {message : "treanding product endpoint"}
    )
})
productRouter.post("/",createProduct)

productRouter.get("/:productID",getProductByID)

productRouter.delete("/:productID",deleteProduct)

productRouter.put("/:productID",updateProduct)

export default productRouter;