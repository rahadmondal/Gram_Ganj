import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { admin } from "better-auth/plugins/admin";
import { MongoClient } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://mdrahadmondal:fgLvuoKXBLCIkwga@gram-gang-prod.lbsx5yq.mongodb.net/mydb?retryWrites=true&w=majority",
);
const db = client.db();

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    // requireEmailVerification: true,
    customSyntheticUser: ({ coreFields, additionalFields, id }) => ({
      ...coreFields,
      role: "user",
      banned: false,
      banReason: null,
      banExpires: null,
      ...additionalFields,
      id,
    }),
  },
  user: {
    additionalFields: {
      phone: {
        type: "string",
        required: true,
        defaultValue: "",
      },
    },
  },

  database: mongodbAdapter(db, {
    client,
  }),
  plugins: [admin()],
});
