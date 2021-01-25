import * as Types from '../../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type AllPostsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllPostsQuery = (
  { __typename?: 'Query' }
  & { queryPost?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Post' }
    & Pick<Types.Post, 'PID' | 'title' | 'datePublished'>
    & { author: (
      { __typename?: 'User' }
      & Pick<Types.User, 'userName' | 'UID'>
    ) }
  )>>> }
);

export type UserQueryVariables = Types.Exact<{
  email?: Types.Maybe<Types.Scalars['String']>;
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { queryUser?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'User' }
    & Pick<Types.User, 'userName' | 'firstName' | 'UID'>
    & { readingLists?: Types.Maybe<Array<(
      { __typename?: 'ReadingList' }
      & Pick<Types.ReadingList, 'title' | 'shortDescription'>
      & { posts?: Types.Maybe<Array<(
        { __typename?: 'Post' }
        & Pick<Types.Post, 'title' | 'url' | 'PID'>
      )>>, tags?: Types.Maybe<Array<(
        { __typename?: 'Tags' }
        & Pick<Types.Tags, 'name'>
      )>> }
    )>> }
  )>>> }
);

export type GetUserQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { getUser?: Types.Maybe<(
    { __typename?: 'User' }
    & Pick<Types.User, 'UID' | 'firstName' | 'lastName' | 'userName' | 'email'>
    & { readingLists?: Types.Maybe<Array<(
      { __typename?: 'ReadingList' }
      & Pick<Types.ReadingList, 'RID' | 'title'>
    )>> }
  )> }
);


export const AllPostsDocument = gql`
    query allPosts {
  queryPost(order: {desc: datePublished}) {
    PID
    title
    datePublished
    author {
      userName
      UID
    }
  }
}
    `;

/**
 * __useAllPostsQuery__
 *
 * To run a query within a React component, call `useAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPostsQuery(baseOptions?: Apollo.QueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
        return Apollo.useQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, baseOptions);
      }
export function useAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
          return Apollo.useLazyQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, baseOptions);
        }
export type AllPostsQueryHookResult = ReturnType<typeof useAllPostsQuery>;
export type AllPostsLazyQueryHookResult = ReturnType<typeof useAllPostsLazyQuery>;
export type AllPostsQueryResult = Apollo.QueryResult<AllPostsQuery, AllPostsQueryVariables>;
export const UserDocument = gql`
    query User($email: String) {
  queryUser(filter: {email: {anyofterms: $email}}) {
    userName
    firstName
    UID
    readingLists {
      title
      shortDescription
      posts {
        title
        url
        PID
      }
      tags {
        name
      }
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const GetUserDocument = gql`
    query getUser($id: ID!) {
  getUser(UID: $id) {
    UID
    firstName
    lastName
    userName
    email
    readingLists {
      RID
      title
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const namedOperations = {
  Query: {
    allPosts: 'allPosts',
    User: 'User',
    getUser: 'getUser'
  }
}