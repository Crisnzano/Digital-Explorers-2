const express = require('express');
const router = express.Router();
const { createCat, getAllCats, getCatById, updateCat, deleteCat } = require('../controlers/cat.controller');

// Endpoint to create a new cat
router.post('/', createCat);

// Endpoint to get all cats
router.get('/', getAllCats);

// Endpoint to get a cat by id
router.get('/:id', getCatById);

// Endpoint to update a cat by id
router.put('/:id', updateCat);

// Endpoint to delete a cat by id
router.delete('/:id', deleteCat);

module.exports = router;
