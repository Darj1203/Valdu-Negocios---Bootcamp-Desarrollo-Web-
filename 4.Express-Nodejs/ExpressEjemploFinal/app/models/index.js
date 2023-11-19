import { Sequelize } from "sequelize";
import clasesModels from "./clases.model.js";
import { sequelize } from "./sequelize.js"

const db = {}; // objeto vacio

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// importar los modelos
//db.clases = require("./clases.model.js")(sequelize, Sequelize);
db.clase = clasesModels(sequelize, Sequelize);


export default db;