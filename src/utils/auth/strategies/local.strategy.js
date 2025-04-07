import { Strategy } from "passport-local";
import UserService from "../../../services/users.service.js";
import  bcrypt  from "bcrypt";
import { unauthorized } from "@hapi/boom";

const userService = new UserService();
const LocalStrategy = new Strategy(async (username, password, done) => {

    try {
        const userLogIn = await userService.getUserByEmail(username)
        if (!userLogIn) {
                return done(unauthorized(), false);
            }
        const isValidPassword = await bcrypt.compare(password, userLogIn.password);
        if (!isValidPassword) {
                return done(unauthorized(), false);
        }
        delete userLogIn.dataValues.password
        done(null, userLogIn);
    } catch (error) {
          return done(unauthorized(), false);
    }
    
});

export default LocalStrategy;

