import { Strategy, ExtractJwt } from "passport-jwt";
import { config } from "../../../config.js";

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.api.jwtSecret,
};

const JwtStrategy = new Strategy(options, async (payload, done) => { 

    return done(null, payload);
    
})

export default JwtStrategy;