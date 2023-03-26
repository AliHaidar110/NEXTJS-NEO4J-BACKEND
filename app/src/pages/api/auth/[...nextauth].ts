import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'

import neo4j from "neo4j-driver"
import { Neo4jAdapter } from "@next-auth/neo4j-adapter"

declare const process: {
  env: {
    NEXT_PUBLIC_JWT_SECRET: string;
    NEXT_PUBLIC_NEO4J_PASSWORD: string;
    NEXT_PUBLIC_NEO4J_USER: string;
    NEXT_PUBLIC_NEO4J_URI: string;
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
  };
};

const driver = neo4j.driver(
  process.env.NEXT_PUBLIC_NEO4J_URI,
  neo4j.auth.basic(
    process.env.NEXT_PUBLIC_NEO4J_USER,
    process.env.NEXT_PUBLIC_NEO4J_PASSWORD,
  )
);

const neo4jSession = driver.session()

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
  adapter: Neo4jAdapter(neo4jSession),
})
