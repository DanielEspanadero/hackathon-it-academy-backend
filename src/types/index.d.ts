import express from 'express';

declare global {
    namespace Express {
        interface Request {
            user?: Record<string, any>
            userId?: Record<string, any>
            uid?: string
        };
    };
};