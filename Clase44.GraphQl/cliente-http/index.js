import axios from "axios";

const graphqlMutation = {
  query: `
        mutation {
            createPersona(datos: { name: "Juan", age: 20 }) {
                id
            }
        }`,
};

const mutationOptions = {
  url: "http://localhost:3000/graphql",
  method: "POST",
  data: graphqlMutation,
};

const mutationResponse = await axios(mutationOptions);

console.log(mutationResponse.data);

const grapqhQuery = {
  query: `{
        getPersona(id: "${mutationResponse.data.data.createPersona.id}") {
            name
        }
    }`,
};

const queryOptions = {
  url: "http://localhost:3000/graphql",
  method: "POST",
  data: grapqhQuery,
};

const queryResponse = await axios(queryOptions);

console.log(queryResponse.data);

const updateGraphql = {
  query: `
        mutation {
            updatePersona(id: "${mutationResponse.data.data.createPersona.id}", datos: { name: "Pepe", age: 21 }) {
                id
                name
                age
            }
        }
    `,
};

const updateOptions = {
  url: "http://localhost:3000/graphql",
  method: "POST",
  data: updateGraphql,
};

const updateResponse = await axios(updateOptions);

console.log(updateResponse.data);
