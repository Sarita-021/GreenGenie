
const express = require('express');
const router = express.Router();
const multer = require('multer')
const upload = multer({ dest: 'images/' })


const { getAllController, getOneController, newItemController, updateItemController, deleteItemController } = require('../controllers/itemController');

router.get("/item", getAllController);

router.get("/item/:id", getOneController);

router.post("/addItem", upload.single('itemImages'), newItemController);

router.put("/item/:id", updateItemController);

router.delete("/item/:id", deleteItemController);

module.exports = router