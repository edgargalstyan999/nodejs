
const express = require('express');
const app = express();
const users = require('./users.json');

app.get('/users/', function (request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.send(users);
});
app.get('/users/:id', function (request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  const routeId = request.params.id;
  const user = users.find((item) => item.id == routeId);
  response.send(user);
});

app.listen(8080);
