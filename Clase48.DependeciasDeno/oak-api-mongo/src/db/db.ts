import { config, MongoClient } from "../../depts.ts";

const { DB_HOST, DB_PORT, DATABASE } = await config();
const mongoUrl = `mongodb://${DB_HOST}:${DB_PORT}`;
const client = new MongoClient();

try {
  await client.connect(mongoUrl);

  console.log(`Databse client connected to ${mongoUrl}`);
} catch (err) {
  console.log(err);
}

const db = client.database(DATABASE);

export default db;
