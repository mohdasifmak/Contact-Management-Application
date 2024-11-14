const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');


// CRUD routes
router.get('/', contactController.getAllContact);
router.get('/new', contactController.create);
router.post('/new', contactController.createContact);
router.get('/update/:id', contactController.updateProduct);
router.put('/update/:id', contactController.update);
router.delete('/delete/:id', contactController.deleteProduct);

module.exports = router;
