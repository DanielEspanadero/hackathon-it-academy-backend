"use strict";
// This file is the beginning of the project, to which we import the model of the server made in express based on classes.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = __importDefault(require("./models/Server"));
const server = new Server_1.default();
server.listen();
