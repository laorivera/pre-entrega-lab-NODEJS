export class ProductModels {
    
    product = {
        id: 0, 
        title: "",
        price: 0,
        description: "",
        image:  "",
        };
    
    
    constructor(){};

    products = [
        {id: this.product},
    ];

    getProduct(){return this.product};

    setProduct(newitem) {
    const createitem = this.product = {
        id: newitem.id,
        name: newitem.name, // ///
        price: newitem.price,
        description: newitem.description,
        price: newitem.price,
        image: newitem.image,
        
    }; 
    return createitem; }

    delProduct(delitem){
        if(delitem === this.product.id ){this.setProduct(delitem); console.log(this.product.id, 'deleted')}
        else{console.log("item not found")}
    }

    //getPayload(){return this.product};
}
