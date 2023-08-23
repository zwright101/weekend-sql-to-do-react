const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/' , (req, res) => {
    const sqlText = `SELECT * FROM "todo";`;
    pool
    .query(sqlText)
    .then((result) => {
        console.log(`Got tasks from database` , result);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log(`Error making database query ${sqlText}` , error);
        res.sendStatus(500)
    })
})

// POST
router.post('/' , (req, res) => {
    let newTask = req.body;
    const sqlText = `INSERT INTO "todo" ("task")
                     VALUES ($1);`;
    pool
    .query(sqlText, [newTask.task])
    .then((result) => {
        console.log(`Added new task to database` , newTask);
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(`Error in post query ${sqlText}` , error);
        res.sendStatus(500);
    })
})

// PUT
router.put('/finished/:id' , (req, res) => {
    let {id} = req.params.id;
    let taskToDoEdit = req.params.body;
    const sqlText = `UPDATE "todo" SET "complete" = 'true' WHERE "id" = $1;`;
    pool
    .query(sqlText, [id])
    .then((response) => {
        console.log(`Updated task to complete ${sqlText}` , id);
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log(`Error trying to PUT ${sqlText}` , error);
        res.sendStatus(500);
    });
});

// DELETE
router.delete('/:id' , (req, res) => {
    const deletedId = Number(req.params.id);
    const sqlText = `DELETE FROM "todo" WHERE "id" = $1;`;
    pool
    .query(sqlText, [deletedId])
    .then((response) => {
        console.log(`Task deleted`);
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log(`Error deleting task` , error);
        res.sendStatus(500)
    });
});

module.exports = router;
