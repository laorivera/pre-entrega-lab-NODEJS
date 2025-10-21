import { Luser } from './useraccess.js';
import { Rmanager } from './manager.js';
import { dBox } from './display.js';

async function main(){

const url = 'https://fakestoreapi.com/';
const args = process.argv.slice(2);
const [method, request, id, title, price, category] = args;

//clase para administrar fetch 
const Rm = new Rmanager(url, method, request);

if (method === 'POST') {
  Rm.setPayload({
        id: "",
        title: args[2],
        price: args[3],
        description: "string", 
        category: args[4],
        image: "http://example.com"
 });
} else {
    Rm.setPayload({
        id: id,
        title: title,
        price: price,
        description: "string", 
        category: category,
        image: "http://example.com"
 });
}

Rm.isRequestValid();

}
//ejecuta main con error catch
main()//.catch(error => {console.error("1", error)})



