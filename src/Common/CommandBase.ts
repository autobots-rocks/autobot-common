import { CommandConfig } from './CommandConfig';
import { EVENT_OBJECT }  from './EventObjectType';

/*
 * Base class that all commands inherit from.
 *
 */
export class CommandBase {

    public config: CommandConfig;

    public constructor(config: CommandConfig) {

        this.config = config;

    }

    public run(command: EVENT_OBJECT): void {

        console.log('You should not see this. This should be overriden by a module class.');

    }

}
