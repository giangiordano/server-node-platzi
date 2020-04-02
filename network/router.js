const express = require('express');
const message = require("../components/message/network");
const user = require("../components/users/network");
const chat = require("../components/chat/network");

const routes = (server) => {

    server.use("/mensaje", message);
    server.use("/user", user);
    server.use("/chat", chat);

};

module.exports = routes;