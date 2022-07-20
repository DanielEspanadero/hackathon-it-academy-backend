import { Schema, model, Model } from "mongoose";
import bcryptjs from 'bcryptjs';

import { IPlayer } from "../interfaces/IPlayer";
import { PlayerModel } from "../interfaces/IPlayerMethods";

const PlayerSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required']
    },
    email: {
        type: String,
        unique: true,
        match: [/.+\@.+\..+/, '** Email is invalid **'],
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    date: String,
    totalGames: {
        type: Number,
        default: 0
    },
    gamesWon: {
        type: Number,
        default: 0
    },
    wonRate: {
        type: Number,
        default: 0
    },
    playHistory: [Object]
},
    {
        versionKey: false
    }
);

PlayerSchema.static('encryptPassword', async (password: string) => {
    const salt = await bcryptjs.genSalt(10);
    return await bcryptjs.hash(password, salt)
});

PlayerSchema.static('comparePassword', async (password: string, receivedPassword: string) => {
    return await bcryptjs.compare(password, receivedPassword);
});


export const Player = model<IPlayer, PlayerModel>('Player', PlayerSchema);