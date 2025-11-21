import { Router } from 'express';
import { ProductController } from '../controllers/productController.js';

export class ProductRoutes {

  productController = new ProductController;

  constructor(){};

   init() {
        const router = Router();
        
        router.get('/product', this.productController.getProducts);
        //router.post('/product', this.productController.postProducts);

        return router;
    }
}
