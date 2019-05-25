import { BOT } from './Bot';

/*
 * Command class annotation use to automatically "register" instances into BOT.
 *
 * @param any target Command Class
 */
export function Command(target: any): void {

    console.log(1000, target);

    //
    // Register the class annotated with @Command
    //
    BOT.register(new target());

}
