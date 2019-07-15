import {gql} from "apollo-server-express";

const typeDefs = gql`
  type Repository {
    id: Int!
    name: String!
    full_name: String
    owner: Owner!
    html_url: String!
    description: String
    stargazers_count: Int!
    open_issues: String!
    created_at: String!
  }
  type Owner {
    id: Int!
    avatar_url: String!
    login: String!
  }
  type Query {
    repositories(page: Int, created_at: String): [Repository]
  }
`;

export default typeDefs;
