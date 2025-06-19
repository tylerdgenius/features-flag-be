import { routeCreator } from "@utils";

export const urls = {
  health: {
    check: () => routeCreator("check"),
  },
  features: {
    getByFlag: () => routeCreator("flags"),
    getAll: () => routeCreator("all"),
  },
};
