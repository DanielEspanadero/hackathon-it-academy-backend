import { Request, Response } from 'express'

// Controller that returns a json with the 404 error.
export const error404 = (req: Request, res: Response) => {
    try {
        res.status(404).json({
            msg: 'Error 404 - Page not found'
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Error 500 - Internal Server Error'
        });
    };
};