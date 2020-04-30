const SupermarketController = require('./controllers/supermarketController.js');
const FridgeController = require('./controllers/fridgeController');

class Router{
    constructor(server) {
        this.server = server;
        this.supermarketRouter = new SupermarketController();
        this.fridgeRouter = new FridgeController();
    }

    connect() {
        this.supermarketRequests();
        this.fridgeRequests();
    }

    supermarketRequests() {
        this.server.route({
            method: 'GET',
            path:'/supermarket/all',
            handler: this.supermarketRouter.getAll.bind(this.supermarketRouter)
        });

        this.server.route({
            method: 'POST',
            path:'/supermarket/add',
            handler: this.supermarketRouter.add.bind(this.supermarketRouter)
        });

        this.server.route({
            method: 'POST',
            path:'/supermarket/getOne',
            handler: this.supermarketRouter.getOne.bind(this.supermarketRouter)
        });
    }

    fridgeRequests() {
        this.server.route({
            method: 'GET',
            path:'/fridge/all',
            handler: this.fridgeRouter.getAll.bind(this.fridgeRouter)
        });

        this.server.route({
            method: 'POST',
            path:'/fridge/add',
            handler: this.fridgeRouter.add.bind(this.fridgeRouter)
        });

        this.server.route({
            method: 'POST',
            path:'/fridge/getOne',
            handler: this.fridgeRouter.getOne.bind(this.fridgeRouter)
        });

        this.server.route({
            method: 'POST',
            path:'/fridge/delete',
            handler: this.fridgeRouter.delete.bind(this.fridgeRouter)
        });

        this.server.route({
            method: 'POST',
            path:'/fridge/update',
            handler: this.fridgeRouter.update.bind(this.fridgeRouter)
        });
    }
}

module.exports = Router;
