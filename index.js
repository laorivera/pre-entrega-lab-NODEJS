import { Luser } from './useraccess.js';
import { Rmanager } from './manager.js';

async function main(){

const User = new Luser("Dagoberto", "abc123");

const Rm = new Rmanager('https://fakestoreapi.com/products')

console.log(User.getId());
console.log(User.getUsername());

//Rm.fetchProduct().then(()=> {console.log(Rm.getProduct())})

Rm.setPayload({
    id: 0,
    title: "string",
    price: 0.1,
    description: "string", 
    category: "string",
    image: "http://example.com"
});

Rm.postProduct().then(() => {console.log(Rm.getProduct())})

}

main().catch(error => {console.error("1", error)})



