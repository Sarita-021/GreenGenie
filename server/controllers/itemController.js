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
        console.log("skdjfkls")
        const username = req.body.Username;
        const User = await UserModel.findOne({ username: username });
        console.log(User)
        const Sold_by = req.body.fullname;
        const Product_Name = req.body.Product_Name;
        const Item_Size = req.body.Item_Size;
        const Item_Category = req.body.Item_Category;
        const Brand_name = req.body.Brand_name;
        const Fabric = req.body.Fabric;
        const Item_Price = req.body.Item_Price;
        const Item_Quality = req.body.Item_Quality;
        const Item_Motive = req.body.Item_Motive;
        const Other_Details = req.body.itemdescription;
        const itemImages = [];
        const itemImage = req.body.itemImages;
        // console.log(itemImage)
        // // filename: ,
        // console.log(req.body, req.body.itemImages);
        // for (var i = 0; i < req.files.length; i++) {
        //     itemImages.push(req.files[i].filename)
        // }
        // console.log(itemImages)
        // validation 

        const newItem = new itemModel({ username, Sold_by, Product_Name, Item_Size, Item_Category, Brand_name, Fabric, Item_Price, Item_Quality, Item_Motive, Other_Details, itemImage });
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
            Item.Product_Name = req.body.Product_Name || Item.Product_Name;
            Item.Item_Size = req.body.Item_Size || Item.Item_Size;
            Item.itemCategory = req.body.itemCategory || Item.itemCategory;
            Item.Item_Category = req.body.Item_Category || Item.Item_Category;
            Item.Brand_name = req.body.Brand_name || Item.Brand_name;
            Item.Fabric = req.body.Fabric || Item.Fabric;
            Item.Item_Price = req.body.Item_Price || Item.Item_Price;
            Item.Item_Quality = req.body.Item_Quality || Item.Item_Quality;
            Item.Item_Motive = req.body.Item_Motive || Item.Item_Motive;
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