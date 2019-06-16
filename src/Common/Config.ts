import * as fs from "fs";

export class Config {

    public static load<T>(path: string): T {

        if (fs.existsSync(path)) {

            return require(process.env.CONFIG_PATH);

        } else {

            return <T>{};

        }

    }

    public static save(path: string, config: any): void {

        fs.writeFileSync(path, JSON.stringify(config));

    }

    public static write(path: string, propertyName: string, value: any): Config {

        const config: any = Config.load(path) || {};

        config[ propertyName ] = value;

        Config.save(path, config);

        return config;

    }

}
