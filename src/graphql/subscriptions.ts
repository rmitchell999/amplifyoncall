/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTerneuzenContact = /* GraphQL */ `subscription OnCreateTerneuzenContact(
  $filter: ModelSubscriptionTerneuzenContactFilterInput
) {
  onCreateTerneuzenContact(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTerneuzenContactSubscriptionVariables,
  APITypes.OnCreateTerneuzenContactSubscription
>;
export const onUpdateTerneuzenContact = /* GraphQL */ `subscription OnUpdateTerneuzenContact(
  $filter: ModelSubscriptionTerneuzenContactFilterInput
) {
  onUpdateTerneuzenContact(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTerneuzenContactSubscriptionVariables,
  APITypes.OnUpdateTerneuzenContactSubscription
>;
export const onDeleteTerneuzenContact = /* GraphQL */ `subscription OnDeleteTerneuzenContact(
  $filter: ModelSubscriptionTerneuzenContactFilterInput
) {
  onDeleteTerneuzenContact(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTerneuzenContactSubscriptionVariables,
  APITypes.OnDeleteTerneuzenContactSubscription
>;
export const onCreateITContact = /* GraphQL */ `subscription OnCreateITContact($filter: ModelSubscriptionITContactFilterInput) {
  onCreateITContact(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateITContactSubscriptionVariables,
  APITypes.OnCreateITContactSubscription
>;
export const onUpdateITContact = /* GraphQL */ `subscription OnUpdateITContact($filter: ModelSubscriptionITContactFilterInput) {
  onUpdateITContact(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateITContactSubscriptionVariables,
  APITypes.OnUpdateITContactSubscription
>;
export const onDeleteITContact = /* GraphQL */ `subscription OnDeleteITContact($filter: ModelSubscriptionITContactFilterInput) {
  onDeleteITContact(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteITContactSubscriptionVariables,
  APITypes.OnDeleteITContactSubscription
>;
export const onCreateTerneuzenOnCallEntry = /* GraphQL */ `subscription OnCreateTerneuzenOnCallEntry(
  $filter: ModelSubscriptionTerneuzenOnCallEntryFilterInput
) {
  onCreateTerneuzenOnCallEntry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTerneuzenOnCallEntrySubscriptionVariables,
  APITypes.OnCreateTerneuzenOnCallEntrySubscription
>;
export const onUpdateTerneuzenOnCallEntry = /* GraphQL */ `subscription OnUpdateTerneuzenOnCallEntry(
  $filter: ModelSubscriptionTerneuzenOnCallEntryFilterInput
) {
  onUpdateTerneuzenOnCallEntry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTerneuzenOnCallEntrySubscriptionVariables,
  APITypes.OnUpdateTerneuzenOnCallEntrySubscription
>;
export const onDeleteTerneuzenOnCallEntry = /* GraphQL */ `subscription OnDeleteTerneuzenOnCallEntry(
  $filter: ModelSubscriptionTerneuzenOnCallEntryFilterInput
) {
  onDeleteTerneuzenOnCallEntry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTerneuzenOnCallEntrySubscriptionVariables,
  APITypes.OnDeleteTerneuzenOnCallEntrySubscription
>;
export const onCreateITOnCallEntry = /* GraphQL */ `subscription OnCreateITOnCallEntry(
  $filter: ModelSubscriptionITOnCallEntryFilterInput
) {
  onCreateITOnCallEntry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateITOnCallEntrySubscriptionVariables,
  APITypes.OnCreateITOnCallEntrySubscription
>;
export const onUpdateITOnCallEntry = /* GraphQL */ `subscription OnUpdateITOnCallEntry(
  $filter: ModelSubscriptionITOnCallEntryFilterInput
) {
  onUpdateITOnCallEntry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateITOnCallEntrySubscriptionVariables,
  APITypes.OnUpdateITOnCallEntrySubscription
>;
export const onDeleteITOnCallEntry = /* GraphQL */ `subscription OnDeleteITOnCallEntry(
  $filter: ModelSubscriptionITOnCallEntryFilterInput
) {
  onDeleteITOnCallEntry(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteITOnCallEntrySubscriptionVariables,
  APITypes.OnDeleteITOnCallEntrySubscription
>;
