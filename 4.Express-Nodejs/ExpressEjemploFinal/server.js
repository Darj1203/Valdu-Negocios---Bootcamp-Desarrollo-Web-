// const express = require('express');

import express from 'express';
import cors from 'cors';
import db from './app/models/index.js';
import clasesRouter from './app/routes/clases.routes.js';

const PORT=3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

//Ruta de prueba
app.use('/clases', clasesRouter)

//Sincronizar la base de datos con la API
db.sequelize.sync()
    .then(() => {
         console.log("Sincronizacion exitosa");
    })
    .catch((error) => {
        console.log("Error de sincronazación: #" ,error); //El codigo en solo desarrollo
    });

const forceSync = async () => {
        try {
          await db.sequelize.sync({ force: true });
          console.log('Base de datos sincronizada y recreada exitosamente.');
        } catch (error) {
          console.error('Error al sincronizar y recrear la base de datos:', error);
        } finally {
          // Cierra la conexión con la base de datos cuando hayas terminado
          await db.sequelize.close();
        }
      };

//forceSync();

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});