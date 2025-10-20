class Luser {
    
    #User ={
    id: "",
    username: "",
    password: "",
    }

   constructor(username, password){ // types string and string 
    this.#User.id = this.#generateId();
    this.setUsername(username);
    this.#User.password = password;
   }

   /////// PRIVATE ////
    #generateId = () => { return Date.now().toString(36) + Math.random() } 
    #resetPassword = (newpassword) => {if(newpassword !== this.#User.password){this.#User.password = newpassword; return true}return false} // return boleano
    #isValidUser = (username) => {const regex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/; if((username.length >= 3 && username.length <= 10) && regex.test(username)){return true}return false} // return boleano
    //#isValidPassword = (this.#resetPassword(newpassword)) => {}

    ///// GET ///////
    getId = () => this.#User.id
    getUsername = () => this.#User.username

   ///// SET ///
    setUsername = (newusername) => {if(this.#isValidUser(newusername) == true){this.#User.username = newusername}else{console.log('error username')}}
    setPassword = (newpassword) => {return this.#resetPassword(newpassword)}
    //createUser = (username, password) => {}

}   

class Rmanager {

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

    async fetchProduct(){try {const response = await fetch(this.#Data.url); this.#Data.fetchdata = await reponse.json()} catch(error){ console.log("error")}};
    async postProduct(){try {const response = await fetch(this.#Data.url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: this.#Data.payload 
    });
    this.#Data.fetchdata = await response.json()} catch(error){console.log('ERROR')}}

    setPayload = (payload) => {this.#Data.payload = payload}
    getProduct = () =>{return this.#Data.fetchdata}

}

const User = new Luser("Ladislao", "abcd123");
const Rm = new Rmanager('https://fakestoreapi.com/products')

console.log(User.getId());
console.log(User.getUsername());
await Rm.fetchProduct();
console.log(Rm.getProduct()); 
this.Rm.setPayload({
    id: 0,
    title: "string",
    price: 0.1,
    description: "string", 
    category: "string",
    image: "http://example.com"
});
await Rm.postProduct()
console.log(Rm.getProduct())


