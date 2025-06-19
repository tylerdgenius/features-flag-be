import { routeCreator } from "@utils";

export const urls = {
  health: {
    check: () => routeCreator("check"),
  },
  features: {
    getByFlag: () => routeCreator("getByFlag"),
  },
};
