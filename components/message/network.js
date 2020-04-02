const express = require('express');
const multer = require('multer');
const router = express.Router();
const response = require('../../network/response'); // Respuestas del servidor
const controller = require('./controller');
const upload = multer({ dest: 'api/files' });

    router.get('/', (req, res) => { // GET - Consulta de datos

        const filterMessage = req.query.user || null;

        controller.getMessages(filterMessage)
            .then( (messageList) => {
                response.success(req, res, messageList);
            })
            .catch( (error) => {
                response.error(req, res, 'Error en el servidor', 500, error);
            });

    });

    router.post('/', upload.single('file'), (req, res) => { // Ingreso de datos

        controller.addMessage(req.body.user, req.body.chat, req.body.message, req.file)
            .then((resolve) => {
                response.success(req, res, resolve);
            })
            .catch((error) => {
                response.error( req, res, 'Error en el servidor', 500, error );
            });

    });

    router.patch('/:id', (req, res) => { // Actualizacion de datos

        controller.editMessage(req.params.id, req.body.message)
            .then( (resolve)=>{

               response.success(req, res, resolve, 200);
            })
            .catch( (error) => {

                response.error(req, res, error, 400);
            });

    });

    router.delete('/:id', (req, res) => {

        controller.deleteMessage(req.params.id)
          .then(resolve => {
            response.success(req, res, resolve, 200);
          })
          .catch(error => {
            response.error(req, res, error, 400);
          });
          
    });

module.exports = router;

