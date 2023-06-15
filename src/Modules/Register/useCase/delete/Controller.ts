import { Request, Response } from "express";
import { DeleteRegistersUseCase } from "./UseCase";
import { RegisterRepository } from "../../Repository/Implementation";
import { AppError } from "../../../../shared/service/Errors";

export class DeleteRegistersController {
    handle(request: Request, response: Response): Response {
        const { id } = request.params;
        const deleteRegistersUseCase = new DeleteRegistersUseCase(new RegisterRepository());

        try {
            deleteRegistersUseCase.execute(Number(id))
            return response.send();
        } catch (error) {
            throw new AppError(error.message, error.statusCode);
        }

    }
}