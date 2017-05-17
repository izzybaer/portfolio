'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static('./'));

app.get('/index', function(request, response) {
  console.log('booya');
  response.sendFile('./index.html', {root: '.'});
});

app.listen(PORT, function(){
  console.log('This is a yummy website for all y\'alls at localhost: 4000');
});
