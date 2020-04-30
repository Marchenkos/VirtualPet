const FridgeService = require('../services/fridgeService');

class FridgeController{
    constructor() {
        this.service = new FridgeService();
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

    async delete(request, h) {
        const productName = request.payload.name;
        const result = await this.service.delete({ name: productName });

        return result ? result : 'Fail';
    }

    async update(request, h) {
        const productName = request.payload.name;
        const newParameters = request.payload.parameters;

        const result = await this.service.update(productName, newParameters);

        return result ? result : 'Fail';
    }
}

module.exports = FridgeController;
