const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get('/', async function(req, res) {
    try {
        const hbsObject = {burgers: await burger.selectAll()};
        console.log(hbsObject);
        res.render("index", hbsObject);
    } 
    catch(err) {
        res.status(500).json(err);
    }
});

router.post('/api/burgers', async function(req, res) {
    console.log(req.body);
    try {
        const {name} = req.body;
        const newBurger = await burger.insertOne(name);
        console.log(newBurger);
        res.json({id: newBurger.id})
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/api/burgers/:id', async function(req, res) {
    try {
        const id = `id = ${req.params.id}`;
        console.log(`You selected ${id}`);
        const updatedBurger = await burger.updateOne(`devoured= ${req.body.devoured}`, id);
        if(updatedBurger.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    } catch(err) {
        console.error(err);
        res.status(500).json(err);
    }
});

router.delete('/api/burgers/:id', async function (req, res) {
    try {
        const deletedBurger = await burger.delete(`id = ${req.params.id}`);
        if(deletedBurger.affectedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    } catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;