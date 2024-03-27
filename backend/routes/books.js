const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const BookController = require('../controllers/BookController.js');
const ErrorHandler = require('../middleware/ErrorHandler')

router.get('', BookController.index);
router.get('/:id', BookController.show);
router.post('', [
    body('title').notEmpty(),
    body('author').notEmpty(),
    body('publishYear').notEmpty(),
], ErrorHandler, BookController.store);
router.delete('/:id', BookController.destroy);
router.delete('/', BookController.destroyAll);
router.patch('/:id', BookController.update);

module.exports = router;