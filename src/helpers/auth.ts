import { Player } from "../models/Player";

class Auth {

    private firstName: string;
    private lastName: string;
    private email: string;
    private password: string;

    constructor(firstName: string, lastName: string, email: string, password: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    };

    async register() {
        const player = await new Player({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
        });

        const savePlayer = await player.save();        

        console.log(savePlayer);
        
    };

    login(){

    }

};

export default Auth;