export const GET_COUNTRIES = {
  query: gql`
      query getContries {
          countries {
              name
              code
          }
      }
  `,
};