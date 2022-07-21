"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const error404_controllers_1 = require("../controllers/error404.controllers");
const router = (0, express_1.Router)();
// Routes to display the 404 error.
router.get('*', error404_controllers_1.error404);
router.post('*', error404_controllers_1.error404);
router.put('*', error404_controllers_1.error404);
router.patch('*', error404_controllers_1.error404);
router.delete('*', error404_controllers_1.error404);
exports.default = router;
