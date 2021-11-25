import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import User from "../models/user";
import signJWT from "../services/signJWT";

const register = (req: Request, res: Response) => {
  let { username, password } = req.body;
  bcryptjs.hash(password, 10, (hashError, hash) => {
    if (hashError) {
      return res.status(401).json({
        message: hashError.message,
        error: hashError,
      });
    }
    const _user = new User({ username, password: hash });
    return _user
      .save()
      .then((user) => {
        return res.status(200).json({ ...user });
      })
      .catch((error) => {
        return res.status(500).json({
          message: error.message,
          error,
        });
      });
  });
};

const login = (req: Request, res: Response) => {
  let { username, password } = req.body;
  User.find({ username })
    .exec()
    .then((users) => {
      if (users.length !== 1) {
        return res.status(401).json({
          message: "Unauthorized",
        });
      }

      bcryptjs.compare(password, users[0].password, (error, result) => {
        if (error) {
          return res.status(401).json({
            message: "Incorrect password.",
          });
        } else if (result) {
          signJWT(users[0], (_error, token) => {
            if (_error) {
              return res.status(500).json({
                message: _error.message,
                error: _error,
              });
            } else if (token) {
              return res.status(200).json({
                token: token,
              });
            }
          });
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

export default { register, login };
