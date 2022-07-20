"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("../config"));
const connect_1 = require("../db/connect");
// Import of routes
const auth_routes_1 = __importDefault(require("../routes/auth.routes"));
const players_routes_1 = __importDefault(require("../routes/players.routes"));
const diceGame_routes_1 = __importDefault(require("../routes/diceGame.routes"));
const error404_routes_1 = __importDefault(require("../routes/error404.routes"));
class Server {
    constructor() {
        this.path = {
            error404: '/*',
            auth: '/auth',
            players: '/players',
            games: '/games'
        };
        this.app = (0, express_1.default)();
        this.port = config_1.default.port;
        this.dbConnect();
        this.middlewares();
        this.routes();
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, connect_1.connectDB)();
        });
    }
    middlewares() {
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.path.auth, auth_routes_1.default);
        this.app.use(this.path.players, players_routes_1.default);
        this.app.use(this.path.games, diceGame_routes_1.default);
        this.app.use(this.path.error404, error404_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listenner on port ${this.port} 👂`);
        });
    }
    ;
}
;
exports.default = Server;
