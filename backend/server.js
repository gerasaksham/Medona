const express = require('express')
const medicines = require('./data/medicines.js')

const app = express()
app.get('/api/medicines', (req, res) => {
    res.json(medicines)
})
app.listen(5000, console.log('Server running on port 5000'))