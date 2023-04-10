   const express=require('express');

   const appointmentController=require('../controllers/appointment');

   const router=express.Router();


   router.get('/user/add-user',appointmentController.homePage);

   router.post('/user/add-user',appointmentController.addAppointment);
   
   
   router.get('/user/load-data',appointmentController.sendAppointments);

   router.delete('/user/delete-appointment/:appointmentId',appointmentController.deleteAppointment);

   router.put('/user/edit-appointment/:appointmentId',appointmentController.editAppointment);
   

   module.exports = router;   