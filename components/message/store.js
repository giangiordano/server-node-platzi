const Model = require('./model');


const addMessage = (message) => {
    const newMessage = new Model(message);
    return newMessage.save();
};

const getMessages = (filterMessage) => {

    return new Promise((resolve, reject) => {
        
        let filter = {};
        if (filterMessage !== null)
            filter = { user: filterMessage };
    
        Model.find(filter)
          .populate('user')
          .exec((err, populated) => {

            if(err) 
                return reject(err);

            return resolve(populated);

          });

    });
};

const editMessage = async (id, text) => {

    const editMessage = await Model.findOne({ _id: id });
    editMessage.message = text;
    return editMessage.save();
};

const deleteMenssage = async (id) => {

    const deletedMsn = await Model.deleteOne({ _id: id });
    return deletedMsn;

};

module.exports = {
  add: addMessage,
  list: getMessages,
  update: editMessage,
  delete: deleteMenssage
};
