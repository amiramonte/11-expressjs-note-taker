// IMPORTS
const router = require('express').Router();
const fs = require('fs');
const {uuid} = require('uuidv4');

const db = require('../db/db.json');

// GET route for information in db.json so that it populates on page
router.get('/notes', (req,res) => {
    res.json(db)
});


// POST route to take in information added to webpage by user, write db.json with previously existing information and the newly added information
router.post('/notes', (req,res) => {
    const {title, text} = req.body;
    const newNote = {
        title,
        text,
        id: uuid()
    };
    db.push(newNote);
    fs.writeFileSync("db/db.json", JSON.stringify(db));
    res.json(db);
});


router.delete('/notes/:id', (req,res) => {
    const id = req.params.id;
    console.log('id', id);
    const udpatedDb = db.filter(note => note.id!==id);
    fs.writeFileSync("db/db.json", JSON.stringify(udpatedDb));
    res.json(udpatedDb);
});




module.exports = router;