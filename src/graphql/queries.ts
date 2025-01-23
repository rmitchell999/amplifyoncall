/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getOnCallEntry = /* GraphQL */ `query GetOnCallEntry($id: ID!) {
  getOnCallEntry(id: $id) {
    id
    groupName
    day
    contact
    phone
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetOnCallEntryQueryVariables,
  APITypes.GetOnCallEntryQuery
>;
export const listOnCallEntries = /* GraphQL */ `query ListOnCallEntries(
  $filter: ModelOnCallEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  listOnCallEntries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      groupName
      day
      contact
      phone
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOnCallEntriesQueryVariables,
  APITypes.ListOnCallEntriesQuery
>;
export const getContact = /* GraphQL */ `query GetContact($id: ID!) {
  getContact(id: $id) {
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
  APITypes.GetContactQueryVariables,
  APITypes.GetContactQuery
>;
export const listContacts = /* GraphQL */ `query ListContacts(
  $filter: ModelContactFilterInput
  $limit: Int
  $nextToken: String
) {
  listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  APITypes.ListContactsQueryVariables,
  APITypes.ListContactsQuery
>;
