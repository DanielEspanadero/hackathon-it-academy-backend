import { Model } from 'mongoose';
import { IPlayer } from './IPlayer';

// Extended player model interface for password encryption methods.
export interface PlayerModel extends Model <IPlayer> {
    encryptPassword(password: string): string;
    comparePassword(password: string, receivedPassword: string): string;
};