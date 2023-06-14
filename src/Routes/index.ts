import { Router } from "express";
import { registerRouter } from "./register.routes";
import { accountRouter } from "./account.routes";

const routes = Router();

routes.use('/register', registerRouter);
routes.use('/account', accountRouter);

export { routes }