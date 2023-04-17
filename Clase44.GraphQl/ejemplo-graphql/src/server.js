import express from "express";
import { graphqlHTTP } from "express-graphql";
import personaController from "./controllers/persona.controller.js";
import schema from "./graphql/persona.schema.js";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: {
      getPersona: personaController.getPersona,
      createPersona: personaController.createPersona,
      updatePersona: personaController.updatePersona,
      deletePersona: personaController.deletePersona,
    },
    graphiql: true,
  })
);

/*
Usando Graphiql:

mutation {
  createPersona(datos: { name: "Pepe", age: 21 }) {
    id
  }
}

{
  getPersona(id: "319b76bb6fec8ec2f3af") {
    name
    age
  }
}

mutation {
  updatePersona(id: "319b76bb6fec8ec2f3af", datos: { name: "Juan", age: 22 }) {
    id
    name
    age
  }
}

mutation {
  deletePersona(id: "319b76bb6fec8ec2f3af") {
    id
    name
    age
  }
}
*/

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
