/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTerneuzenContactInput = {
  id?: string | null,
  email: string,
  phone: string,
  name: string,
  onCall: boolean,
};

export type ModelTerneuzenContactConditionInput = {
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  name?: ModelStringInput | null,
  onCall?: ModelBooleanInput | null,
  and?: Array< ModelTerneuzenContactConditionInput | null > | null,
  or?: Array< ModelTerneuzenContactConditionInput | null > | null,
  not?: ModelTerneuzenContactConditionInput | null,
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

export type TerneuzenContact = {
  __typename: "TerneuzenContact",
  id: string,
  email: string,
  phone: string,
  name: string,
  onCall: boolean,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTerneuzenContactInput = {
  id: string,
  email?: string | null,
  phone?: string | null,
  name?: string | null,
  onCall?: boolean | null,
};

export type DeleteTerneuzenContactInput = {
  id: string,
};

export type CreateITContactInput = {
  id?: string | null,
  email: string,
  phone: string,
  name: string,
  onCall: boolean,
};

export type ModelITContactConditionInput = {
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  name?: ModelStringInput | null,
  onCall?: ModelBooleanInput | null,
  and?: Array< ModelITContactConditionInput | null > | null,
  or?: Array< ModelITContactConditionInput | null > | null,
  not?: ModelITContactConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ITContact = {
  __typename: "ITContact",
  id: string,
  email: string,
  phone: string,
  name: string,
  onCall: boolean,
  createdAt: string,
  updatedAt: string,
};

export type UpdateITContactInput = {
  id: string,
  email?: string | null,
  phone?: string | null,
  name?: string | null,
  onCall?: boolean | null,
};

export type DeleteITContactInput = {
  id: string,
};

export type CreateTerneuzenOnCallEntryInput = {
  groupName: string,
  day: string,
  contactID?: string | null,
  phone?: string | null,
  timezone?: string | null,
  startTime?: string | null,
};

export type ModelTerneuzenOnCallEntryConditionInput = {
  groupName?: ModelStringInput | null,
  day?: ModelStringInput | null,
  contactID?: ModelIDInput | null,
  phone?: ModelStringInput | null,
  timezone?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  and?: Array< ModelTerneuzenOnCallEntryConditionInput | null > | null,
  or?: Array< ModelTerneuzenOnCallEntryConditionInput | null > | null,
  not?: ModelTerneuzenOnCallEntryConditionInput | null,
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

export type TerneuzenOnCallEntry = {
  __typename: "TerneuzenOnCallEntry",
  id: string,
  groupName: string,
  day: string,
  contactID?: string | null,
  contact?: TerneuzenContact | null,
  phone?: string | null,
  timezone?: string | null,
  startTime?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTerneuzenOnCallEntryInput = {
  id: string,
  groupName?: string | null,
  day?: string | null,
  contactID?: string | null,
  phone?: string | null,
  timezone?: string | null,
  startTime?: string | null,
};

export type DeleteTerneuzenOnCallEntryInput = {
  id: string,
};

export type CreateITOnCallEntryInput = {
  groupName: string,
  day: string,
  contactID?: string | null,
  phone?: string | null,
  timezone?: string | null,
  startTime?: string | null,
};

export type ModelITOnCallEntryConditionInput = {
  groupName?: ModelStringInput | null,
  day?: ModelStringInput | null,
  contactID?: ModelIDInput | null,
  phone?: ModelStringInput | null,
  timezone?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  and?: Array< ModelITOnCallEntryConditionInput | null > | null,
  or?: Array< ModelITOnCallEntryConditionInput | null > | null,
  not?: ModelITOnCallEntryConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ITOnCallEntry = {
  __typename: "ITOnCallEntry",
  id: string,
  groupName: string,
  day: string,
  contactID?: string | null,
  contact?: ITContact | null,
  phone?: string | null,
  timezone?: string | null,
  startTime?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateITOnCallEntryInput = {
  id: string,
  groupName?: string | null,
  day?: string | null,
  contactID?: string | null,
  phone?: string | null,
  timezone?: string | null,
  startTime?: string | null,
};

export type DeleteITOnCallEntryInput = {
  id: string,
};

export type ModelTerneuzenContactFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  name?: ModelStringInput | null,
  onCall?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTerneuzenContactFilterInput | null > | null,
  or?: Array< ModelTerneuzenContactFilterInput | null > | null,
  not?: ModelTerneuzenContactFilterInput | null,
};

export type ModelTerneuzenContactConnection = {
  __typename: "ModelTerneuzenContactConnection",
  items:  Array<TerneuzenContact | null >,
  nextToken?: string | null,
};

export type ModelITContactFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  name?: ModelStringInput | null,
  onCall?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelITContactFilterInput | null > | null,
  or?: Array< ModelITContactFilterInput | null > | null,
  not?: ModelITContactFilterInput | null,
};

export type ModelITContactConnection = {
  __typename: "ModelITContactConnection",
  items:  Array<ITContact | null >,
  nextToken?: string | null,
};

export type ModelTerneuzenOnCallEntryFilterInput = {
  id?: ModelIDInput | null,
  groupName?: ModelStringInput | null,
  day?: ModelStringInput | null,
  contactID?: ModelIDInput | null,
  phone?: ModelStringInput | null,
  timezone?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTerneuzenOnCallEntryFilterInput | null > | null,
  or?: Array< ModelTerneuzenOnCallEntryFilterInput | null > | null,
  not?: ModelTerneuzenOnCallEntryFilterInput | null,
};

export type ModelTerneuzenOnCallEntryConnection = {
  __typename: "ModelTerneuzenOnCallEntryConnection",
  items:  Array<TerneuzenOnCallEntry | null >,
  nextToken?: string | null,
};

export type ModelITOnCallEntryFilterInput = {
  id?: ModelIDInput | null,
  groupName?: ModelStringInput | null,
  day?: ModelStringInput | null,
  contactID?: ModelIDInput | null,
  phone?: ModelStringInput | null,
  timezone?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelITOnCallEntryFilterInput | null > | null,
  or?: Array< ModelITOnCallEntryFilterInput | null > | null,
  not?: ModelITOnCallEntryFilterInput | null,
};

export type ModelITOnCallEntryConnection = {
  __typename: "ModelITOnCallEntryConnection",
  items:  Array<ITOnCallEntry | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionTerneuzenContactFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  onCall?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTerneuzenContactFilterInput | null > | null,
  or?: Array< ModelSubscriptionTerneuzenContactFilterInput | null > | null,
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

export type ModelSubscriptionITContactFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  onCall?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionITContactFilterInput | null > | null,
  or?: Array< ModelSubscriptionITContactFilterInput | null > | null,
};

export type ModelSubscriptionTerneuzenOnCallEntryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  groupName?: ModelSubscriptionStringInput | null,
  day?: ModelSubscriptionStringInput | null,
  contactID?: ModelSubscriptionIDInput | null,
  phone?: ModelSubscriptionStringInput | null,
  timezone?: ModelSubscriptionStringInput | null,
  startTime?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTerneuzenOnCallEntryFilterInput | null > | null,
  or?: Array< ModelSubscriptionTerneuzenOnCallEntryFilterInput | null > | null,
};

export type ModelSubscriptionITOnCallEntryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  groupName?: ModelSubscriptionStringInput | null,
  day?: ModelSubscriptionStringInput | null,
  contactID?: ModelSubscriptionIDInput | null,
  phone?: ModelSubscriptionStringInput | null,
  timezone?: ModelSubscriptionStringInput | null,
  startTime?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionITOnCallEntryFilterInput | null > | null,
  or?: Array< ModelSubscriptionITOnCallEntryFilterInput | null > | null,
};

export type CreateTerneuzenContactMutationVariables = {
  input: CreateTerneuzenContactInput,
  condition?: ModelTerneuzenContactConditionInput | null,
};

export type CreateTerneuzenContactMutation = {
  createTerneuzenContact?:  {
    __typename: "TerneuzenContact",
    id: string,
    email: string,
    phone: string,
    name: string,
    onCall: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTerneuzenContactMutationVariables = {
  input: UpdateTerneuzenContactInput,
  condition?: ModelTerneuzenContactConditionInput | null,
};

export type UpdateTerneuzenContactMutation = {
  updateTerneuzenContact?:  {
    __typename: "TerneuzenContact",
    id: string,
    email: string,
    phone: string,
    name: string,
    onCall: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTerneuzenContactMutationVariables = {
  input: DeleteTerneuzenContactInput,
  condition?: ModelTerneuzenContactConditionInput | null,
};

export type DeleteTerneuzenContactMutation = {
  deleteTerneuzenContact?:  {
    __typename: "TerneuzenContact",
    id: string,
    email: string,
    phone: string,
    name: string,
    onCall: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateITContactMutationVariables = {
  input: CreateITContactInput,
  condition?: ModelITContactConditionInput | null,
};

export type CreateITContactMutation = {
  createITContact?:  {
    __typename: "ITContact",
    id: string,
    email: string,
    phone: string,
    name: string,
    onCall: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateITContactMutationVariables = {
  input: UpdateITContactInput,
  condition?: ModelITContactConditionInput | null,
};

export type UpdateITContactMutation = {
  updateITContact?:  {
    __typename: "ITContact",
    id: string,
    email: string,
    phone: string,
    name: string,
    onCall: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteITContactMutationVariables = {
  input: DeleteITContactInput,
  condition?: ModelITContactConditionInput | null,
};

export type DeleteITContactMutation = {
  deleteITContact?:  {
    __typename: "ITContact",
    id: string,
    email: string,
    phone: string,
    name: string,
    onCall: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTerneuzenOnCallEntryMutationVariables = {
  input: CreateTerneuzenOnCallEntryInput,
  condition?: ModelTerneuzenOnCallEntryConditionInput | null,
};

export type CreateTerneuzenOnCallEntryMutation = {
  createTerneuzenOnCallEntry?:  {
    __typename: "TerneuzenOnCallEntry",
    id: string,
    groupName: string,
    day: string,
    contactID?: string | null,
    contact?:  {
      __typename: "TerneuzenContact",
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

export type UpdateTerneuzenOnCallEntryMutationVariables = {
  input: UpdateTerneuzenOnCallEntryInput,
  condition?: ModelTerneuzenOnCallEntryConditionInput | null,
};

export type UpdateTerneuzenOnCallEntryMutation = {
  updateTerneuzenOnCallEntry?:  {
    __typename: "TerneuzenOnCallEntry",
    id: string,
    groupName: string,
    day: string,
    contactID?: string | null,
    contact?:  {
      __typename: "TerneuzenContact",
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

export type DeleteTerneuzenOnCallEntryMutationVariables = {
  input: DeleteTerneuzenOnCallEntryInput,
  condition?: ModelTerneuzenOnCallEntryConditionInput | null,
};

export type DeleteTerneuzenOnCallEntryMutation = {
  deleteTerneuzenOnCallEntry?:  {
    __typename: "TerneuzenOnCallEntry",
    id: string,
    groupName: string,
    day: string,
    contactID?: string | null,
    contact?:  {
      __typename: "TerneuzenContact",
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

export type CreateITOnCallEntryMutationVariables = {
  input: CreateITOnCallEntryInput,
  condition?: ModelITOnCallEntryConditionInput | null,
};

export type CreateITOnCallEntryMutation = {
  createITOnCallEntry?:  {
    __typename: "ITOnCallEntry",
    id: string,
    groupName: string,
    day: string,
    contactID?: string | null,
    contact?:  {
      __typename: "ITContact",
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

export type UpdateITOnCallEntryMutationVariables = {
  input: UpdateITOnCallEntryInput,
  condition?: ModelITOnCallEntryConditionInput | null,
};

export type UpdateITOnCallEntryMutation = {
  updateITOnCallEntry?:  {
    __typename: "ITOnCallEntry",
    id: string,
    groupName: string,
    day: string,
    contactID?: string | null,
    contact?:  {
      __typename: "ITContact",
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

export type DeleteITOnCallEntryMutationVariables = {
  input: DeleteITOnCallEntryInput,
  condition?: ModelITOnCallEntryConditionInput | null,
};

export type DeleteITOnCallEntryMutation = {
  deleteITOnCallEntry?:  {
    __typename: "ITOnCallEntry",
    id: string,
    groupName: string,
    day: string,
    contactID?: string | null,
    contact?:  {
      __typename: "ITContact",
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

export type GetTerneuzenContactQueryVariables = {
  id: string,
};

export type GetTerneuzenContactQuery = {
  getTerneuzenContact?:  {
    __typename: "TerneuzenContact",
    id: string,
    email: string,
    phone: string,
    name: string,
    onCall: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTerneuzenContactsQueryVariables = {
  filter?: ModelTerneuzenContactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTerneuzenContactsQuery = {
  listTerneuzenContacts?:  {
    __typename: "ModelTerneuzenContactConnection",
    items:  Array< {
      __typename: "TerneuzenContact",
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

export type GetITContactQueryVariables = {
  id: string,
};

export type GetITContactQuery = {
  getITContact?:  {
    __typename: "ITContact",
    id: string,
    email: string,
    phone: string,
    name: string,
    onCall: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListITContactsQueryVariables = {
  filter?: ModelITContactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListITContactsQuery = {
  listITContacts?:  {
    __typename: "ModelITContactConnection",
    items:  Array< {
      __typename: "ITContact",
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

export type GetTerneuzenOnCallEntryQueryVariables = {
  id: string,
};

export type GetTerneuzenOnCallEntryQuery = {
  getTerneuzenOnCallEntry?:  {
    __typename: "TerneuzenOnCallEntry",
    id: string,
    groupName: string,
    day: string,
    contactID?: string | null,
    contact?:  {
      __typename: "TerneuzenContact",
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

export type ListTerneuzenOnCallEntriesQueryVariables = {
  filter?: ModelTerneuzenOnCallEntryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTerneuzenOnCallEntriesQuery = {
  listTerneuzenOnCallEntries?:  {
    __typename: "ModelTerneuzenOnCallEntryConnection",
    items:  Array< {
      __typename: "TerneuzenOnCallEntry",
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

export type GetITOnCallEntryQueryVariables = {
  id: string,
};

export type GetITOnCallEntryQuery = {
  getITOnCallEntry?:  {
    __typename: "ITOnCallEntry",
    id: string,
    groupName: string,
    day: string,
    contactID?: string | null,
    contact?:  {
      __typename: "ITContact",
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

export type ListITOnCallEntriesQueryVariables = {
  filter?: ModelITOnCallEntryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListITOnCallEntriesQuery = {
  listITOnCallEntries?:  {
    __typename: "ModelITOnCallEntryConnection",
    items:  Array< {
      __typename: "ITOnCallEntry",
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

export type OnCreateTerneuzenContactSubscriptionVariables = {
  filter?: ModelSubscriptionTerneuzenContactFilterInput | null,
};

export type OnCreateTerneuzenContactSubscription = {
  onCreateTerneuzenContact?:  {
    __typename: "TerneuzenContact",
    id: string,
    email: string,
    phone: string,
    name: string,
    onCall: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTerneuzenContactSubscriptionVariables = {
  filter?: ModelSubscriptionTerneuzenContactFilterInput | null,
};

export type OnUpdateTerneuzenContactSubscription = {
  onUpdateTerneuzenContact?:  {
    __typename: "TerneuzenContact",
    id: string,
    email: string,
    phone: string,
    name: string,
    onCall: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTerneuzenContactSubscriptionVariables = {
  filter?: ModelSubscriptionTerneuzenContactFilterInput | null,
};

export type OnDeleteTerneuzenContactSubscription = {
  onDeleteTerneuzenContact?:  {
    __typename: "TerneuzenContact",
    id: string,
    email: string,
    phone: string,
    name: string,
    onCall: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateITContactSubscriptionVariables = {
  filter?: ModelSubscriptionITContactFilterInput | null,
};

export type OnCreateITContactSubscription = {
  onCreateITContact?:  {
    __typename: "ITContact",
    id: string,
    email: string,
    phone: string,
    name: string,
    onCall: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateITContactSubscriptionVariables = {
  filter?: ModelSubscriptionITContactFilterInput | null,
};

export type OnUpdateITContactSubscription = {
  onUpdateITContact?:  {
    __typename: "ITContact",
    id: string,
    email: string,
    phone: string,
    name: string,
    onCall: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteITContactSubscriptionVariables = {
  filter?: ModelSubscriptionITContactFilterInput | null,
};

export type OnDeleteITContactSubscription = {
  onDeleteITContact?:  {
    __typename: "ITContact",
    id: string,
    email: string,
    phone: string,
    name: string,
    onCall: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTerneuzenOnCallEntrySubscriptionVariables = {
  filter?: ModelSubscriptionTerneuzenOnCallEntryFilterInput | null,
};

export type OnCreateTerneuzenOnCallEntrySubscription = {
  onCreateTerneuzenOnCallEntry?:  {
    __typename: "TerneuzenOnCallEntry",
    id: string,
    groupName: string,
    day: string,
    contactID?: string | null,
    contact?:  {
      __typename: "TerneuzenContact",
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

export type OnUpdateTerneuzenOnCallEntrySubscriptionVariables = {
  filter?: ModelSubscriptionTerneuzenOnCallEntryFilterInput | null,
};

export type OnUpdateTerneuzenOnCallEntrySubscription = {
  onUpdateTerneuzenOnCallEntry?:  {
    __typename: "TerneuzenOnCallEntry",
    id: string,
    groupName: string,
    day: string,
    contactID?: string | null,
    contact?:  {
      __typename: "TerneuzenContact",
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

export type OnDeleteTerneuzenOnCallEntrySubscriptionVariables = {
  filter?: ModelSubscriptionTerneuzenOnCallEntryFilterInput | null,
};

export type OnDeleteTerneuzenOnCallEntrySubscription = {
  onDeleteTerneuzenOnCallEntry?:  {
    __typename: "TerneuzenOnCallEntry",
    id: string,
    groupName: string,
    day: string,
    contactID?: string | null,
    contact?:  {
      __typename: "TerneuzenContact",
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

export type OnCreateITOnCallEntrySubscriptionVariables = {
  filter?: ModelSubscriptionITOnCallEntryFilterInput | null,
};

export type OnCreateITOnCallEntrySubscription = {
  onCreateITOnCallEntry?:  {
    __typename: "ITOnCallEntry",
    id: string,
    groupName: string,
    day: string,
    contactID?: string | null,
    contact?:  {
      __typename: "ITContact",
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

export type OnUpdateITOnCallEntrySubscriptionVariables = {
  filter?: ModelSubscriptionITOnCallEntryFilterInput | null,
};

export type OnUpdateITOnCallEntrySubscription = {
  onUpdateITOnCallEntry?:  {
    __typename: "ITOnCallEntry",
    id: string,
    groupName: string,
    day: string,
    contactID?: string | null,
    contact?:  {
      __typename: "ITContact",
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

export type OnDeleteITOnCallEntrySubscriptionVariables = {
  filter?: ModelSubscriptionITOnCallEntryFilterInput | null,
};

export type OnDeleteITOnCallEntrySubscription = {
  onDeleteITOnCallEntry?:  {
    __typename: "ITOnCallEntry",
    id: string,
    groupName: string,
    day: string,
    contactID?: string | null,
    contact?:  {
      __typename: "ITContact",
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
