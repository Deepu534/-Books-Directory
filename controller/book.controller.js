const book = require('../model/book.js')

exports.findallbooks = async(req, res) => {
    try {
        const books = await book.find()
        res.json(books)

    } catch (error) {
        res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}
exports.createbook = async(req, res) => {
    try {
        const newbook = new book({
            name: req.body.name,
            author: req.body.author,
            status: req.body.status
        })
        const booksaved = await newbook.save()
        res.json(booksaved)
    } catch (error) {
        res.status(500).json({
            message: error.message || "something went wrong with creating a book"
        })
    }
}

exports.findonebook = async(req, res) => {
    const { id } = req.params
    try {
        const current_book = await book.findById(id)
        if (!current_book) return res.status(404).json({
            message: `book with id ${id} does not exist 😒😒`

        })
        return res.status(200).send(current_book)

    } catch (error) {
        res.status(500).json({
            message: error.message || 'error while getting the book'
        })
    }
}

exports.deletebook = async(req, res) => {
    const { id } = req.params
    try {
        const data = await book.findByIdAndDelete(id)
        res.json({
            message: `${data.name} book is deleted sucessuly`
        })

    } catch (error) {
        res.status(500).json({
            message: `cannot delete the book with ${id}`
        })
    }
}

exports.updatebook = async(req, res) => {
    const { id } = req.params
    try {
        await book.findByIdAndUpdate(id, req.body)
        res.json({
            message: " book is updated sucessfully"
        })

    } catch (error) {
        res.status(500).json({
            message: `cannot update the book`
        })
    }
}