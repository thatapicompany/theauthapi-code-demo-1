require("dotenv").config();
const TheAuthAPI = require("theauthapi").default;
const theAuthAPI = new TheAuthAPI(process.env.ACCESS_TOKEN);

theAuthAPI.apiKeys
  .createKey({
    projectId: process.env.PROJECT_ID,
    customMetaData: {},
    customAccountId: "",
    name: "",
    rateLimitConfigs: {
      rateLimitedEntity: "ApiKey",
      rateLimit: 900,
      rateLimitTtl: 1,
    },
  })
  .then((key) => console.log("Key created > ", key))
  .catch((error) => console.log("Couldn't make the key", error));
