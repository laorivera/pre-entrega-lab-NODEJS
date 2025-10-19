class Luser {
    
    #id = "";
    #username = "";
    #password = "";

   constructor(username, password){
    
    this.#id = this.#generateId();
    this.#username = username;
    this.#password = password;
   }

   /////// PRIVATE ////
    #generateId = () => { return Date.now().toString(36) + Math.random() } 
    #resetPassword = (newpassword) => {if(newpassword !== this.#password){this.#password = newpassword; return true}return false}
    #isValidUser = (username) => { const regex = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/; if ((username.lenght <= 3 && username.lenght >= 10) && regex.test(username)){return true}return false}

    ///// GET ////
    getId = () => this.#id
    getUsername = () => this.#username

   ///// SET ////
    setUsername = (newusername) => {if(this.#isValidUser == true){this.#username = newusername}else{console.log('error')}}
    setPassword = (newpassword) => {return this.#resetPassword(newpassword)}
    //createUser = (username, password) => {}

}   

const User = new Luser("lao", "abcd123");
console.log(User.getId());
console.log(User.getUsername());

