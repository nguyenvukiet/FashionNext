import { GraphQLClient, gql } from "graphql-request";


// create empty cart
export const CREATE_EMPTY_CART = gql`
  mutation {
    createEmptyCart
  }
`;