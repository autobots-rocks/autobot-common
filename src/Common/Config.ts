import * as fs from "fs";

export class Config {

    public static load<T>(property?: string): T {

        if (fs.existsSync(process.env.CONFIG_PATH)) {

            if (property) {

                return require(process.env.CONFIG_PATH)[ property ];

            } else {

                return require(process.env.CONFIG_PATH);

            }

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
