const {
    createData,
    getAllData,
    getDataById,
    updateDataById,
    deleteDataById
} = require('../models/dataModel');

exports.create = async (req, res, next) => {
    try {
        const { name, value } = req.body;
        const newData = await createData(name, value);
        res.status(201).json(newData);
    } catch (err) {
        next(err);
    }
};

exports.getAll = async (req, res, next) => {
    try {
        const allData = await getAllData();
        res.json(allData);
    } catch (err) {
        next(err);
    }
};

exports.getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await getDataById(id);
        if (!data) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.json(data);
    } catch (err) {
        next(err);
    }
};

exports.updateById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, value } = req.body;
        const updated = await updateDataById(id, name, value);
        if (!updated) {
            return res.status(404).json({ message: 'Data not found or not updated' });
        }
        res.json(updated);
    } catch (err) {
        next(err);
    }
};

exports.deleteById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = await deleteDataById(id);
        if (!deleted) {
            return res.status(404).json({ message: 'Data not found or not deleted' });
        }
        res.json({ message: 'Data deleted successfully' });
    } catch (err) {
        next(err);
    }
};
