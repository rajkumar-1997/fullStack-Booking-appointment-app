const path=require('path');
const Appointment=require('../models/user');
const rootDir=require('../util/path.js');


exports.homePage=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','index.html'));
    

}
exports.addAppointment=(req,res,next)=>{
    const name=req.body.name;
    const email=req.body.email;
    const number=req.body.number;
    const time=req.body.time;
    Appointment.create({
        name:name,
        email:email,
        number:number,
        time:time,
    }).then((result)=>{
        console.log(result,'Appointment Added');
        res.send(result);
    }).catch((err)=>{
        console.log(err);
    })
    
};




exports.sendAppointments=(req,res,next)=>{
    Appointment.findAll().then((appointments)=>{
        res.send(appointments);
        
}).catch((err)=>{
    
    console.log('Got some error',JSON.stringify(err));
    res.status(500).json({error:err});
});
  
    
};

  

exports.deleteAppointment=(req,res,next)=>{
    const appointmentId=req.params.appointmentId;
    Appointment.findByPk(appointmentId)
    .then((appointment)=>{
        console.log('appointment deleted ');

       return  appointment.destroy();
    }).then((result)=>{
        console.log(result);
        res.send();
    }).catch((err)=>{
        console.log(err);
    })
};
exports.editAppointment=(req,res,next)=>{
    const appointmentId=req.params.appointmentId;
    const updatedName=req.body.name;
    const updatedEmail=req.body.email;
    const updatedNumber=req.body.number;
    const updatedTime=req.body.time;

    Appointment.findByPk(appointmentId).then((appointment)=>{
        console.log(appointment);
        appointment.name=updatedName;
        appointment.email=updatedEmail;
        appointment.number=updatedNumber;
        appointment.time=updatedTime;

        return appointment.save();
    }).then((result)=>{
        console.log(result);
        res.send();
    }).catch((err)=>{
        console.log(err);
    })
};