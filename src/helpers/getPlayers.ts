import { Player } from "../models/Player";

class GetPlayers {

    private id: string

    constructor(id: string) {
        this.id = id;
    };

    static async getAllPlayers() {
        const players = await Player.find({});

        const response = players.map(player => {
            const obj = {
                id: player._id,
                firstName: player.firstName,
                lastName: player.lastName,
                wonRate: player.wonRate
            };
            return obj;
        });

        return response;
    };

    async getOnePlayer() {
        const player = await Player.findById({_id: this.id});

        // if(player === undefined) return false;
        console.log(player);
        

        return {
            firstName: player?.firstName,
            lastName: player?.lastName,
            playHistory: player?.playHistory
        };
    };
};

export default GetPlayers;