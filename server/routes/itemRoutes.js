
const express = require('express');
const router = express.Router();
const multer = require('multer')
const upload = multer({ dest: 'images/' })


const { userItems, AllItems, newItemController, updateItemController, deleteItemController } = require('../controllers/itemController');

router.get("/:username", userItems);

router.get("/item/:username", AllItems);

router.post("/addItem", upload.single('itemImages'), newItemController);

router.put("/item/:id", updateItemController);

router.delete("/item/:id", deleteItemController);

module.exports = router