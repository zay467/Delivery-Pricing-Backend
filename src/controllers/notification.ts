import { Request, Response } from "express";
import Notification from "../models/notification";

const create = (req: Request, res: Response) => {
  const data = {
    ...req.body,
    created_by: res.locals.jwt.username,
    updated_by: res.locals.jwt.username,
  };
  const _notification = new Notification(data);
  return _notification
    .save()
    .then((notification) => {
      return res.status(200).json({ message: "Created Successfully." });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

const read = (req: Request, res: Response) => {
  Notification.find()
    .exec()
    .then((couriers) => {
      return res.status(200).json(couriers);
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

const update = (req: Request, res: Response) => {
  const data = {
    ...req.body,
    updated_by: res.locals.jwt.username,
  };
  Notification.findOneAndUpdate({ _id: req.params.id }, data)
    .exec()
    .then(() => {
      return res.status(200).json({ message: "Updated Successfully." });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

const deleteItem = (req: Request, res: Response) => {
  Notification.findOneAndDelete({ _id: req.params.id })
    .exec()
    .then(() => {
      return res.status(200).json({ message: "Deleted Successfully." });
    })
    .catch((error) => {
      return res.status(500).json({
        message: error.message,
        error,
      });
    });
};

export default { create, read, update, deleteItem };
