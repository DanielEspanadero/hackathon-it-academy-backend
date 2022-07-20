import { Request, Response } from "express";
import GetPlayers from "../helpers/getPlayers";

// TODO Get all players ✅
// TODO Get one player ✅
// TODO Change player name

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