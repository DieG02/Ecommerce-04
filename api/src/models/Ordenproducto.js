const S = require('sequelize');


const Ordenproducto = (sequelize, S) => { 
    const modelOP = sequelize.define('ordenproducto', {
        cantidad: {
            type: S.INTEGER,
            allowNull: false,
        },
    },
    {timestamps: false});
    return modelOP;
};

module.exports = Ordenproducto;