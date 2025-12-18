import Product from "../model/Product.js";
import { isadmin } from "./usercontroller.js";

export function createProduct(req,res){
    if(!isadmin(req)){
        res.status(403).json({
            message : "Forbidden",
        });
        return;
    }

    const product = new Product(req.body);

    product.save().then(
        ()=>{
            res.json({
                message : "Product create sucesfully"
            })
        }
    )
    .catch((error)=>{
        res.status(500).json({
            message : "Error creating Product",
            error : error.message
        })
    })
}

export function getallProducts(req,res){
    if(!isadmin(req)){

         Product.find().then(
            (products)=>{
                res.json(Product)
            }
        ).catch(
            (error)=>{
                res.status(500).json({
                    message : "Error fetching Products",
                    error : error.message
                    
                })
            }
        )
        
    }else{

        Product.find({isavailable : true}).then(
            (products)=>{
                res.json(Product)
            }
        ).catch(
            (error)=>{
                res.status(500).json({
                    message : "Error fetcthing Produccts",
                    error : error.message
                })
            }
        )
    }
}

export function deleteProduct(req,res){
    if(!isadmin(req)){
        res.status(403).json({
            message : "only admins can delete Products "
        });
        return;
    }

    const productID = req.params.productID;

    Product.deleteone({ProductID : ProductID}).then(()=>{
        res.json({
            message : "Product deleted sucessfully"
        });
    });

}

export function updateProduct(req, res) {
	if (!isAdmin(req)) {
		res.status(403).json({
			message: "Only admin can update products",
		});
		return;
	}

	const productID = req.params.productID;

	Product.updateOne({ productID: productID }, req.body).then(() => {
		res.json({
			message: "Product updated successfully",
		});
	});
}

export function getProductByID(req, res) {
	const productID = req.params.productID;

	Product.findOne({ productID: productID })
		.then((product) => {
			if (product == null) {
				res.status(404).json({
					message: "Product not found",
				});
			} else {
				if (product.isAvailable) {
					res.json(product);
				} else {
					if (isAdmin(req)) {
						res.json(product);
					} else {
						res.status(404).json({
							message: "Product not found",
						});
					}
				}
			}
		})
		.catch((error) => {
			res.status(500).json({
				message: "Error fetching product",
				error: error.message,
			});
		});
}
