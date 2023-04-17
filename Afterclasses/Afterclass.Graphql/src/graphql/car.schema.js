import { buildSchema } from "graphql";

const schema = buildSchema(`
    input CarInput {
        model: String,
        price: Int,
        year: Int,
        color: String,
    }

    type Car {
        model: String,
        price: Int,
        year: Int,
        color: String,
        _id: ID!
    }

    type Query {
        getCar(id: ID!): Car,
        getCars: [Car],
    }

    type Mutation {
        createCar(carData: CarInput): Car,
        updateCar(updateCarData: CarInput, id: ID!): Car,
        deleteCar(id: ID!): Car,
    }
`);

export default schema;
