const express = require("express");
const router = express.Router();
const response = require("../../network/response"); // Respuestas del servidor
const controller = require("./controller");

router.post("/", (req, res) => {

  controller.addUser(req.body.user, req.body.email)
    .then(newUser => {
      response.success(req, res, newUser, 201);
    })
    .catch(error => {
      response.error(req, res, 'Error al crear usuario', 500, error);
    });
});

router.get('/', (req, res) => {

  controller.getUsers()
    .then((resolve)=> {
      response.success(req, res, resolve, 200);
    })
    .catch((error)=> {
      response.error(req, res, 'Error interno del server', 500, error);
    });

});

module.exports = router;
