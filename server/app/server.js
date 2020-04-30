const Hapi = require('@hapi/hapi');

const serverConfig = require('./config/server.config');
const DataBase = require('./db');
const Router = require('./router');

class Server {
    constructor() {
        this.server = Hapi.server(serverConfig);
    }

    async start() {
        this.connectDB();
        this.connectRouters();

        this.server.route({
            method: 'GET',
            path:'/hello',
            handler: (request, h) => {
        
              return 'Hello World!';
            }
        });

        await this.server.start();
        console.log('Server running on %s', this.server.info.uri);
    }

    connectDB() {
        const db = new DataBase();
        db.connect();
    }

    connectRouters() {
        const router = new Router(this.server);

        router.connect();
    }
}

module.exports = Server;
