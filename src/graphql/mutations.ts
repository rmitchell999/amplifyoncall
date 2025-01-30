/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTerneuzenContact = /* GraphQL */ `mutation CreateTerneuzenContact(
  $input: CreateTerneuzenContactInput!
  $condition: ModelTerneuzenContactConditionInput
) {
  createTerneuzenContact(input: $input, condition: $condition) {
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
  APITypes.CreateTerneuzenContactMutationVariables,
  APITypes.CreateTerneuzenContactMutation
>;
export const updateTerneuzenContact = /* GraphQL */ `mutation UpdateTerneuzenContact(
  $input: UpdateTerneuzenContactInput!
  $condition: ModelTerneuzenContactConditionInput
) {
  updateTerneuzenContact(input: $input, condition: $condition) {
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
  APITypes.UpdateTerneuzenContactMutationVariables,
  APITypes.UpdateTerneuzenContactMutation
>;
export const deleteTerneuzenContact = /* GraphQL */ `mutation DeleteTerneuzenContact(
  $input: DeleteTerneuzenContactInput!
  $condition: ModelTerneuzenContactConditionInput
) {
  deleteTerneuzenContact(input: $input, condition: $condition) {
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
  APITypes.DeleteTerneuzenContactMutationVariables,
  APITypes.DeleteTerneuzenContactMutation
>;
export const createITContact = /* GraphQL */ `mutation CreateITContact(
  $input: CreateITContactInput!
  $condition: ModelITContactConditionInput
) {
  createITContact(input: $input, condition: $condition) {
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
  APITypes.CreateITContactMutationVariables,
  APITypes.CreateITContactMutation
>;
export const updateITContact = /* GraphQL */ `mutation UpdateITContact(
  $input: UpdateITContactInput!
  $condition: ModelITContactConditionInput
) {
  updateITContact(input: $input, condition: $condition) {
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
  APITypes.UpdateITContactMutationVariables,
  APITypes.UpdateITContactMutation
>;
export const deleteITContact = /* GraphQL */ `mutation DeleteITContact(
  $input: DeleteITContactInput!
  $condition: ModelITContactConditionInput
) {
  deleteITContact(input: $input, condition: $condition) {
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
  APITypes.DeleteITContactMutationVariables,
  APITypes.DeleteITContactMutation
>;
export const createTerneuzenOnCallEntry = /* GraphQL */ `mutation CreateTerneuzenOnCallEntry(
  $input: CreateTerneuzenOnCallEntryInput!
  $condition: ModelTerneuzenOnCallEntryConditionInput
) {
  createTerneuzenOnCallEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTerneuzenOnCallEntryMutationVariables,
  APITypes.CreateTerneuzenOnCallEntryMutation
>;
export const updateTerneuzenOnCallEntry = /* GraphQL */ `mutation UpdateTerneuzenOnCallEntry(
  $input: UpdateTerneuzenOnCallEntryInput!
  $condition: ModelTerneuzenOnCallEntryConditionInput
) {
  updateTerneuzenOnCallEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTerneuzenOnCallEntryMutationVariables,
  APITypes.UpdateTerneuzenOnCallEntryMutation
>;
export const deleteTerneuzenOnCallEntry = /* GraphQL */ `mutation DeleteTerneuzenOnCallEntry(
  $input: DeleteTerneuzenOnCallEntryInput!
  $condition: ModelTerneuzenOnCallEntryConditionInput
) {
  deleteTerneuzenOnCallEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTerneuzenOnCallEntryMutationVariables,
  APITypes.DeleteTerneuzenOnCallEntryMutation
>;
export const createITOnCallEntry = /* GraphQL */ `mutation CreateITOnCallEntry(
  $input: CreateITOnCallEntryInput!
  $condition: ModelITOnCallEntryConditionInput
) {
  createITOnCallEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateITOnCallEntryMutationVariables,
  APITypes.CreateITOnCallEntryMutation
>;
export const updateITOnCallEntry = /* GraphQL */ `mutation UpdateITOnCallEntry(
  $input: UpdateITOnCallEntryInput!
  $condition: ModelITOnCallEntryConditionInput
) {
  updateITOnCallEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateITOnCallEntryMutationVariables,
  APITypes.UpdateITOnCallEntryMutation
>;
export const deleteITOnCallEntry = /* GraphQL */ `mutation DeleteITOnCallEntry(
  $input: DeleteITOnCallEntryInput!
  $condition: ModelITOnCallEntryConditionInput
) {
  deleteITOnCallEntry(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteITOnCallEntryMutationVariables,
  APITypes.DeleteITOnCallEntryMutation
>;
