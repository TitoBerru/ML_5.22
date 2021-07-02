// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
router.post('/create', productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/product-edit-form/:id', productsController.edit); 
router.put('/product-edit-form/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('product/delete/:id', productsController.destroy); 


module.exports = router;
