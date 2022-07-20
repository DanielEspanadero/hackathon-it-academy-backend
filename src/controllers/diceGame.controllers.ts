import { Request, Response } from 'express';
import RollGame from "../helpers/diceGame";

export const playerRollDices = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const game = await new RollGame(id);

        const playerRollDices = await game.playerRollDices();

        res.status(201).json({
            playerRollDices
        });

    } catch (error) {
        res.status(500).json({
            msg: 'Error 500'
        })
    }
};