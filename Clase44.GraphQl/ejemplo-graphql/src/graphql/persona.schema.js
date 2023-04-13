import { buildSchema } from "graphql";

const schema = buildSchema(`
    input PersonaInput {
        name: String,
        age: Int,
    }

    type Persona {
        id: ID!,
        name: String,
        age: Int,
    }

    type Query {
        getPersona(id: ID!): Persona
    }

    type Mutation {
        createPersona(datos: PersonaInput): Persona,
        updatePersona(id: ID!, datos: PersonaInput): Persona,
        deletePersona(id: ID!): Persona,
    }
`);

export default schema;
