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
exports.deleteGames = exports.getWorstPlayer = exports.getBetterPlayer = exports.generalRanking = exports.playerRollDices = void 0;
const diceGame_1 = __importDefault(require("../helpers/diceGame"));
// Controller that allows us to manage when a player rolls.
const playerRollDices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const game = yield new diceGame_1.default(id);
        const playerRollDices = yield game.playerRollDices();
        res.status(201).json({
            playerRollDices
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'The ID entered is not valid.'
        });
    }
    ;
});
exports.playerRollDices = playerRollDices;
// Controller that allows us to obtain a ranking of all the players.
const generalRanking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ranking = yield diceGame_1.default.generalRanking();
        res.status(201).json({
            ranking
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Error 500 - Internal Server Error.'
        });
    }
    ;
});
exports.generalRanking = generalRanking;
// Controller that allows us to get the best player.
const getBetterPlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const betterPlayer = yield diceGame_1.default.getBetterPlayer();
        res.status(201).json({
            betterPlayer
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Error 500 - Internal Server Error.'
        });
    }
    ;
});
exports.getBetterPlayer = getBetterPlayer;
// Controller that allows us to get the worst player.
const getWorstPlayer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const worstPlayer = yield diceGame_1.default.getWorstPlayer();
        res.status(201).json({
            worstPlayer
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Error 500 - Internal Server Error.'
        });
    }
    ;
});
exports.getWorstPlayer = getWorstPlayer;
// Controller that allows us to delete all the moves of a player.
const deleteGames = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const player = yield new diceGame_1.default(id);
        const deleteGames = yield player.deleteGames();
        res.status(201).json({
            msg: 'Player games deleted successfully.',
            deleteGames
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'The ID entered is not valid.'
        });
    }
    ;
});
exports.deleteGames = deleteGames;
