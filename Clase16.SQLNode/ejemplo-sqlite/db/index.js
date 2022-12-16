import knex from "knex";
import path from "path";
import * as url from "url";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const config = {
  client: "sqlite3",
  connection: { filename: path.resolve(__dirname, "../database/mydb.sqlite") },
  useNullAsDefault: true,
};

const database = knex(config);

export default database;
