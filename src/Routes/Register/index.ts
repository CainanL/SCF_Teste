import { Router } from "express";
import { SearchRegistersController } from "../../Modules/Register/useCase/search/Controller";
import { FindOneRegistersController } from "../../Modules/Register/useCase/findOne/Controller";

const searchRegistersController = new SearchRegistersController();
const findOneRegistersController = new FindOneRegistersController();

const registerRouter = Router();

registerRouter.get("/search", searchRegistersController.handle);
registerRouter.get("/findOne", findOneRegistersController.handle);



export { registerRouter };