import { Request, Response } from "express";
import Auth from "../helpers/auth";

export const register = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const date = new Date();
        const player = new Auth(email, password, firstName, lastName, date);
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

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const player = new Auth(email, password);

        const login = await player.login(email, password);

        if (login === 'Wrong email') {
            return res.status(400).json({
                msg: 'The email address entered is not registered 😑'
            });
        };

        if (login === 'Wrong password') {
            return res.status(400).json({
                msg: 'Incorrect password 😑'
            });
        };

        res.status(201).json({
            msg: 'Successful authentication 🥳🎉🎊'
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error 500 - Internal Server Error'
        });
    };
};