const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BoxSchema = new Schema({
    theme: {
        required: true,
        type: String,
    },
    description: String,
    selected: {
        type: Boolean,
        default: false,
    },
    imgUrl: String,
    
})
module.exports = mongoose.model('Box', BoxSchema)
