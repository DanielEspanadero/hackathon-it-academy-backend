import express, { Application } from 'express';
import config from '../config';
import cors from 'cors';

import { connectDB } from '../db/connect';

// Import of routes
import routerAuth from '../routes/auth.routes';
import routerPlayers from '../routes/players.routes';
import routerGames from '../routes/diceGame.routes';
import routerError404 from '../routes/error404.routes';

class Server {

    private app: Application;
    private port: string;
    private path = {
        error404: '/*',
        auth: '/auth',
        players: '/players',
        games: '/games'
    }

    constructor() {
        this.app = express();
        this.port = config.port as string;

        this.dbConnect();
        this.middlewares();
        this.routes();
    }

    async dbConnect() {
        await connectDB();
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors({
            "origin": "*",
            "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
            "preflightContinue": false,
            "optionsSuccessStatus": 204
        }));
    }

    routes() {
        this.app.use(this.path.auth, routerAuth);
        this.app.use(this.path.players, routerPlayers);
        this.app.use(this.path.games, routerGames);
        this.app.use(this.path.error404, routerError404);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listenner on port ${this.port} 👂`);

        });
    };
};

export default Server;