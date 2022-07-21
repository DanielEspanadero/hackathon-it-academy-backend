"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rollDices = void 0;
// Dice game logic.
const rollDices = () => {
    const dice_1 = Math.floor(6 * Math.random()) + 1;
    const dice_2 = Math.floor(6 * Math.random()) + 1;
    const veredict = dice_1 + dice_2 === 7 ? 'win' : 'lose';
    return {
        dice_1,
        dice_2,
        rollScore: dice_1 + dice_2,
        veredict
    };
};
exports.rollDices = rollDices;
