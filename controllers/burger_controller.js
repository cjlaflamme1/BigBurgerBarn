const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get('/api/all', async function(req, res) {
    try {
        const burgers = await burger.selectAll();
        console.log(burgers);
        res.render("index", burgers);
    } 
    catch(err) {
        res.status(500).json(err);
    }
});

router.post('/api/burgers', async function(req, res) {
    try {
        const {column, value} = req.body;
        const newBurger = await burger.insertOne(column, value);
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
        const updatedBurger = await burger.updateOne(`devoured: ${req.body.devoured}`, id);
        if(updatedBurger.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    } catch(err) {
        console.error(err);
        res.status(500).json(err);
    }
})