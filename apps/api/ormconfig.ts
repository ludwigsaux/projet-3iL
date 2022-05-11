import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";
import { Creature } from "./src/app/creature.entity";
import { Competence } from "./src/app/competence.entity";
import { User } from "./src/app/user.entity";
import { TypeCompetence } from "./src/app/type_competences.entity";

const config: SqliteConnectionOptions = {
    type:'sqlite',
    database: "db.sqlite",
    entities: [
      Creature,
      Competence,
      User,
      TypeCompetence
    ],
    synchronize: false,
    migrations: [
      'dist/src/db/migrations/*.js'
    ],
    cli: {
      migrationsDir: 'src/db/migrations'
    },
    logging: true
}

export default config;