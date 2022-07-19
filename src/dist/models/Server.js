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
const config_1 = require("../db/config");
const error404_routes_1 = __importDefault(require("../routes/error404.routes"));
class Server {
    constructor() {
        this.path = {
            error404: '/*'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        this.dbConnect();
        this.routes();
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.connectDB)();
        });
    }
    routes() {
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
