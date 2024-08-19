const mongoose = require('mongoose');

const disasterSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    first_steps: {
        type: [String],
        required: true
    },
    dos: {
        type: [String],
        required: true
    },
    donts: {
        type: [String],
        required: true
    },
    resources: {
        type: [String],
        required: true
    }

})

module.exports=mongoose.model('Disaster',disasterSchema);