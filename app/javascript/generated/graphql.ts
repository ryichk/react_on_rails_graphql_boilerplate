import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** An example field added by the generator */
  testField: Scalars['String']['output'];
};

export type FetchTestFieldQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchTestFieldQuery = { __typename?: 'Query', testField: string };


export const FetchTestFieldDocument = gql`
    query FetchTestField {
  testField
}
    `;

/**
 * __useFetchTestFieldQuery__
 *
 * To run a query within a React component, call `useFetchTestFieldQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchTestFieldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchTestFieldQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchTestFieldQuery(baseOptions?: Apollo.QueryHookOptions<FetchTestFieldQuery, FetchTestFieldQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchTestFieldQuery, FetchTestFieldQueryVariables>(FetchTestFieldDocument, options);
      }
export function useFetchTestFieldLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchTestFieldQuery, FetchTestFieldQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchTestFieldQuery, FetchTestFieldQueryVariables>(FetchTestFieldDocument, options);
        }
export function useFetchTestFieldSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FetchTestFieldQuery, FetchTestFieldQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FetchTestFieldQuery, FetchTestFieldQueryVariables>(FetchTestFieldDocument, options);
        }
export type FetchTestFieldQueryHookResult = ReturnType<typeof useFetchTestFieldQuery>;
export type FetchTestFieldLazyQueryHookResult = ReturnType<typeof useFetchTestFieldLazyQuery>;
export type FetchTestFieldSuspenseQueryHookResult = ReturnType<typeof useFetchTestFieldSuspenseQuery>;
export type FetchTestFieldQueryResult = Apollo.QueryResult<FetchTestFieldQuery, FetchTestFieldQueryVariables>;