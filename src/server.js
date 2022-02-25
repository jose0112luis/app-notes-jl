// --codio de express
const express = require('express');
const path = require('path');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views')); //ruta completa de carpeta views desde cualquier SO

// Middlewares
app.use(express.urlencoded({extended: false})); //convertir los datos a JSON

// Global Variables

// Routes
app.get('/', (req,res) => {
    res.send('Hello World');
});

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;