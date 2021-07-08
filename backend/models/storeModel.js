import mongoose from "mongoose";

const storeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    composition: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestanps: true })

const Store = mongoose.model('Store', storeSchema)

export default Medicine