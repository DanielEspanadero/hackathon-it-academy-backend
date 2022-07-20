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

        player.totalGames ++;

        if(game.veredict === 'win'){
            player.gamesWon ++;
        };

        player.playHistory.push(game);

        player.wonRate = parseFloat(((player.gamesWon / player.totalGames) * 100).toFixed(2));

        await player.save();

        return player;
    };
};

export default RollGame;