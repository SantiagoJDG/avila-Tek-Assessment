import { Router } from "express";
import validatorHandler from "../middleware/validator.handler.js";
import { createUserSchema, getUserSchema } from "../db/schemas/users.schema.js";
import UsersService from "../services/users.service.js";
import passport from "passport";


const usersRouter = Router();
const service = new UsersService();

usersRouter.get("/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
  const users = await service.getAllUsers();
  res.json(users);
});

usersRouter.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  validatorHandler(getUserSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.getUserById(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

usersRouter.post("/",
  // passport.authenticate("jwt", { session: false }),
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {

    try {
      const body = req.body;
      const newuser = await service.createUser(body);
      res.json(newuser);
    } catch (error) {
      next(error);
    }

  }
)

export default usersRouter;
