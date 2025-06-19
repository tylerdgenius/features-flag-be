import { constants } from "@constants";
import controllers from "@controllers";
import type { RouteHandler } from "@types";
import { joinUrls } from "@utils";

const serviceLoader: RouteHandler[] = [
  {
    path: joinUrls([constants.urls.health.check().path]),
    method: constants.urls.health.check().method,
    handlers: [controllers.health.checkServiceHealth],
  },
];

export default serviceLoader;
