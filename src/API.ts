/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateContactInput = {
  id?: string | null,
  email: string,
  phone: string,
  name: string,
  onCall: boolean,
};

export type ModelContactConditionInput = {
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  name?: ModelStringInput | null,
  onCall?: ModelBooleanInput | null,
  and?: Array< ModelContactConditionInput | null > | null,
  or?: Array< ModelContactConditionInput | null > | null,
  not?: ModelContactConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Contact = {
  __typename: "Contact",
  id: string,
  email: string,
  phone: string,
  name: string,
  onCall: boolean,
  createdAt: string,
  updatedAt: string,
};

export type UpdateContactInput = {
  id: string,
  email?: string | null,
  phone?: string | null,
  name?: string | null,
  onCall?: boolean | null,
};

export type DeleteContactInput = {
  id: string,
};

export type CreateOnCallEntryInput = {
  groupName: string,
  day: string,
  contactID?: string | null,
  phone?: string | null,
  startTime?: string | null,
  timezone?: string | null,
};

export type ModelOnCallEntryConditionInput = {
  groupName?: ModelStringInput | null,
  day?: ModelStringInput | null,
  contactID?: ModelIDInput | null,
  phone?: ModelStringInput | null,
  timezone?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  and?: Array< ModelOnCallEntryConditionInput | null > | null,
  or?: Array< ModelOnCallEntryConditionInput | null > | null,
  not?: ModelOnCallEntryConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type OnCallEntry = {
  __typename: "OnCallEntry",
  id: string,
  groupName: string,
  day: string,
  contactID?: string | null,
  contact?: Contact | null,
  phone?: string | null,
  timezone?: string | null,
  startTime?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateOnCallEntryInput = {
  id: string,
  groupName?: string | null,
  day?: string | null,
  contactID?: string | null,
  phone?: string | null,
  startTime?: string | null,
  timezone?: string | null,
};

export type DeleteOnCallEntryInput = {
  id: string,
};

export type ModelContactFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  name?: ModelStringInput | null,
  onCall?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelContactFilterInput | null > | null,
  or?: Array< ModelContactFilterInput | null > | null,
  not?: ModelContactFilterInput | null,
};

export type ModelContactConnection = {
  __typename: "ModelContactConnection",
  items:  Array<Contact | null >,
  nextToken?: string | null,
};

export type ModelOnCallEntryFilterInput = {
  id?: ModelIDInput | null,
  groupName?: ModelStringInput | null,
  day?: ModelStringInput | null,
  contactID?: ModelIDInput | null,
  phone?: ModelStringInput | null,
  timezone?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelOnCallEntryFilterInput | null > | null,
  or?: Array< ModelOnCallEntryFilterInput | null > | null,
  not?: ModelOnCallEntryFilterInput | null,
};

export type ModelOnCallEntryConnection = {
  __typename: "ModelOnCallEntryConnection",
  items:  Array<OnCallEntry | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionContactFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  onCall?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionContactFilterInput | null > | null,
  or?: Array< ModelSubscriptionContactFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionOnCallEntryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  groupName?: ModelSubscriptionStringInput | null,
  day?: ModelSubscriptionStringInput | null,
  contactID?: ModelSubscriptionIDInput | null,
  phone?: ModelSubscriptionStringInput | null,
  timezone?: ModelSubscriptionStringInput | null,
  startTime?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOnCallEntryFilterInput | null > | null,
  or?: Array< ModelSubscriptionOnCallEntryFilterInput | null > | null,
};

export type CreateContactMutationVariables = {
  input: CreateContactInput,
  condition?: ModelContactConditionInput | null,
};

export type CreateContactMutation = {
  createContact?:  {
    __typename: "Contact",
    id: string,
    email: string,
    phone: string,
    name: string,
    onCall: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContactMutationVariables = {
  input: UpdateContactInput,
  condition?: ModelContactConditionInput | null,
};

export type UpdateContactMutation = {
  updateContact?:  {
    __typename: "Contact",
    id: string,
    email: string,
    phone: string,
    name: string,
    onCall: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContactMutationVariables = {
  input: DeleteContactInput,
  condition?: ModelContactConditionInput | null,
};

export type DeleteContactMutation = {
  deleteContact?:  {
    __typename: "Contact",
    id: string,
    email: string,
    phone: string,
    name: string,
    onCall: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOnCallEntryMutationVariables = {
  input: CreateOnCallEntryInput,
  condition?: ModelOnCallEntryConditionInput | null,
};

export type CreateOnCallEntryMutation = {
  createOnCallEntry?:  {
    __typename: "OnCallEntry",
    id: string,
    groupName: string,
    day: string,
    contactID?: string | null,
    contact?:  {
      __typename: "Contact",
      id: string,
      email: string,
      phone: string,
      name: string,
      onCall: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    phone?: string | null,
    timezone?: string | null,
    startTime?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOnCallEntryMutationVariables = {
  input: UpdateOnCallEntryInput,
  condition?: ModelOnCallEntryConditionInput | null,
};

export type UpdateOnCallEntryMutation = {
  updateOnCallEntry?:  {
    __typename: "OnCallEntry",
    id: string,
    groupName: string,
    day: string,
    contactID?: string | null,
    contact?:  {
      __typename: "Contact",
      id: string,
      email: string,
      phone: string,
      name: string,
      onCall: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    phone?: string | null,
    timezone?: string | null,
    startTime?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOnCallEntryMutationVariables = {
  input: DeleteOnCallEntryInput,
  condition?: ModelOnCallEntryConditionInput | null,
};

export type DeleteOnCallEntryMutation = {
  deleteOnCallEntry?:  {
    __typename: "OnCallEntry",
    id: string,
    groupName: string,
    day: string,
    contactID?: string | null,
    contact?:  {
      __typename: "Contact",
      id: string,
      email: string,
      phone: string,
      name: string,
      onCall: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    phone?: string | null,
    timezone?: string | null,
    startTime?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetContactQueryVariables = {
  id: string,
};

export type GetContactQuery = {
  getContact?:  {
    __typename: "Contact",
    id: string,
    email: string,
    phone: string,
    name: string,
    onCall: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContactsQueryVariables = {
  filter?: ModelContactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContactsQuery = {
  listContacts?:  {
    __typename: "ModelContactConnection",
    items:  Array< {
      __typename: "Contact",
      id: string,
      email: string,
      phone: string,
      name: string,
      onCall: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOnCallEntryQueryVariables = {
  id: string,
};

export type GetOnCallEntryQuery = {
  getOnCallEntry?:  {
    __typename: "OnCallEntry",
    id: string,
    groupName: string,
    day: string,
    contactID?: string | null,
    contact?:  {
      __typename: "Contact",
      id: string,
      email: string,
      phone: string,
      name: string,
      onCall: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    phone?: string | null,
    timezone?: string | null,
    startTime?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOnCallEntriesQueryVariables = {
  filter?: ModelOnCallEntryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOnCallEntriesQuery = {
  listOnCallEntries?:  {
    __typename: "ModelOnCallEntryConnection",
    items:  Array< {
      __typename: "OnCallEntry",
      id: string,
      groupName: string,
      day: string,
      contactID?: string | null,
      phone?: string | null,
      timezone?: string | null,
      startTime?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null,
};

export type OnCreateContactSubscription = {
  onCreateContact?:  {
    __typename: "Contact",
    id: string,
    email: string,
    phone: string,
    name: string,
    onCall: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null,
};

export type OnUpdateContactSubscription = {
  onUpdateContact?:  {
    __typename: "Contact",
    id: string,
    email: string,
    phone: string,
    name: string,
    onCall: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null,
};

export type OnDeleteContactSubscription = {
  onDeleteContact?:  {
    __typename: "Contact",
    id: string,
    email: string,
    phone: string,
    name: string,
    onCall: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOnCallEntrySubscriptionVariables = {
  filter?: ModelSubscriptionOnCallEntryFilterInput | null,
};

export type OnCreateOnCallEntrySubscription = {
  onCreateOnCallEntry?:  {
    __typename: "OnCallEntry",
    id: string,
    groupName: string,
    day: string,
    contactID?: string | null,
    contact?:  {
      __typename: "Contact",
      id: string,
      email: string,
      phone: string,
      name: string,
      onCall: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    phone?: string | null,
    timezone?: string | null,
    startTime?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOnCallEntrySubscriptionVariables = {
  filter?: ModelSubscriptionOnCallEntryFilterInput | null,
};

export type OnUpdateOnCallEntrySubscription = {
  onUpdateOnCallEntry?:  {
    __typename: "OnCallEntry",
    id: string,
    groupName: string,
    day: string,
    contactID?: string | null,
    contact?:  {
      __typename: "Contact",
      id: string,
      email: string,
      phone: string,
      name: string,
      onCall: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    phone?: string | null,
    timezone?: string | null,
    startTime?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOnCallEntrySubscriptionVariables = {
  filter?: ModelSubscriptionOnCallEntryFilterInput | null,
};

export type OnDeleteOnCallEntrySubscription = {
  onDeleteOnCallEntry?:  {
    __typename: "OnCallEntry",
    id: string,
    groupName: string,
    day: string,
    contactID?: string | null,
    contact?:  {
      __typename: "Contact",
      id: string,
      email: string,
      phone: string,
      name: string,
      onCall: boolean,
      createdAt: string,
      updatedAt: string,
    } | null,
    phone?: string | null,
    timezone?: string | null,
    startTime?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
