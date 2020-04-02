const express = require("express");
const router = express.Router();
const response = require("../../network/response"); // Respuestas del servidor
const controller = require("./controller");

router.get('/', (req, res)=>{

  controller.listChat()
    .then((resolve)=>{
      response.success(req, res, resolve, 200);
    })
    .catch((error)=>{
      response.error(req, res, 'Internal Error', 500, error);
    });
});

router.post('/', (req, res)=>{

  const { users } = req.body;

  controller.addChat( users )
    .then( (resolve)=>{
      response.success(req, res, resolve, 200);
    })
    .catch( (error)=>{
      response.error(req, res, 'Error interno', 500, error);
    });

});

module.exports = router;
