import { Router } from "express";
import { getAllPlayers, getOnePlayer } from "../controllers/players.controllers";

const router = Router();

router.get('/get-all-players', getAllPlayers);
router.get('/get-player/:id', getOnePlayer);

export default router;