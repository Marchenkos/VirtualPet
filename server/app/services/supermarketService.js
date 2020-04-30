const fs = require('fs');
const path = require('path');

const SupermarketRepository = require('../repositories/supermarketRepository');
const CONSTANTS = require('../constants');

class SupermarketService{
    constructor() {
        this.repository = new SupermarketRepository();
    }

    async getAll() {
        return await this.repository.get({});
    }

    async getOne(condition) {
        return await this.repository.get(condition);
    }

    async add(value) {
        const filePath = path.join(CONSTANTS.IMG_DIR_PATH, value.name + '.png')
        const bitmap = fs.readFileSync(filePath);
        const img = {
            data: new Buffer(bitmap).toString('base64'),
            contentType: 'image/png',
        };
        value.img = img;

        return await this.repository.addProduct(value);
    }
}

module.exports = SupermarketService;
