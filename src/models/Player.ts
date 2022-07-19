import { Schema, model } from "mongoose";

export interface IPlayer {
    firstName: string,
    lastName: string,
    email: string,
    date: string,
    totalGames: number,
    gamesWon: number,
    wonRate: number,
    playHistory: object
}

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
        required: [true, 'Last name is required']
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

export const Player = model<IPlayer>('Player', PlayerSchema);