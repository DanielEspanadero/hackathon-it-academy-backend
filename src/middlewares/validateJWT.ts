import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const accesToken: any = req.header('authorization') || req.query.accesstoken;
        if (!accesToken) {
            res.status(400).json({ msg: 'Access denied' });
        };
        jwt.verify(accesToken, config.jwtSecret as string)
    } catch (error) {
        res.status(400).json({
            msg: 'Access denied, token expired or incorrect.'
        });
    };
    next();
};