const store = require("./store");

const addUser = (user, email) => {

  return new Promise((resolve, reject) => {

    if (!user || !email) 
        return reject("Los datos son incorrectos");

    const newUser = {
      user,
      email
    };

    return resolve(store.add(newUser));
  });

};

const getUsers = () => {
  return store.list();
};

module.exports = {
    addUser,
    getUsers

};
