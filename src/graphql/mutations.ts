/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createOnCallEntry = /* GraphQL */ `mutation CreateOnCallEntry(
  $input: CreateOnCallEntryInput!
  $condition: ModelOnCallEntryConditionInput
) {
  createOnCallEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateOnCallEntryMutationVariables,
  APITypes.CreateOnCallEntryMutation
>;
export const updateOnCallEntry = /* GraphQL */ `mutation UpdateOnCallEntry(
  $input: UpdateOnCallEntryInput!
  $condition: ModelOnCallEntryConditionInput
) {
  updateOnCallEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateOnCallEntryMutationVariables,
  APITypes.UpdateOnCallEntryMutation
>;
export const deleteOnCallEntry = /* GraphQL */ `mutation DeleteOnCallEntry(
  $input: DeleteOnCallEntryInput!
  $condition: ModelOnCallEntryConditionInput
) {
  deleteOnCallEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteOnCallEntryMutationVariables,
  APITypes.DeleteOnCallEntryMutation
>;
export const createContact = /* GraphQL */ `mutation CreateContact(
  $input: CreateContactInput!
  $condition: ModelContactConditionInput
) {
  createContact(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateContactMutationVariables,
  APITypes.CreateContactMutation
>;
export const updateContact = /* GraphQL */ `mutation UpdateContact(
  $input: UpdateContactInput!
  $condition: ModelContactConditionInput
) {
  updateContact(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateContactMutationVariables,
  APITypes.UpdateContactMutation
>;
export const deleteContact = /* GraphQL */ `mutation DeleteContact(
  $input: DeleteContactInput!
  $condition: ModelContactConditionInput
) {
  deleteContact(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteContactMutationVariables,
  APITypes.DeleteContactMutation
>;
