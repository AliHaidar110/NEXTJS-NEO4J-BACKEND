export const itemDefs = `
type User{
    id: ID! @id
    name: String!
    categories: [Category!]! @relationship(type: "HAS", direction: IN)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
}
`;