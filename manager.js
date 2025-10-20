export class Rmanager {

    Payload ={
    "id": 0,
    "title": "string",
    "price": 0.1,
    "description": "string",
    "category": "string",
    "image": "http://example.com"
    }

    #Data ={
        url: "",
        fetchdata: {},
        payload:  this.Payload
    }
    
    constructor(endpoint, payload){ //types string and interface 
        this.#Data.url = endpoint;
        this.#Data.payload = payload
    }

    async fetchProduct(){try {const response = await fetch(this.#Data.url); this.#Data.fetchdata = await response.json()} catch(error){ console.log("error")}};
    async postProduct(){try {const response = await fetch(this.#Data.url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.#Data.payload)
    });
    this.#Data.fetchdata = await response.json()} catch(error){console.log('ERROR')}}

    setPayload = (payload) => {this.#Data.payload = payload}
    getProduct = () =>{return this.#Data.fetchdata}

}