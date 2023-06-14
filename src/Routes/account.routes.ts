import { Router } from "express";
import { CreateAccountController } from "../Modules/Account/useCase/create/Controller";
import { LoginAccountController } from "../Modules/Account/useCase/login/Controller";

const createAccountController = new CreateAccountController();
const loginAccountController = new LoginAccountController();

const accountRouter = Router();

accountRouter.post('/create', createAccountController.handle);
accountRouter.post('/login', loginAccountController.handle);

export { accountRouter }