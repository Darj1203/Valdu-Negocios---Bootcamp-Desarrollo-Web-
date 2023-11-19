export default (sequelize, Sequelize) => {
    const Clase = sequelize.define("clase", {
        nombre: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        },
        fecha: {
            type: Sequelize.DATE
        }, 
        hora: {
            type: Sequelize.TIME
        },
    })
    return Clase;
};