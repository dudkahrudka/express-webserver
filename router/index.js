const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main')

router.get('/', mainController.index)
router.get('/produkty', mainController.produkty)
router.get('/galeria', mainController.galeria)
router.get('/kontakt', mainController.kontakt)
router.get('/posts/:id', mainController.posts)



module.exports = router
