import { Router } from "express";
import { SearchRegistersController } from "../../Modules/Register/useCase/search/Controller";
import { FindOneRegistersController } from "../../Modules/Register/useCase/findOne/Controller";
import { CreateRegistersController } from "../../Modules/Register/useCase/create/Controller";
import { DeleteRegistersController } from "../../Modules/Register/useCase/delete/Controller";
import { UpdateRegistersController } from "../../Modules/Register/useCase/update/Controller";

const searchRegistersController = new SearchRegistersController();
const findOneRegistersController = new FindOneRegistersController();
const createRegistersController = new CreateRegistersController();
const deleteRegistersController = new DeleteRegistersController();
const updateRegistersController = new UpdateRegistersController();

const registerRouter = Router();

registerRouter.get("/", searchRegistersController.handle);
registerRouter.get("/findOne", findOneRegistersController.handle);
registerRouter.post("/", createRegistersController.handle);
registerRouter.put("/:id", updateRegistersController.handle);
registerRouter.delete("/:id", deleteRegistersController.handle);



export { registerRouter };