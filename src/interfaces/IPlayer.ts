export interface IPlayer {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    date: string,
    totalGames: number,
    gamesWon: number,
    wonRate: number,
    playHistory: object,
    update(): string,
    encryptPassword(): string,
    comparePassword(): boolean
};