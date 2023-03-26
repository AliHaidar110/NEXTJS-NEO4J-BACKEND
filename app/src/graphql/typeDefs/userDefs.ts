export const userDefs = `
type User{
    id: ID! @id
    name: String!
    email: String!
    emailVerified: DateTime! timestamp(operations: [CREATE, UPDATE])
    image: string!
    ownedBusiness: [Business!]! @relationship(type: "OWNS", direction: OUT)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
    accounts: [Account!]! @relationship(type: "HAS_ACCOUNT", direction: OUT)
    sessions: [Session!]! @relationship(type: "HAS_SESSION", direction: OUT)
}
`;
