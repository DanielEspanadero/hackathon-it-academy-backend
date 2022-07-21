"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateJWT_1 = require("../middlewares/validateJWT");
const players_controllers_1 = require("../controllers/players.controllers");
const router = (0, express_1.Router)();
// Routes related to player manipulation.
router.get('/get-all-players', validateJWT_1.validateToken, players_controllers_1.getAllPlayers);
router.get('/get-player/:id', validateJWT_1.validateToken, players_controllers_1.getOnePlayer);
router.put('/update-player/:id', validateJWT_1.validateToken, players_controllers_1.updateName);
router.delete('/delete-player/:id', validateJWT_1.validateToken, players_controllers_1.deletePlayer);
exports.default = router;
