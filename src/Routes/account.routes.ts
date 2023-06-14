import { Router } from "express";
import { CreateAccountController } from "../Modules/Account/useCase/create/Controller";
import { LoginAccountController } from "../Modules/Account/useCase/login/Controller";
import { AccountRequestSchema } from "../Modules/Account/middleware/requestSchema";

const createAccountController = new CreateAccountController();
const loginAccountController = new LoginAccountController();

const accountRouter = Router();

accountRouter.post(
    '/create',
    AccountRequestSchema.create,
    AccountRequestSchema.validateRequestSchema,
    createAccountController.handle
);

accountRouter.post(
    '/login',
    AccountRequestSchema.login,
    AccountRequestSchema.validateRequestSchema,
    loginAccountController.handle
);

export { accountRouter }