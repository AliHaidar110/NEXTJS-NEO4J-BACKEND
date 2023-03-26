export const accountDefs = `
  type Account {
    id: ID! @id
    userId: String!
    type: String!
    provider: String!
    providerAccountId: String!
    refresh_token: String!
    access_token: String!
    expires_at: Int!
    token_type: String!
    scope: String!
    id_token: String!
    session_state: String!
    oauth_token_secret: String!
    oauth_token: String!
    user: User! @relationship(type: "HAS_ACCOUNT", direction: IN)
  }
`;
