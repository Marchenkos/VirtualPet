const supermarket = require('./supermarket.model');
const {Schema, model} = require("mongoose");

const fridgeSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    product: Object,
    count: {
        type: Number,
        require: true
    }
});

module.exports = {
    schema: fridgeSchema,
    model: model("Fridge", fridgeSchema),
};
