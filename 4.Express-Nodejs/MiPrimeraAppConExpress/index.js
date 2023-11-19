const express = require('express');

const app = express();


app.get('/', (require, response) => {
    response.send('Hola Mundo');    
})

app.listen(3000, () => {
    console.log(`Servidor en puerto 3000`);
});