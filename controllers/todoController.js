// controllers/todoController.js
const db = require('../db');

exports.getTodos = (req, res) => {
    const sql = 'SELECT * FROM todos'; // Harus begini
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.createTodo = (req, res) => {
    const { task } = req.body;
    const sql = 'INSERT INTO todos (task) VALUES (?)';
    db.query(sql, [task], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: result.insertId, task, completed: false });
    });
};

exports.updateTodo = (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    const sql = 'UPDATE todos SET completed = ? WHERE id = ?';
    db.query(sql, [completed, id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Updated successfully' });
    });
};

exports.deleteTodo = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM todos WHERE id = ?';
    db.query(sql, [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Deleted successfully' });
    });
};