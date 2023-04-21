const express = require('express')
const hbs = require('hbs');
require('dotenv').config();


const app = express()
const port = process.env.PORT;

//Handlebars 
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});






// servir contenido statico || carpeta publica 
app.use(express.static('Public'))

app.get('/',  (req, res) => {
    res.render('home',{
        nombre: 'Norbey Mejia',
        titulo: 'Curso de Node'
    });
})


app.get('/generic',  (req, res) => {
    res.render('generic',{
        nombre: 'Norbey Mejia',
        titulo: 'Curso de Node'
    });
})

app.get('/elements',  (req, res) => {
    res.render('elements',{
        nombre: 'Norbey Mejia',
        titulo: 'Curso de Node'
    });
})


app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/Public/404.html');
})


console.log(`el servidor esta escuchando por el puerto ${port}`)

app.listen(port)