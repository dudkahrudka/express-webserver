const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main')

router.get('/', mainController.index)
router.get('/produkty', mainController.produkty)
router.get('/galeria', mainController.galeria)


module.exports = router
