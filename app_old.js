// Servidor web con http
const http = require('http')
http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        const resp = {
            nombre: 'Jose',
            edad: '42',
            url: req.url
        }
        res.write(JSON.stringify(resp));
        // res.write('Hola Mundo')
        res.end()
    })
    .listen(8080)

console.log('Ecuchando en el puerto 8080')