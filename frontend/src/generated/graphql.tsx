import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  getUsers: Array<UserClass>;
};

export type UserClass = {
  __typename?: 'UserClass';
  id: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  getToken: Scalars['String'];
};

export type GetTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type GetTokenMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'getToken'>
);

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = (
  { __typename?: 'Query' }
  & { getUsers: Array<(
    { __typename?: 'UserClass' }
    & Pick<UserClass, 'id' | 'name' | 'email' | 'createdAt' | 'updatedAt'>
  )> }
);


export const GetTokenDocument = gql`
    mutation GetToken {
  getToken
}
    `;
export type GetTokenMutationFn = Apollo.MutationFunction<GetTokenMutation, GetTokenMutationVariables>;

/**
 * __useGetTokenMutation__
 *
 * To run a mutation, you first call `useGetTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getTokenMutation, { data, loading, error }] = useGetTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useGetTokenMutation(baseOptions?: Apollo.MutationHookOptions<GetTokenMutation, GetTokenMutationVariables>) {
        return Apollo.useMutation<GetTokenMutation, GetTokenMutationVariables>(GetTokenDocument, baseOptions);
      }
export type GetTokenMutationHookResult = ReturnType<typeof useGetTokenMutation>;
export type GetTokenMutationResult = Apollo.MutationResult<GetTokenMutation>;
export type GetTokenMutationOptions = Apollo.BaseMutationOptions<GetTokenMutation, GetTokenMutationVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  getUsers {
    id
    name
    email
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, baseOptions);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, baseOptions);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;