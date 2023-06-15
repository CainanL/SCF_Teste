import { Request, Response } from "express";
import { RegisterRepository } from "../../Repository/Implementation";
import { CreateRegistersUseCase } from "./UseCase";
import { AppError } from "../../../../shared/service/Errors";

export class CreateRegistersController {
    handle(request: Request, response: Response): Response {
        const { name, job } = request.body;
        const createRegistersUseCase = new CreateRegistersUseCase(new RegisterRepository());

        try {
            const data = { register: createRegistersUseCase.execute({ name, job }) };
            return response.json(data);
        } catch (error) {
            throw new AppError(error.message, error.statusCode);
        }

    }
}