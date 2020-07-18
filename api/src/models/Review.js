const S = require('sequelize');

const Review = (sequelize, S) => { 
    const review = sequelize.define('review', {
        id: {
            type: S.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        
        puntuacion: {
            type: S.INTEGER,
            allowNull: false,
        },
        
        comentario: {
            type: S.STRING,
        }
    },
    {timestamps: false});
    return review;
};

module.exports = Review;