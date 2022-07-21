import { IPlayer } from '../interfaces/IPlayer';
import { Player } from '../models/Player';

// Logic to update players.
class UpdatePlayerName {
    private id: string;
    private firstName: string;
    private lastName: string

    constructor(id: string, firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    };

    async updateName() {
        
        const update = {
            firstName: this.firstName,
            lastName: this.lastName
        }
        
        const player: IPlayer = await Player.findOneAndUpdate({_id: this.id}, update) as IPlayer;
        console.log(player);
        

        return player;
    };
};

export default UpdatePlayerName;