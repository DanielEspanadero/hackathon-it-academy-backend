"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateJWT_1 = require("../middlewares/validateJWT");
const diceGame_controllers_1 = require("../controllers/diceGame.controllers");
const router = (0, express_1.Router)();
// Routes related to the operation of the game.
router.post('/player/:id', validateJWT_1.validateToken, diceGame_controllers_1.playerRollDices);
router.get('/ranking', validateJWT_1.validateToken, diceGame_controllers_1.generalRanking);
router.get('/better-player', validateJWT_1.validateToken, diceGame_controllers_1.getBetterPlayer);
router.get('/worst-player', validateJWT_1.validateToken, diceGame_controllers_1.getWorstPlayer);
router.delete('/delete/:id', validateJWT_1.validateToken, diceGame_controllers_1.deleteGames);
exports.default = router;
