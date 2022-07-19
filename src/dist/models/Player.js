"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const mongoose_1 = require("mongoose");
const PlayerSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'Name is required']
    },
    date: String,
    totalGames: {
        type: Number,
        default: 0
    },
    gamesWon: {
        type: Number,
        default: 0
    },
    wonRate: {
        type: Number,
        default: 0
    },
    playHistory: [Object]
}, {
    versionKey: false
});
exports.Player = (0, mongoose_1.model)('Player', PlayerSchema);
