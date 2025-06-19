/* eslint-disable max-len */
import requestHandler from "@metrobuzz/express-request-handler";

const featureFlags = [
  {
    flagKey: "counter-version-1",
    user: {
      id: "user-123",
      attributes: {
        organization: "fmb",
        region: "NG",
        plan: "premium",
      },
    },
    // raw: "{\"theme\":\"dark\",\"showBeta\":true,\"labels\":[\"new\",\"ng-exclusive\"]}",
    parsed: {
      theme: "dark",
      showBeta: false,
      labels: ["new", "ng-exclusive"],
    },
    provider: "LaunchDarkly",
    fetchedAt: "2025-06-18T14:20:00Z",
  },
  {
    flagKey: "counter-version-2",
    user: {
      id: "user-123",
      attributes: {
        organization: "fmb",
        region: "NG",
        plan: "premium",
      },
    },
    // raw: "{\"theme\":\"dark\",\"showBeta\":true,\"labels\":[\"new\",\"ng-exclusive\"]}",
    parsed: {
      theme: "dark",
      showBeta: true,
      labels: ["new", "ng-exclusive"],
    },
    provider: "LaunchDarkly",
    fetchedAt: "2025-06-18T14:20:00Z",
  },
];

const getFeaturesByFlag = requestHandler((rest, context) => {
  const query = rest[0].query;

  if (!query.flagKey) {
    context.statusCode = 400;
    context.message = "Flag key is required.";
    return;
  }

  context.statusCode = 200;
  context.payload = featureFlags.filter(
    (flag) => flag.flagKey === query.flagKey,
  )[0];
  context.message = "Feature flags are not implemented yet.";
});

const getAllFeatures = requestHandler((rest, context) => {
  context.statusCode = 200;
  context.payload = featureFlags;
  context.message = "Feature flags are not implemented yet.";
});

export default {
  getFeaturesByFlag,
  getAllFeatures,
};
