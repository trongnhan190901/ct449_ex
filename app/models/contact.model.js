const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Contact name is required"]
    },
    email: {
        type: String,
        trim: true,
        LowerCase: true,
    },
    address: String,
    phone: String,
    favorite: String,
}, { timestamp: true })

schema.method('toJSON', function() {
    const { __v, _id, ...objects } = this.toObject()
    objects.id = _id
    return objects
})

module.exports = mongoose.model('contact', schema)