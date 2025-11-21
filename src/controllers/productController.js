import { ProductModels } from "../models/productModels.js"

export class ProductController {

    productModels = new ProductModels

    constructor(){}
    
    getProducts(req, res){
        return res.json(this.productModels.getProducts())
    }
    /*
    postProducts(req, res){
        req
    }
    */
}