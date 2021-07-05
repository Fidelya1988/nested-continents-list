import { gql } from "@apollo/client";

export const GET_CONTINENTS = gql`
  query GetContinents {
    continents {
      name
      code
      countries {
        name
        code
        continent {
          code
        }
        languages {
          name
          code
        }
      }
    }
  }
`;
