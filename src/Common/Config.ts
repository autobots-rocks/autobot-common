import * as fs from "fs";

export class Config {

    public static load<T>(): T {

        if (fs.existsSync(process.env.CONFIG_PATH)) {

            return require(process.env.CONFIG_PATH);

        }

    }

    public static save(config: any): void {

        fs.writeFileSync(process.env.CONFIG_PATH, JSON.stringify(config));

    }

    public static write(propertyName: string, value: any): Config {

        const config: any = Config.load() || {};

        config[ propertyName ] = value;

        Config.save(config);

        return config;

    }

}
