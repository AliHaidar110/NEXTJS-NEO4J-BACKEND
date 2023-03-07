export const categoryDefs = `
type User{
    id: ID! @id
    name: String!
    itmes: [Item!]! @relationship(type: "HAS", direction: OUT)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
}
`;
