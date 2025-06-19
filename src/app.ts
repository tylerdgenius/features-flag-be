import { getters } from "@config";
import routesLoader from "@metrobuzz/express-routes-loader";
import cors from "cors";
import express from "express";

const app = express();

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
};

app.use(cors(corsOptions));

app.use(express.json());

routesLoader("src/routers", app, {
  servicePrefix: "/api",
  wildcardHandler: (...rest) => {
    const res = rest[1];

    res.status(404).json({
      status: false,
      message: "Route not found",
      payload: null,
    });
  },
});

const port = getters.getAppPort();

app.listen(port, () => {
  console.log(`${getters.geti18ns().LOGS.RUNNING_APP} ${port}`);
});
