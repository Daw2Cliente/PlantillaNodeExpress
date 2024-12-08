const db = require('../config/db');

const getAllUsers = async () => {
    const [rows] = await db.execute('SELECT * FROM users');
    return rows;
};

module.exports = { getAllUsers };
