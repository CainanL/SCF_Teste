import { Request, Response } from "express";
import { FindOneRegistersUseCase } from "./UseCase";
import { RegisterRepository } from "../../Repository/Implementation";
import { AppError } from "../../../../shared/service/Errors";

export class FindOneRegistersController {
    handle(request: Request, response: Response): Response {
        const { filter } = request.query as { filter: string };
        const findOneRegistersUseCase = new FindOneRegistersUseCase(new RegisterRepository());

        try {
            const data = { register: findOneRegistersUseCase.execute(filter) };
            return response.json(data);
        } catch (error) {
            throw new AppError(error.message, error.statusCode);
        }

    }
}