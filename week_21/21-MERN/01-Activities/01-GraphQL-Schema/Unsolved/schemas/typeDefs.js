// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type User {
    _id: ID
    name: String
    email: String
    job: String
    password: String
    country: String
}
type Query{
    user: [User]
}
`;



// export the typeDefs
module.exports = typeDefs;