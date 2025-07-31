const pool = require('../config/db');

exports.createData = async (name, value) => {
    const res = await pool.query(
        'INSERT INTO data (name, value) VALUES ($1, $2) RETURNING *',
        [name, value]
    );
    return res.rows[0];
};

exports.getAllData = async () => {
    const res = await pool.query('SELECT * FROM data');
    return res.rows;
};

exports.getDataById = async (id) => {
    const res = await pool.query('SELECT * FROM data WHERE id = $1', [id]);
    return res.rows[0];
};

exports.updateDataById = async (id, name, value) => {
    const res = await pool.query(
        'UPDATE data SET name = $1, value = $2 WHERE id = $3 RETURNING *',
        [name, value, id]
    );
    return res.rows[0];
};

exports.deleteDataById = async (id) => {
    const res = await pool.query('DELETE FROM data WHERE id = $1 RETURNING *', [id]);
    return res.rows[0];
};
