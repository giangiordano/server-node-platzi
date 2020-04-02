const db = require("mongoose");

db.Promise = global.Promise;
const connect = async (url) => {

    await db.connect( url, { useUnifiedTopology: true, useNewUrlParser: true } , (err, res) => {
        if (err) throw err;
    
        console.log("[Mongo DB] On Line");
      }
    );

};

module.exports = connect;
