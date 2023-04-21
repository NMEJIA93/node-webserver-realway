const http = require('http');

http.createServer((req, res) => { //req --> es lo que esta solicitando el Cliente || res --> es lo que el server le responde 


    res.write('Hola Mundo ')
    res.end();

})
    .listen(8080)



console.log('Escuchando el puerto', 8080)

 