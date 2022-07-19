import { Schema, model, SchemaDefinition } from "mongoose";

export interface IPlayer {
    name: string,
    date: string,
    totalGames: number,
    gamesWon: number,
    wonRate: number,
    playHistory: object
}

const PlayerSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'Name is required']
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