import { Router } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import { config } from "../config.js";

const authRouter = Router();

authRouter.get("/", async (req, res) => {
  const products = await service.getAllUsers();
  res.json(products);
});

authRouter.post("/login",
  passport.authenticate("local", { session: false }),
  async (req, res, next) => {

    try {

      const user = req.user
      const payload = {
        sub: user.id,
      };
      const token = jwt.sign(payload, config.api.jwtSecret);
      res.json({
        token,
        user
      });

    } catch (error) {
      next(error);
    }

  }
)

export default authRouter;
