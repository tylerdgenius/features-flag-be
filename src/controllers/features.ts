/* eslint-disable max-len */
import requestHandler from "@metrobuzz/express-request-handler";

const getFeaturesByFlag = requestHandler((rest, context) => {
  context.statusCode = 200;
  context.payload = {
    flagKey: "ui-config",
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
  };
  context.message = "Feature flags are not implemented yet.";
});

export default {
  getFeaturesByFlag,
};
