import { Router } from "express";
import UsersController from "../services/Users";

const routes = Router();

const usersController = new UsersController();

routes.get('/users', usersController.getAll);
 
routes.get('/users/:id',usersController.getById);

routes.post('/users',usersController.add);

routes.patch('/users/:id', usersController.update);

routes.delete('/users/:id', usersController.delete);

export default routes;