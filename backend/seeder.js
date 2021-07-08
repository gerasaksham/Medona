import mongoose from 'mongoose'
import medicines from './data/medicines.js'
import Medicine from './models/medModel.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Medicine.deleteMany()

        await Medicine.insertMany(medicines)

        console.log('Data Imported!!!')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

importData()