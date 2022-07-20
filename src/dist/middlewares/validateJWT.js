"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const validateToken = (req, res, next) => {
    try {
        const accesToken = req.header('authorization') || req.query.accesstoken;
        if (!accesToken) {
            res.status(400).json({ msg: 'Access denied' });
        }
        ;
        jsonwebtoken_1.default.verify(accesToken, config_1.default.jwtSecret);
    }
    catch (error) {
        res.status(400).json({
            msg: 'Access denied, token expired or incorrect.'
        });
    }
    ;
    next();
};
exports.validateToken = validateToken;
