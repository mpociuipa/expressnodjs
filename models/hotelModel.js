const mongoose = require('mongoose');

const hotelShema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A hotel must have name']
    },
    address: {
        type: String,
        required: [true, 'A hotel must have address']
    },
    ranking: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: [true, 'A hotel must have price']
    }
});

const Hotel = mongoose.model('Hotel', hotelShema);

module.exports = Hotel;