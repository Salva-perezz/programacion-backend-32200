import knex from "knex";

const config = {
  client: "sqlite3",
  connection: { filename: "../database/mydb.sqlite" },
  useNullAsDefault: true,
};

const database = knex(config);

export default database;
