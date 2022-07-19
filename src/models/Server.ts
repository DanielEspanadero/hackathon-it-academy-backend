import express, { Application } from 'express';
import config from '../config';

import { connectDB } from '../db/config';

// Import of routes
import routerAuth from '../routes/auth.routes';
import routerError404 from '../routes/error404.routes';

class Server {

    private app: Application;
    private port: number;
    private path = {
        error404: '/*',
        auth: '/auth'
    }

    constructor() {
        this.app = express();
        this.port = config.port;

        this.dbConnect();
        this.middlewares();
        this.routes();
    }

    async dbConnect() {
        await connectDB();
    }

    middlewares(){
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.path.auth, routerAuth);
        this.app.use(this.path.error404, routerError404);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listenner on port ${this.port} 👂`);

        });
    };
};

export default Server;