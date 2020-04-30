const fs = require('fs');

const FridgeRepository = require('../repositories/fridgeRepository');
const SupermarketRepository = require('../repositories/supermarketRepository');

class FridgeService{
    constructor() {
        this.fridgeRepository = new FridgeRepository();
        this.supermarketRepository = new SupermarketRepository();

    }

    async getAll() {
        return await this.fridgeRepository.get({});
    }

    async getOne(condition) {
        return await this.fridgeRepository.get(condition);
    }

    async add(value) {
        const product = await this.supermarketRepository.get({name: value.name});

        const productModel = {
            name: value.name,
            product,
            count: value.count,
        };

        console.log(productModel);

        return await this.fridgeRepository.addProduct(productModel);
    }

    async delete(condition) {
        return await this.fridgeRepository.delete(condition);
    }

    async update(name, newParameters) {
        const product = await this.fridgeRepository.get({ name: name });

        if (product.count > 1 || product.count < newParameters.count) {
            return await this.fridgeRepository.update(name, newParameters);
        }

        return await this.fridgeRepository.delete({ name: name });
    }
}

module.exports = FridgeService;
