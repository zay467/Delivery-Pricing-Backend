import { Request, Response } from "express";
import Courier from "../models/courier";

const create = (req: Request, res: Response) => {
  const _courier = new Courier(req.body);
  return _courier
    .save()
    .then((courier) => {
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
  //   console.log(res.locals.jwt.username);
  Courier.find()
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
  Courier.findOneAndUpdate({ _id: req.params.id }, req.body)
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
  Courier.findOneAndDelete({ _id: req.params.id })
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
