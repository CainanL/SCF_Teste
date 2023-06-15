import { Router } from "express";
import { SearchRegistersController } from "../Modules/Register/useCase/search/Controller";
import { FindOneRegistersController } from "../Modules/Register/useCase/findOne/Controller";
import { CreateRegistersController } from "../Modules/Register/useCase/create/Controller";
import { DeleteRegistersController } from "../Modules/Register/useCase/delete/Controller";
import { UpdateRegistersController } from "../Modules/Register/useCase/update/Controller";
import { GetViewsAmmountController } from "../Modules/Register/useCase/getViewsAmmount/Controller";
import { Validator } from "../shared/middleware/accountValidator";
import { PermissionRegisterValidator } from "../Modules/Register/middleware/permission";
import { RegisterRequestSchema } from "../Modules/Register/middleware/requestSchema";

const searchRegistersController = new SearchRegistersController();
const findOneRegistersController = new FindOneRegistersController();
const createRegistersController = new CreateRegistersController();
const deleteRegistersController = new DeleteRegistersController();
const updateRegistersController = new UpdateRegistersController();
const getViewsAmmountController = new GetViewsAmmountController();
const permissionUpdateRegisterValidator = new PermissionRegisterValidator('update');
const permissionDeleteRegisterValidator = new PermissionRegisterValidator('delete');

const registerRouter = Router();

registerRouter.get(
    "/",
    RegisterRequestSchema.search,
    RegisterRequestSchema.validateRequestSchema,
    searchRegistersController.handle
);

registerRouter.get(
    "/findOne",
    RegisterRequestSchema.findOne,
    RegisterRequestSchema.validateRequestSchema,
    findOneRegistersController.handle
);

registerRouter.post(
    "/",
    createRegistersController.handle
);

registerRouter.put(
    "/:id",
    RegisterRequestSchema.update,
    RegisterRequestSchema.validateRequestSchema,
    Validator.account,
    permissionUpdateRegisterValidator
        .hasPermission.bind(permissionUpdateRegisterValidator),
    updateRegistersController.handle
);

registerRouter.delete(
    "/:id",
    RegisterRequestSchema.requestId,
    RegisterRequestSchema.validateRequestSchema,
    Validator.account,
    permissionDeleteRegisterValidator
        .hasPermission.bind(permissionDeleteRegisterValidator),
    deleteRegistersController.handle
);

registerRouter.get(
    "/viewsAmmount/:id",
    RegisterRequestSchema.requestId,
    RegisterRequestSchema.validateRequestSchema,
    getViewsAmmountController.handle
);



export { registerRouter };