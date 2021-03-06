import {
    type APIModalSubmitInteraction,
    InteractionResponseType,
    MessageFlags,
} from 'discord-api-types/v10';
import { type ENV } from '../@types/env';
import { APIResponse } from '../structures/APIResponse';
import { Modal } from '../structures/Modal';

export class TestModal extends Modal {
    public constructor(env: ENV) {
        super({
            env: env,
            customID: 'test',
        });
    }

    public async respond(interaction: APIModalSubmitInteraction) {
        const { i18n } = interaction;

        return new APIResponse({
            type: InteractionResponseType.ChannelMessageWithSource,
            data: {
                content: i18n.getMessage('modalsTestResponse'),
                flags: MessageFlags.Ephemeral,
            },
        });
    }
}