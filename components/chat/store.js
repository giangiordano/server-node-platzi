const Model = require("./model");

  const addChat = (chat) => {

      const newChat = new Model(chat);
      return newChat.save();
  };


  const getChats = () => {
    return Model.find();
  };

module.exports = {
  add: addChat,
  list: getChats,
  // update: editChat,
  // delete: deleteChat
};
