import { Connection, createConnection } from 'typeorm';
import { Logger }                       from './Logger';

export class DB {

    public static connection: Connection;

    public static async connect() {

        if (process.env.MYSQL_HOST) {
            
            try {

                if (this.connection) {

                    Logger.log('Already connected to the database!');

                } else {

                    this.connection = await createConnection({

                        type: "mysql",
                        host: process.env.MYSQL_HOST,
                        port: Number(process.env.MYSQL_PORT),
                        username: process.env.MYSQL_USER,
                        password: process.env.MYSQL_PASSWORD,
                        database: process.env.MYSQL_DATABASE,
                        entities: [ 'node_modules/@autobot/module-*/dist/DB/*.js' ],
                        synchronize: true,
                        logging: false

                    });

                    Logger.log(`Connected to database ${ process.env.MYSQL_HOST }:${ process.env.MYSQL_PORT }`);

                }

            } catch (e) {

                console.log(e);

            }

        }

    }

}


