const SupermarketService = require('../services/supermarketService');

class SupermarketController{
    constructor() {
        this.service = new SupermarketService();
    }

    async getAll(request, h) {
        const productList = await this.service.getAll();

        return productList ? productList : 'Collection is empty';
    }

    async getOne(request, h) {
        const productName = request.payload.name;
        const product = await this.service.getOne({ name: productName });

        return product ? product : 'This product is not exist';
    }

    async add(request, h) {
        const result = await this.service.add(request.payload);

        return result ? result : 'Fail';
    }
}

module.exports = SupermarketController;
