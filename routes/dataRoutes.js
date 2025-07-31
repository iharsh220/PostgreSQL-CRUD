const express = require('express');
const router = express.Router();
const { getAll, create, getById, updateById, deleteById } = require('../controllers/dataController');

router.route('/')
    .get(getAll)
    .post(create);

router.route('/:id')
    .get(getById)
    .put(updateById)
    .delete(deleteById);

module.exports = router;
