const supermarket = require('../models/supermarket.model');

class SupermarketRepository{
    constructor() {
        this.model = supermarket.model;
    }

    async get(condition) {
        const productsList = await this.model.find(condition);

        return productsList.length > 0 ? productsList : null;
    }

    async addProduct(value) {
        try {
            const result = await this.model.create(value)
     
            return result;
        }
        catch(err) {
            return false;
        }
    }
}

module.exports = SupermarketRepository;
