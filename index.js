var express = require('express');
var app = express();

app.get('/', c_inicio);
app.get('/saludo', c_saludo);

function c_inicio(request, response) {
    response.send('<h1> Expess Inicio</h1>');
}

function c_saludo(request, response) {
    response.send('<h1>Hola Expess - Elard Huaraca</h1>');
}

function c_server(request, response) {
    console.log('port:8000')
}

var server = app.listen(8000, c_server);