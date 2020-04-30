const {Schema, model} = require("mongoose");

const supermarketSchema = new Schema({
    name: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    energy: {
        type: Number,
        default: 2
    },
    cost: {
        type: Number,
        default: 5
    },
    img: {
        data: String, contentType: String
    }
});

module.exports = {
    schema: supermarketSchema,
    model: model("Supermarket", supermarketSchema),
};
