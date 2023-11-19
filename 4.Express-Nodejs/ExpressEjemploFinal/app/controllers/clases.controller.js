import db from "../models/index.js";

const Op = db.Sequelize.Op; // operadores de sequelize

// Crear y guardar una nueva clase
export const CrearClase = (req, res) => {
    if(!req.body.nombre){
        res.status(400).send({
            message: "El contenido no puede estar vacio."
        });
        return;
    }   

    // Crear una clase
    const clase = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        fecha: req.body.fecha,
        hora: req.body.hora,
    }

    db.clase.create(clase)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message: err.message || "Error al crear la clase."
        });
    });
};


// Obtener todos los clase de la base de datos
export const findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condicion = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

    db.clase.findAll({ where: condicion })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message: err.message || "Error al obtener las clases."
        });
    });
};

// Encontrar un solo clase con un id
export const findOne = (req, res) => {
    const id = req.params.id;

    db.clase.findbyPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message: "Error al obtener la clase con id=" + id
        });
    });
};

// Actualizar un clase por id
export const update = (req, res) => {
        const id = req.params.id;

       db.clase.update(req.body, {where: {id: id}})
            .then(num => {
                if(num == 1){
                    res.send({
                        message: "Clase actualizada correctamente."
                    });
                }else{
                    res.send({
                        message: `No se pudo actualizar la clase con id=${id}.`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error al actualizar la clase con id=" + id
                });
            });
}
// Eliminar un clase por id
export const deleteClase = (req, res) => {
    const id = req.params.id;

    db.clase.destroy({where: {id: id}})
        .then(num => {
            if(num == 1){
                res.send({
                    message: "Clase eliminada correctamente."
                });
            }else{
                res.send({
                    message: `No se pudo eliminar la clase con id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar la clase con id=" + id
            });
        });
};


export default {
    CrearClase,
    findAll,
    findOne,
    update,
    deleteClase
}