import express from 'express';
import clase from '../controllers/clases.controller.js'

const router = express.Router(); 

// Crear nuestras rutas
router.post('/', clase.CrearClase);
router.get('/', clase.findAll);
router.get('/:id', clase.findOne);
router.put('/:id', clase.update);
router.delete('/:id', clase.deleteClase);

export default router;