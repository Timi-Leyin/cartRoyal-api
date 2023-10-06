import cors from "cors";
import express from "express";
import helmet from "helmet";
import path from "path";
import morgan from "morgan";
import mainConfig from "./config/main";

// main code logic
const app = express();

// middlewares
app.disable("x-powered-by");
app.use(express.static(path.join(__dirname, "public")));
app.use(helmet());
app.use(cors({ origin: mainConfig.origin }));
app.use(
  express.urlencoded({
    extended: true,
    limit: mainConfig.limit,
    parameterLimit: mainConfig.parameterLimit,
  })
);
app.use(express.json({ limit: mainConfig.limit }));
app.use(morgan("dev"));
// app.use(checkIp);



// error rotes
// app.use(error);
export default app;
