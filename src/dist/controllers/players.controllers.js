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
exports.getOnePlayer = exports.getAllPlayers = void 0;
const getPlayers_1 = __importDefault(require("../helpers/getPlayers"));
// TODO Get all players ✅
// TODO Get one player ✅
// TODO Change player name
const getAllPlayers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllPlayers = yield getPlayers_1.default.getAllPlayers();
        res.status(201).json({
            getAllPlayers
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error 500 - Internal Server Error'
        });
    }
    ;
});
exports.getAllPlayers = getAllPlayers;
const getOnePlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const player = yield new getPlayers_1.default(id);
        const getPlayer = yield player.getOnePlayer();
        res.status(201).json({
            getPlayer
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'Player not found - The ID entered is not valid.'
        });
    }
    ;
});
exports.getOnePlayer = getOnePlayer;
