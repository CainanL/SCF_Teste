import { Router } from "express";
import { SearchRegistersController } from "../Modules/Register/useCase/search/Controller";
import { FindOneRegistersController } from "../Modules/Register/useCase/findOne/Controller";
import { CreateRegistersController } from "../Modules/Register/useCase/create/Controller";
import { DeleteRegistersController } from "../Modules/Register/useCase/delete/Controller";
import { UpdateRegistersController } from "../Modules/Register/useCase/update/Controller";
import { GetViewsAmmountController } from "../Modules/Register/useCase/getViewsAmmount/Controller";
import { accountValidator } from "../shared/middleware/accountValidator";
import { PermissionRegisterValidator } from "../Modules/Register/middleware/permission";

const searchRegistersController = new SearchRegistersController();
const findOneRegistersController = new FindOneRegistersController();
const createRegistersController = new CreateRegistersController();
const deleteRegistersController = new DeleteRegistersController();
const updateRegistersController = new UpdateRegistersController();
const getViewsAmmountController = new GetViewsAmmountController();
const permissionUpdateRegisterValidator = new PermissionRegisterValidator('update');
const permissionDeleteRegisterValidator = new PermissionRegisterValidator('delete');

const registerRouter = Router();

registerRouter.get("/", searchRegistersController.handle);
registerRouter.get("/findOne", findOneRegistersController.handle);
registerRouter.post("/", createRegistersController.handle);
registerRouter.put(
    "/:id",
    accountValidator,
    permissionUpdateRegisterValidator.hasPermission.bind(permissionUpdateRegisterValidator),
    updateRegistersController.handle
);
registerRouter.delete(
    "/:id",
    accountValidator,
    permissionDeleteRegisterValidator.hasPermission.bind(permissionDeleteRegisterValidator),
    deleteRegistersController.handle
);
registerRouter.get("/viewsAmmount/:id", getViewsAmmountController.handle);



export { registerRouter };