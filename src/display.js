export class dBox{
    moo = {};
    constructor(method){
        moo = method
    };

    displayBox(method){
        if (method === 'GET '){ 
        console.log("┌───────────────────┐");
        console.log("│ GET API PRODUCTS  │");
        console.log("└───────────────────┘");
        }
        else if (method === 'POST'){
        console.log("┌───────────────────┐");
        console.log("│ POST API PRODUCTS │");
        console.log("└───────────────────┘");
        }
        else if (method === 'DELETE'){
        console.log("┌─────────────────────┐");
        console.log("│ DELETE API PRODUCTS │");
        console.log("└─────────────────────┘");
        }
        else {console.log('error')
        }
    }
}