const express=require('express');
const bodyParser=require('body-parser');
const sequelize=require('./util/database');
const appointmentRoutes=require('./routes/appointment');
const cors=require('cors');
const path=require('path');

const app=express();


// app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));


app.use(cors());
app.use(bodyParser.json({ extended: false }));


app.use(appointmentRoutes);

sequelize.sync().then(result=>{
    console.log(result);  
    app.listen(3000);
}).catch(err=>{
    console.log(err);
})