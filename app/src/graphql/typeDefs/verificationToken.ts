export const VerificationToken = `
  type VerificationToken {
    id: ID! @id
    identifier: String!
    token: String!
    expires: DateTime!
  }
`