import { Router } from "express";
import { playerRollDices } from "../controllers/diceGame.controllers";

const router = Router();

router.post('/player/:id', playerRollDices);

export default router;