import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";
import { Creature } from "./src/app/creature.entity";

const config: SqliteConnectionOptions = {
    type:'sqlite',
    database: "database.sqlite",
    entities: [
      Creature
    ],
    synchronize: true,
    logging: true
}

export default config;