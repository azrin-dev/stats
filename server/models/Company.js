const mongoose = require('mongoose');
const schema = mongoose.Schema;
const validator = require('validator');


const companySchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now()
    },
    name: {
        type: String,
        lowercase: true,
        trim: true
    },
    registration: {
        type: String,
        lowercase: true,
        trim: true
    },
    phone: {
        type: Number,
        trim: true
    },
    text: {
        type: String,
        trim: true
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

module.exports = mongoose.model('Company', companySchema);