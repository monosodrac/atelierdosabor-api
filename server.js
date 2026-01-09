const jsonServer = require('json-server');
const express = require('express');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router('./api/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use('/carousel', express.static(path.join(__dirname, 'carousel')));
server.use('/restaurant', express.static(path.join(__dirname, 'restaurant')));
server.use('/serv', express.static(path.join(__dirname, 'serv')));
server.use('/menu', express.static(path.join(__dirname, 'menu')));

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server rodando em http://localhost:3000');
});

module.exports = server;
