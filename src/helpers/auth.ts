import { Player } from "../models/Player";
import bcryptjs from 'bcryptjs';

class Auth {

    private firstName: string;
    private lastName: string;
    private email: string;
    private date: Date;
    private password: string;

    constructor(firstName: string, lastName: string, email: string, date: Date, password: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.date = date;
        this.password = password;
    };

    async register() {

        const salt = bcryptjs.genSaltSync(10);

        const player = await new Player({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            date: this.date,
            password: bcryptjs.hashSync(this.password, salt)
        });

        const savePlayer = await player.save();        
    };

    login(){

    }

};

export default Auth;