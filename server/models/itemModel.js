const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    Sold_by: {
        type: String,
        required: true
    },
    Purchased_by: {
        type: String,
    },
    Product_Name: {
        type: String,
        required: true,
    },
    Item_Size: {
        type: String,
        required: true,
    },
    Item_Category: {
        type: String,
        required: true,
        enum: ["Kid's", "Men's", "Women's"],
    },
    Brand_name: {
        type: String,
    },
    Fabric: {
        type: String,
        required: true,
    },
    Item_Price: {
        type: String,
        required: true,
    },
    Item_Quality: {
        type: String,
        required: true,
        enum: ['Brand New', 'Old', 'Good'],
    },
    Item_Motive: {
        type: String,
        required: true,
        enum: ['Donate', 'Sell', 'Recycle'],
    },
    // Additional fields for images, descriptions, etc.
    itemImages:
    {
        type: Array,
        required: true
    },

    Other_Details: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const itemModel = mongoose.model('Item', itemSchema);
module.exports = itemModel;