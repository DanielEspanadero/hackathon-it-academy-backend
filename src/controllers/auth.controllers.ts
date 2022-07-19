import { Request, Response } from "express";
import Auth from "../helpers/auth";

export const register = async (req: Request, res: Response) => {    
    try {
        const { firstName, lastName, email, password } = req.body;

        const player = new Auth(firstName, lastName, email, password);

        player.register();

        res.status(201).json({
            player
        });
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            msg: 'Error 500 - Internal Server Error'
        });    
    };
};

export const login = () => {

};