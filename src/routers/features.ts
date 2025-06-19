import { constants } from "@constants";
import controllers from "@controllers";
import { RouteHandler } from "@types";
import { joinUrls } from "@utils";

const serviceLoader: RouteHandler[] = [
    {
        path: joinUrls([constants.urls.features.getByFlag().path]),
        method: constants.urls.features.getByFlag().method,
        handlers: [controllers.features.getFeaturesByFlag],
    },
];


export default serviceLoader;
