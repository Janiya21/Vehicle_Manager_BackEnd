const express = require('express');
const router =express.Router();

const postController = require('../controller/VehicleController');

router.get('/vehicles', postController.getAllVehicles);
router.delete('/dltVehicle',postController.deleteVehicle);
router.post('/regVehicle',postController.regVehicle);
router.put('/updateVehicle',postController.updateVehicle);
router.get('/getRevVehicle',postController.getRevVehicle);
router.get('/getVehicleById',postController.getVehicleById);

module.exports = router;