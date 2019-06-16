import * as fs from "fs";

export class Config {

    public static load<T>(path: string): T {

        if (fs.existsSync(path)) {

            return require(path);

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

    public static remove(path: string, propertyName: string): boolean {

        let found = false;

        if (fs.existsSync(path)) {

            const config = require(path);

            if (config[ propertyName ]) {

                found = true;

                delete config[ propertyName ];

                Config.save(path, config);
                
            }

        }

        return found;

    }

}
