export const businessDefs = `
  type Business{
    id: ID! @id
    name: String!
    owner: User @relationship(type: "OWNS", direction: IN)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [CREATE, UPDATE])
  }
`