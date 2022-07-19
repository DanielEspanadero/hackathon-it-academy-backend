import express, { Application } from 'express';

import { connectDB } from '../db/config';

import routerError404 from '../routes/error404.routes';

class Server {

    private app: Application;
    private port: string;
    private path = {
        error404: '/*'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT as string;

        this.dbConnect();
        this.routes();
    }

    async dbConnect() {
        await connectDB();
    }

    routes() {
        this.app.use(this.path.error404, routerError404);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listenner on port ${this.port} 👂`);

        });
    };
};

export default Server;