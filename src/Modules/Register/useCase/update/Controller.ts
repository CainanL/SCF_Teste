import { Request, Response } from "express";
import { RegisterRepository } from "../../Repository/Implementation";
import { UpdateRegistersUseCase } from "./UseCase";
import { AppError } from "../../../../shared/service/Errors";

export class UpdateRegistersController {
    handle(request: Request, response: Response): Response {
        const { name, job } = request.body;
        const { id } = request.params;
        const updateRegistersUseCase = new UpdateRegistersUseCase(new RegisterRepository());

        try {
            const data = { register: updateRegistersUseCase.execute(Number(id), { name, job }) }
            return response.json(data);
        } catch (error) {
            throw new AppError(error.message, error.statusCode);
        }

    }
}