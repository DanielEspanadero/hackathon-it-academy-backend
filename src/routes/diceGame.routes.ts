import { Router } from "express";
import { playerRollDices,
        generalRanking
 } from "../controllers/diceGame.controllers";

const router = Router();

router.post('/player/:id', playerRollDices);
router.get('/ranking', generalRanking);

export default router;