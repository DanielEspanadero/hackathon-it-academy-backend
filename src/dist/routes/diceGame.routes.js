"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const diceGame_controllers_1 = require("../controllers/diceGame.controllers");
const router = (0, express_1.Router)();
router.post('/player/:id', diceGame_controllers_1.playerRollDices);
router.get('/ranking', diceGame_controllers_1.generalRanking);
exports.default = router;
