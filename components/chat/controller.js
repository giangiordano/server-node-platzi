const store = require("./store");

  const addChat = (users) => {

    return new Promise( (resolve, reject) => {

      if(!users)
        reject('Falta usuarios/mensajes para crear el Chat');

      const chat = { users };
      resolve(store.add(chat));

    });

  };

  const listChat = () => {

    return new Promise((resolve, reject)=>{

      resolve( store.list() );
      
    });

  };


module.exports = {
  addChat,
  listChat,

};
