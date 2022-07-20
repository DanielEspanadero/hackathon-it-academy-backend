"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("../models/Player");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class Auth {
    constructor(firstName, lastName, email, date, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.date = date;
        this.password = password;
    }
    ;
    register() {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = bcryptjs_1.default.genSaltSync(10);
            const player = yield new Player_1.Player({
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                date: this.date,
                password: bcryptjs_1.default.hashSync(this.password, salt)
            });
            const savePlayer = yield player.save();
        });
    }
    ;
    login() {
    }
}
;
exports.default = Auth;
