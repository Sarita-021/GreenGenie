const itemModel = require('../models/itemModel');
const path = require('path');
const fs = require('fs');

// create item 
const express = require('express');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const { UserModel } = require("../models/usermodel");


// Create a new item
exports.newItemController = async (req, res, next) => {
    try {
        const username = req.body.Username;
        const User = await UserModel.findOne({ username: username });
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
        console.log(req.body, req.file);
        // validation 

        const newItem = new itemModel({ username, itemFashion, itemSize, itemCategory, itemGender, itemBrand, itemFabric, itemPriceRange, itemQuality, itemMotive, itemDescription, itemImages });
        console.log(newItem);
        const savedItem = await newItem.save();
        return res.status(201).send({
            success: true,
            message: 'New item Created'
        })
        // res.status(201);
    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(400).json({ message: 'error in backend' });
    }
};

// Get all for a specific user items

exports.userItems = async (req, res) => {
    const username = req.params.username;
    console.log(username)
    try {
        const user = await itemModel.find({ username: username });
        if (user) {
            const items = await itemModel.find();
            console.log(items)
            return res.status(201).send({
                success: true,
                item: items
            })
        } else {
            return res.status(201).send({
                success: true,
                message: 'No item found'
            })
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

// get details of all items 

exports.AllItems = async (req, res) => {
    try {
        const items = await itemModel.find();
        if (items) {
            return res.status(201).send({
                success: true,
                item: items
            })
        } else {
            return res.status(201).send({
                success: true,
                msg: "no item find"
            })
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Update an item

exports.updateItemController = async (req, res) => {
    try {
        const id = req.body._id;
        const Item = await itemModel.findOne({ _id: id });
        if (!Item) {
            Item.itemFashion = req.body.itemFashion || Item.itemFashion;
            Item.itemSize = req.body.itemSize || Item.itemSize;
            Item.itemCategory = req.body.itemCategory || Item.itemCategory;
            Item.itemGender = req.body.itemGender || Item.itemGender;
            Item.itemBrand = req.body.itemBrand || Item.itemBrand;
            Item.itemFabric = req.body.itemFabric || Item.itemFabric;
            Item.itemPriceRange = req.body.itemPriceRange || Item.itemPriceRange;
            Item.itemQuality = req.body.itemQuality || Item.itemQuality;
            Item.itemMotive = req.body.itemMotive || Item.itemMotive;
            Item.itemdescription = req.body.itemdescription || Item.itemdescription;
        }
        const updatedItem = await user.save();
        if (!Item) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(201).json({
            success: true,
            message: "Profile updated successfully",
            data: updatedUser,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete an item
exports.deleteItemController = async (req, res) => {
    try {
        const deletedItem = await itemModel.findByIdAndDelete(req.body._id);
        if (!deletedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        return res.status(404).json({ message: 'Item Deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};


module.exports.upload