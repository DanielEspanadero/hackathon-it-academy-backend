import { Router } from 'express';

import { validateToken } from '../middlewares/validateJWT';
import { playerRollDices,
        generalRanking,
        getBetterPlayer,
        getWorstPlayer,
        deleteGames
 } from '../controllers/diceGame.controllers';

const router = Router();

// Routes related to the operation of the game.
router.post('/player/:id', validateToken, playerRollDices);
router.get('/ranking', validateToken, generalRanking);
router.get('/better-player', validateToken, getBetterPlayer);
router.get('/worst-player', validateToken, getWorstPlayer);
router.delete('/delete/:id', validateToken, deleteGames);

export default router;