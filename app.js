const express = require('express');
const app = express();
const users = [
  {
    id: 1,
    name: 'Account 1',
    created: '5-8-2021',
    updated: '5-8-2021',
    owner: 'User 1',
    action: 'Action',
  },
  {
    id: 2,
    name: 'Account 2',
    created: '5-8-2021',
    updated: '5-8-2021',
    owner: 'User 2',
    action: 'Action',
  },
  {
    id: 3,
    name: 'Account 3',
    created: '5-8-2021',
    updated: '5-8-2021',
    owner: 'User 3',
    action: 'Action',
  },
];
app.get('/users/', function (request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*');

  response.send(users);
});
app.get('/users/:id', function (request, response) {
  let user;
  response.setHeader('Access-Control-Allow-Origin', '*');
  const routeId = request.params.id;
  console.log(routeId);
  user = users.find((item) => item.id == routeId);

  response.send(user);
});

app.listen(8080);
