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
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("../models/Player");
class Auth {
    constructor(email, password, firstName, lastName, date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.date = date;
        this.password = password;
    }
    ;
    register() {
        return __awaiter(this, void 0, void 0, function* () {
            const player = yield new Player_1.Player({
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                date: this.date,
                password: yield Player_1.Player.encryptPassword(this.password)
            });
            const savePlayer = yield player.save();
        });
    }
    ;
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            // Check if the player exists with the email
            const playerDB = yield Player_1.Player.findOne({ email: this.email });
            if (!playerDB) {
                return 'Wrong email';
            }
            ;
            const validPassword = yield Player_1.Player.comparePassword(this.password, playerDB.password);
            if (!validPassword) {
                return 'Wrong password';
            }
            ;
        });
    }
    ;
}
;
exports.default = Auth;
