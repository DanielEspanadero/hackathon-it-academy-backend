"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const players_controllers_1 = require("../controllers/players.controllers");
const router = (0, express_1.Router)();
router.get('/get-all-players', players_controllers_1.getAllPlayers);
router.get('/get-player/:id', players_controllers_1.getOnePlayer);
exports.default = router;
