import { Request, Response } from 'express';
import GetPlayers from '../helpers/getPlayers';
import UpdatePlayerName from '../helpers/updatePlayerName';

// Controller that allows us to get all the players.
export const getAllPlayers = async (req: Request, res: Response) => {
    try {

        const getAllPlayers = await GetPlayers.getAllPlayers();

        res.status(201).json({
            getAllPlayers
        })
    } catch (error) {
        console.log(error);

        res.status(500).json({
            msg: 'Error 500 - Internal Server Error'
        });
    };
};

// Controller that allows us to obtain a player through his ID.
export const getOnePlayer = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const player = await new GetPlayers(id);
        const getPlayer = await player.getOnePlayer();

        res.status(201).json({
            getPlayer
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Player not found - The ID entered is not valid.'
        });
    };
};

// Controller that allows us to modify the first and last name of a player through their ID.
export const updateName = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const { firstName, lastName } = req.body;

        const updatePlayerName = await new UpdatePlayerName(id, firstName, lastName);

        const playerUpdated = await updatePlayerName.updateName();

        res.status(201).json({
            msg: 'Player updated',
            playerUpdated
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Error 500 - Internal Server Error'
        });
    };
};

// Controller that allows us to delete a player.
export const deletePlayer = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
    
        const player = await new GetPlayers(id);
    
        player.getAndDelete();

        res.status(201).json({
            msg: 'Player deleted',
            player
        })
        
    } catch (error) {
        res.status(400).json({
            msg: 'The ID entered is not valid.'
        });
    };
};