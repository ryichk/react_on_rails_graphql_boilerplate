import { gql } from '@apollo/client';

export const FETCH_TEST = gql`
  query FetchTestField {
    testField
  }
`;
