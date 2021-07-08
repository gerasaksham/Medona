import express from 'express'
import medicines from './data/medicines.js'
import stores from './data/stores.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
dotenv.config()
connectDB()


const app = express()


app.get('/api/medicines', (req, res) => {
    res.json(medicines)
})

app.get('/api/stores', (req, res) => {
    res.json(stores)
})
app.listen(5000, console.log('Server running on port 5000'))