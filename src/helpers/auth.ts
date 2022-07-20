import { Player } from "../models/Player";

class Auth {

    private firstName: string | undefined;
    private lastName: string | undefined;
    private email: string;
    private date: Date | undefined;
    private password: string;

    constructor(email: string, password: string, firstName?: string, lastName?: string, date?: Date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.date = date;
        this.password = password;
    };

    async register() {

        const player = await new Player({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            date: this.date,
            password: await Player.encryptPassword(this.password)
        });

        const savePlayer = await player.save();
    };

    async login(email: string, password: string) {

        // Check if the player exists with the email
        const playerDB = await Player.findOne({ email: this.email });

        if (!playerDB) {
            return 'Wrong email';
        };

        const validPassword = await Player.comparePassword(this.password, playerDB.password);

        if (!validPassword) {
            return 'Wrong password';
        };
    };
};

export default Auth;