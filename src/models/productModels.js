export class ProductModels {
    /*
    payload = {
        id: Number, 
        title: String,
        price: Number,
        despriction: String,
        image:  String,
        };
    
    */
    constructor(){};

    products = [
        {id: 1,  name: "1"},
        {id: 2,  name: "2"},
        {id: 3,  name: "3"},
    ];

    getProducts(){return this.products};
    //setProducts()
}