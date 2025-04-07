import express from "express";
import { config } from "./config.js";
import routerApi from "./routes/index.js";
import {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} from "./middleware/error.middleware.js";
import LocalStrategy from "./utils/auth/strategies/local.strategy.js";
import JwtStrategy  from "./utils/auth/strategies/jwt.strategy.js";
import passport from "passport";

const app = express();

app.use(express.json());

app.use(passport.initialize());
passport.use(LocalStrategy);
passport.use(JwtStrategy);

app.listen(config.api.port, () => {
  console.log(`API REST corriendo en http://localhost:${config.api.port}`);
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);
