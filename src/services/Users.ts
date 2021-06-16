import { Request, Response } from 'express';
import User from '../models/Users';

export default class Users {

  public async add(req: Request, res: Response): Promise<Response> {
    try {
      const user = await User.create(req.body);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json(error)
    }
  }
  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const user = await User.find();
      return res.status(200).send({ user });
    } catch (error) {
      return res.status(400).send({ error })
    }
  }
  public async getById(req: Request, res: Response): Promise<Response> {
    try {
      const user = await User.findOne({ _id: req.params.id });
      return res.status(200).send({ user });
    } catch (error) {
      return res.status(400).send({ error })
    }
  }
  public async update(req: Request, res: Response): Promise<Response> {
    return res.send("");
  }
  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const user = await User.remove({ _id: req.params.id });
      return res.status(200).send({ user });
    } catch (error) {
      return res.status(400).send({ error })
    }
  }

}
