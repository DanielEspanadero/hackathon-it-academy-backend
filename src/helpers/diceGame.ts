import { IPlayer } from "../interfaces/IPlayer";
import { Player } from "../models/Player";
import { rollDices } from "./dices";

class RollGame {

    private id: string;

    constructor(id: string) {
        this.id = id;
    };

    async playerRollDices() {
        const game = rollDices();

        const player = await Player.findById({ _id: this.id }) as IPlayer;

        player.totalGames++;

        if (game.veredict === 'win') {
            player.gamesWon++;
        };

        player.playHistory.push(game);

        player.wonRate = parseFloat(((player.gamesWon / player.totalGames) * 100).toFixed(2));

        await player.save();

        return {
            id: player._id,
            firstName: player.firstName,
            lastName: player.lastName,
            email: player.email,
            totalGames: player.totalGames,
            gamesWon: player.gamesWon,
            wonRate: player.wonRate,
            playHistory: player.playHistory
        };
    };

    static async generalRanking() {
        const players = await Player.find({}).sort({wonRate: -1});

        return players;
    };

    static async getBetterPlayer() {
        const players = await Player.find({});
        let max = 0;
        players.forEach(player =>
            player.wonRate > max ? max = player.wonRate : null);
        const betterPlayer = await Player.findOne({ wonRate: max });

        return betterPlayer;
    };

    getWorstPlayer() {

    };
};

export default RollGame;