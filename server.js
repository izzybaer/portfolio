'use strict';

const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');


const PORT = process.env.PORT || 4000;
const app = express();

const conString = process.env.DATABASE_URL || 'portgres://localhost:5432';

const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./'));

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);

app.get('/index', function(request, response) {
  console.log('booya');
  response.sendFile('./index.html', {root: '.'});
});

app.listen(PORT, function(){
  console.log('This is a yummy website for all y\'alls at localhost: 4000');
});
