import { Request, Response } from "express";
import Auth from "../helpers/auth";

export const register = async (req: Request, res: Response) => {    
    try {
        const { firstName, lastName, email, password } = req.body;
        const date = new Date();
        const player = new Auth(firstName, lastName, email, date, password);
        player.register();
        res.status(201).json({
            firstName,
            lastName,
            email,
            date
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