import exprees from "express";
import { createProduct, getallProducts, getProductByID } from "../controllers/productcontroller.js";

const productrouter = exprees.Router();

productrouter.post("/",createProduct)
productrouter.get("/",getallProducts)
productrouter.get("/",getProductByID)

export default productrouter;