import { Request, Response } from 'express';
import RollGame from '../helpers/diceGame';

export const playerRollDices = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const game = await new RollGame(id);

        const playerRollDices = await game.playerRollDices();

        res.status(201).json({
            playerRollDices
        });

    } catch (error) {
        res.status(400).json({
            msg: 'The ID entered is not valid.'
        });
    };
};

export const generalRanking = async (req: Request, res: Response) => {
    try {
        const ranking = await RollGame.generalRanking();

        res.status(201).json({
            ranking
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error 500 - Internal Server Error.'
        });
    };
};

export const getBetterPlayer = async (req: Request, res: Response) => {
    try {
        const betterPlayer = await RollGame.getBetterPlayer();

        res.status(201).json({
            betterPlayer
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error 500 - Internal Server Error.'
        });
    };
};

export const getWorstPlayer = async (req: Request, res: Response) => {
    try {
        const worstPlayer = await RollGame.getWorstPlayer();

        res.status(201).json({
            worstPlayer
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error 500 - Internal Server Error.'
        });
    };
};

export const deleteGames = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const player = await new RollGame(id);

        const deleteGames = await player.deleteGames();

        res.status(201).json({
            msg: 'Player games deleted successfully.',
            deleteGames
        });
    } catch (error) {
        res.status(400).json({
            msg: 'The ID entered is not valid.'
        });
    };
};