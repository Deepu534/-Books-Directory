const express = require('express')
const morgan = require('morgan')
const mongoose = require('./config/database.js')
const pkg = require('./package.json')

const authroutes = require('./routes/auth.routes')
const bookroutes = require('./routes/books.route')

const app = express()
    //DB settings
mongoose.connection.on('error', console.error.bind(console, 'DB Connection Error'))
    //set
app.set('pkg', pkg)
    //middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes
app.use('/api/auth', authroutes)
app.use('/api/books', bookroutes)
    //welcome route
app.get('/', (req, res) => {
    res.json({
        author: app.get('pkg').author,
        name: app.get('pkg').name,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.listen(5000, () => {
    console.log('server running on port : 5000')


})