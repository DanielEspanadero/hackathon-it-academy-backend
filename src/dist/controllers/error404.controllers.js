"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error404 = void 0;
// Controller that returns a json with the 404 error.
const error404 = (req, res) => {
    try {
        res.status(404).json({
            msg: 'Error 404 - Page not found'
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Error 500 - Internal Server Error'
        });
    }
    ;
};
exports.error404 = error404;
