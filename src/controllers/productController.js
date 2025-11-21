import { ProductModels } from "../models/productModels.js"

export class ProductController {

    productModels = new ProductModels

    constructor(){}
    
    getProducts = (req, res) => {
        return res.json(this.productModels.getProduct())
    }
    
    postProducts = (req, res) => {
        const newItem = req.body;
        this.productModels.setProduct(newItem);
        console.log(this.productModels.getProduct());
        return res.status(201).json(newItem)
    }

    delProducts = (req, res) => {
        const delitemID = req.body.id;
        this.productModels.delProduct(delitemID);
        return res.status(201).json(delitemID)
    }
    
}