const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    itemFashion: {
        type: String,
        required: true,
        enum: ['casual', 'ethical wear', 'jeans', 'shirt', 'suit', 'saree', 'pants',],
    },
    itemSize: {
        type: String,
        required: true,
    },
    itemCategory: {
        type: String,
        required: true,
    },
    itemGender: {
        type: String,
        required: true,
        enum: ['kids', 'men', 'women'],
    },
    itemBrand: {
        type: String,
        required: true,
    },
    itemFabric: {
        type: String,
        required: true,
    },
    itemPriceRange: {
        type: String,
        required: true,
    },
    itemQuality: {
        type: String,
        required: true,
        enum: ['brand new', 'old', 'good'],
    },
    itemMotive: {
        type: String,
        required: true,
        enum: ['donate', 'sell', 'recycle'],
    },
    // Additional fields for images, descriptions, etc.
    itemImages:
    {
        type: Array,
        details:
        {
            filename: {
                type: String
            },
            originalname: {
                type: String
            },
            path: {
                type: String
            }
        },
        contentType: String
    },

    itemDescription: {
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