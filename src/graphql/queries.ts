/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTerneuzenContact = /* GraphQL */ `query GetTerneuzenContact($id: ID!) {
  getTerneuzenContact(id: $id) {
    id
    email
    phone
    name
    onCall
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTerneuzenContactQueryVariables,
  APITypes.GetTerneuzenContactQuery
>;
export const listTerneuzenContacts = /* GraphQL */ `query ListTerneuzenContacts(
  $filter: ModelTerneuzenContactFilterInput
  $limit: Int
  $nextToken: String
) {
  listTerneuzenContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      phone
      name
      onCall
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTerneuzenContactsQueryVariables,
  APITypes.ListTerneuzenContactsQuery
>;
export const getITContact = /* GraphQL */ `query GetITContact($id: ID!) {
  getITContact(id: $id) {
    id
    email
    phone
    name
    onCall
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetITContactQueryVariables,
  APITypes.GetITContactQuery
>;
export const listITContacts = /* GraphQL */ `query ListITContacts(
  $filter: ModelITContactFilterInput
  $limit: Int
  $nextToken: String
) {
  listITContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      phone
      name
      onCall
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListITContactsQueryVariables,
  APITypes.ListITContactsQuery
>;
export const getTerneuzenOnCallEntry = /* GraphQL */ `query GetTerneuzenOnCallEntry($id: ID!) {
  getTerneuzenOnCallEntry(id: $id) {
    id
    groupName
    day
    contactID
    contact {
      id
      email
      phone
      name
      onCall
      createdAt
      updatedAt
      __typename
    }
    phone
    timezone
    startTime
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTerneuzenOnCallEntryQueryVariables,
  APITypes.GetTerneuzenOnCallEntryQuery
>;
export const listTerneuzenOnCallEntries = /* GraphQL */ `query ListTerneuzenOnCallEntries(
  $filter: ModelTerneuzenOnCallEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  listTerneuzenOnCallEntries(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      groupName
      day
      contactID
      phone
      timezone
      startTime
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTerneuzenOnCallEntriesQueryVariables,
  APITypes.ListTerneuzenOnCallEntriesQuery
>;
export const getITOnCallEntry = /* GraphQL */ `query GetITOnCallEntry($id: ID!) {
  getITOnCallEntry(id: $id) {
    id
    groupName
    day
    contactID
    contact {
      id
      email
      phone
      name
      onCall
      createdAt
      updatedAt
      __typename
    }
    phone
    timezone
    startTime
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetITOnCallEntryQueryVariables,
  APITypes.GetITOnCallEntryQuery
>;
export const listITOnCallEntries = /* GraphQL */ `query ListITOnCallEntries(
  $filter: ModelITOnCallEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  listITOnCallEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      groupName
      day
      contactID
      phone
      timezone
      startTime
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListITOnCallEntriesQueryVariables,
  APITypes.ListITOnCallEntriesQuery
>;
