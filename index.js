import { Luser } from './useraccess.js';
import { Rmanager } from './manager.js';
import { dBox } from './display.js';

async function main(){

const url = 'https://fakestoreapi.com/';
const args = process.argv.slice(2);
const method = args[0];
const request = args[1];

console.log(method);
console.log(request);

//clase para administrar fetch 
const Rm = new Rmanager(url, method, request);
//envia peticon GET y muestra listado en consola

const argx = process.argv.slice(3);
const [id, title, price, category] = argx;
//Rm.fetchProducts().then(() => {console.log(Rm.getProduct())})
// anade json body 
Rm.setPayload({
        id: id,
        title: title,
        price: price,
        description: "string", 
        category: category,
        image: "http://example.com"
 });


Rm.isRequestValid();
// envia peticion POST y Muestra respuesta en consola
//Rm.postProducts().then(() => {console.log(Rm.getProduct())})

}
//ejecuta main con error catch
main()//.catch(error => {console.error("1", error)})



