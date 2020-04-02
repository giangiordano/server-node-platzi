exports.success = (req, res, msn, status) => {

    res.status(status || 200).send({
        ok: true,
        body: msn
    });

};

exports.error = (req, res, msn, status, error) => {

    // Solo se muesta en el servidor: Con esto sabemos que es lo que pasa con las peticiones. Deberiamos de guardarlas ...
    console.log(`[ERROR-RESPONSE]: ${error}`);
    
    res.status(status || 500).send({
      ok: false,
      body: msn
    });

};
