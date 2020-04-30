const fridge = require('../models/fridge.model');

class FridgeRepository{
    constructor() {
        this.model = fridge.model;
    }

    async get(condition) {
        const productsList = await this.model.find(condition);

        return productsList ? productsList : null;
    }

    async addProduct(value) {
        try {
            const result = await this.model.create(value);

            return result;
        }
        catch(err) {
            return false;
        }
    }

    async delete(condition) {
        try {
            return await this.model.findOneAndDelete(condition)
        }
        catch(err) {
            return false;
        }
    }

    async update(name, newParameters) {
        try {
            return await this.model.findOneAndUpdate(name, newParameters);
        }
        catch(err) {
            return false;
        }
    }
}

module.exports = FridgeRepository;
