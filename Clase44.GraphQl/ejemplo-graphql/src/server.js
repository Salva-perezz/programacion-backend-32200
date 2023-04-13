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
    graphiql: false,
  })
);

app.listen(3000, () => {
  console.log("Server listening port 3000");
});
