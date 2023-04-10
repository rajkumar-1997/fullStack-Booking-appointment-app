const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const Appointment=sequelize.define('appointments',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,

    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,

    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
    },
    number:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,

    },
    time:{
        type:Sequelize.STRING,
        allowNull:false,
    }

});

module.exports=Appointment;
