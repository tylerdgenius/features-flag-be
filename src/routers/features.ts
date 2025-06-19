import { constants } from "@constants";
import controllers from "@controllers";
import { RouteHandler } from "@types";
import { joinUrls } from "@utils";

const serviceLoader: RouteHandler[] = [
  {
    path: constants.urls.features.getAll().path,
    method: constants.urls.features.getAll().method,
    handlers: [controllers.features.getAllFeatures],
  },
  {
    path: joinUrls([constants.urls.features.getByFlag().path]),
    method: constants.urls.features.getByFlag().method,
    handlers: [controllers.features.getFeaturesByFlag],
  },
];

export default serviceLoader;
