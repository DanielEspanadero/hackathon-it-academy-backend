import { Router } from 'express';

import { validateToken } from '../middlewares/validateJWT';
import { 
    getAllPlayers, 
    getOnePlayer, 
    updateName, 
    deletePlayer
 } from '../controllers/players.controllers';



const router = Router();

// Routes related to player manipulation.
router.get('/get-all-players', validateToken, getAllPlayers);
router.get('/get-player/:id', validateToken, getOnePlayer);
router.put('/update-player/:id', validateToken, updateName);
router.delete('/delete-player/:id', validateToken, deletePlayer);

export default router;