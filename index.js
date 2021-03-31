var express = require('express');
var app = express();

app.get('/', c_inicio);
app.get('/clientes', c_clientes);
app.get('/productos', c_productos);

function c_inicio(request, response) {
    response.send('<title>Inicio</title><h1> Expess Inicio</h1><a href="/clientes">Clientes</a><br><a href="/productos">Productos</a>');
}

function c_clientes(request, response) {
    var contenido = `
    <table border="1" style="text-align: center;">
        <thead>
            <tr>
                <th>Nombres</th>
                <th>Edad</th>
                <th>Comentario</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>pepito</td>
                <td>20</td>
                <td>Productos recomendados</td>
            </tr>
            <tr>
                <td>ana</td>
                <td>30</td>
                <td>Productos baratos y de muy buena calidad</td>
            </tr>
        </tbody>
    </table>`;

    response.send('<title>Clientes</title><h1>Clientes</h1>' + contenido);
}

function c_productos(request, response) {
    var contenido = `<table border="1" style="text-align: center;">
    <thead>
        <tr>
            <td>Nombres</td>
            <td>Precio</td>
            <td>Stock</td>
            <td>Comprar</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Pantalla LG 21 Pulgadas</td>
            <td>300 S/.</td>
            <td>5</td>
            <td><a href="#">Comprar</td>
        </tr>
        <tr>
            <td>Laptop Asus ROG</td>
            <td>3000 S/.</td>
            <td>2</td>
            <td><a href="#">Comprar</td>
        </tr>
        <tr>
            <td>RTX 3080TI GYGABITE</td>
            <td>3200 S/.</td>
            <td>10</td>
            <td><a href="#">Comprar</td>
        </tr>
    </tbody>
</table>`;
    response.send('<title>Productos</title><h1>Productos</h1>' + contenido);
}

function c_server(request, response) {
    console.log('port:9000')
}

var server = app.listen(9000, c_server);