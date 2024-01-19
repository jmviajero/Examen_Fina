


export const typeDefs = `#graphql

    type Persona {
        id:ID!,
        name: String!,
        telefono: String!,
        pais: String!,
        hora: String!
    }

    type Query {
        getContact(id:ID!): Persona!
        getContacts(): [Persona!]!
    }

    type Mutation {
        addContact(name: String!, telefono: String!): Persona!
        deleteContact(id: ID!): Boolean!
        updateContac(id:ID!, name: String, telefono: String): Persona!
    }

`