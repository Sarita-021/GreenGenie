const itemModel = require('../models/itemModel');
const path = require('path');
const fs = require('fs');

// create item 
const express = require('express');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })



// Create a new item
exports.newItemController = async (req, res, next) => {
    try {

        const itemFashion = req.body.itemFashion;
        const itemSize = req.body.itemSize;
        const itemCategory = req.body.itemCategory;
        const itemGender = req.body.itemGender;
        const itemBrand = req.body.itemBrand;
        const itemFabric = req.body.itemFabric;
        const itemPriceRange = req.body.itemPriceRange;
        const itemQuality = req.body.itemQuality;
        const itemMotive = req.body.itemMotive;
        const itemDescription = req.body.itemdescription;
        const itemImages = {
            details: {
                filename: req.file.filename,
                originalname: req.file.originalname,
                path: req.file.path
            },
            contentType: 'image/png'
        }
        // const itemImages = req.file.itemImages;
        console.log(req.body, req.file);
        // validation 

        const newItem = new itemModel({ itemFashion, itemSize, itemCategory, itemGender, itemBrand, itemFabric, itemPriceRange, itemQuality, itemMotive, itemDescription, itemImages });
        console.log(newItem);
        const savedItem = await newItem.save();
        return res.status(201).send({
            success: true,
            message: 'New user Created'
        })
        // res.status(201);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'error in backend' });
    }
};

// Get all items
exports.getAllController = async (req, res) => {
    try {
        const items = await itemModel.find();
        res.json(items);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get a specific item
exports.getOneController = async (req, res) => {
    try {
        const item = await itemModel.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json(item);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};




// Update an item
exports.updateItemController = async (req, res) => {
    try {
        const updatedItem = await itemModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json(updatedItem);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete an item
exports.deleteItemController = async (req, res) => {
    try {
        const deletedItem = await itemModel.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json({ message: 'Item deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};


module.exports.upload