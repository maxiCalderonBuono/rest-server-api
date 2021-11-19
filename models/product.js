const {Schema, model } = require ('mongoose');

const ProductSchema = Schema ({
    nombre: {
        type: String,
        required: [true, 'name is mandatory'],
        unique: true
    },

    state: {
        type: Boolean,
        default: true
    },

    price: {
        type: Number,
        default: 0
    },

    description: {
        type: String,
    }
})

module.exports = model('product', ProductSchema)