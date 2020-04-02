const store = require('./store');
const socket = require('../../socket').socket;

const addMessage = (user, chat, message, file) => {

  return new Promise((resolve, reject) => {
    if (!user || !message || !chat) 
        return reject("Los datos son incorrectos");

    const fullMessage = {
      user,
      chat,
      message,
      date: new Date()
    };

    // Lo enviamos por sockets
    socket.io.emit('message', fullMessage);

    return resolve(store.add(fullMessage));
  });
};

const getMessages = (filterMessage) => {

    return new Promise( (resolve, reject) => {
        resolve(store.list(filterMessage));
    });

};

const editMessage = (id, text) => {

    return new Promise((resolve, reject) => {

        if(!id || !text)
            return reject('Los datos son incorrectos');
        
        return resolve(store.update(id, text));
    });

};

const deleteMessage = (id) => {

    return new Promise( (resolve, reject) => {

        if( !id )
            return reject('Los datos no son correctos');

        const deletedMsn = store.delete(id);
        return resolve(deletedMsn);
    });

};

module.exports = {
    addMessage,
    getMessages,
    editMessage,
    deleteMessage
}

