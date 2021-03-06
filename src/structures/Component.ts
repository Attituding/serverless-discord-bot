import { type APIMessageComponentInteraction } from 'discord-api-types/v10';
import { type ENV } from '../@types/env';
import { APIResponse } from './APIResponse';

export abstract class Component<T extends APIMessageComponentInteraction> {
    public readonly env: ENV;

    public readonly customID: string;

    public constructor({
        env,
        customID,
    }: {
        env: ENV,
        customID: string,
    }) {
        this.env = env;
        this.customID = customID;
    }

    public abstract respond(interaction: T): Promise<APIResponse>;
}