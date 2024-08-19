const express=require('express');
const router=express.Router();
const medicalController=require('../controllers/medicalController');

router.post('/addData',medicalController.addData);
router.get('/emergencies', medicalController.getData);
router.get('/searchByName', medicalController.searchByName);

module.exports=router;