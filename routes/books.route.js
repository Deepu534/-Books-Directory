const express = require('express')
const router = express.Router()
const bookCtr1 = require('../controller/book.controller.js')

const {
    verifyToken
} = require('../middleware/auth.token.js')
router.get('/', verifyToken, bookCtr1.findallbooks)
router.get('/:id', verifyToken, bookCtr1.findonebook)
router.post('/', verifyToken, bookCtr1.createbook)
router.put('/:id', verifyToken, bookCtr1.updatebook)
router.delete('/:id', verifyToken, bookCtr1.deletebook)
module.exports = router