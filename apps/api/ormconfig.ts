import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

const config: SqliteConnectionOptions = {
    type:'sqlite',
    database:'db',
    entities: ['/api/src/app/*.entity.js'],
    synchronize: true
}

export default config;