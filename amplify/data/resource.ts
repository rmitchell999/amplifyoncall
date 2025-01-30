import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization(allow => [allow.publicApiKey()]), // Existing rule for public API key

  TernuezenSchedule: a
    .model({
      scheduleDetails: a.string(),
      // Additional fields can be added here
    })
    .authorization(allow => [allow.groups(['TernuezenAdmin', 'TernuezenReadOnly'])]), // Group-based authorization

  ITSchedule: a
    .model({
      scheduleDetails: a.string(),
      // Additional fields can be added here
    })
    .authorization(allow => [allow.group('ITAdmin')]), // Group-based authorization for IT
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});