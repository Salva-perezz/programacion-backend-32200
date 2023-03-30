import DBClient from "./DBClient.class.js";

export default class MemClient extends DBClient {
  constructor() {
    super();
  }

  connect() {
    console.log("Memory ready!");
  }

  disconnect() {
    console.log("Memory not ready ready :(");
  }
}
