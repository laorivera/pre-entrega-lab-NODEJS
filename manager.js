export class Rmanager {

    Payload ={
    "id": "",
    "title": "string",
    "price": "",
    "description": "string",
    "category": "",
    "image": "http://example.com"
    }

    #Data ={
        url: "",
        fetchdata: {},
        payload:  this.Payload,
        method: "",
        request: "",
    }

    constructor(url, method, request){ //types string and interface 
        this.#Data.url = url;
        this.#Data.method = method;
        this.#Data.request =  request
        //this.#Data.payload = payload;
       
    }

    async fetchProducts(){try {const response = await fetch(this.#Data.url+this.#Data.request); console.log(this.#Data.url+this.#Data.request); this.#Data.fetchdata = await response.json()} catch(error){ console.log("error")}};
    async fetchProductID(){try {
        //console.log(this.#Data.url+this.#Data.request)
        const response = await fetch(this.#Data.url+this.#Data.request+'/'+this.#Data.payload.id); this.#Data.fetchdata = await response.json(); console.log(this.#Data.url)} catch(error){console.log("error")}
    }

    async postProducts(){try {const response = await fetch(this.#Data.url+this.#Data.request+'/',{
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.#Data.payload)
    }); this.#Data.fetchdata = await response.json()} catch(error){console.log('ERROR')}}
    

    async delProducts(){try {const response = await fetch(this.#Data.url+this.#Data.request+'/'+this.#Data.payload.id,{
        method: 'DELETE'
    }); this.#Data.fetchdata = await response.json()} catch(error){console.log('ERROR')}}


    isRequestValid(){
        if(this.#Data.method === 'GET' && this.#Data.request === 'products'){ this.fetchProducts().then(() => console.log(this.getProduct()));
        }
        else if (this.#Data.method === 'GET' && this.#Data.request === 'products' && this.#Data.payload.id){ console.log(this.#Data.url+this.#Data.request+'/'+this.#Data.payload.id); this.fetchProductID().then(() => console.log(this.getProduct()));
        }
        else if (this.#Data.method === 'POST' && this.#Data.request === 'products') { this.postProducts().then(() => console.log(this.getProduct())); 
        }
        else if (this.#Data.method === 'DELETE' && this.#Data.request === 'products') { this.delProducts().then(() => console.log(this.getProduct()));
        }
        
        else{console.log("error request invalida")}
    }

    setPayload = (payload) => {this.#Data.payload = payload}
    getProduct = () =>{return this.#Data.fetchdata}
    

}