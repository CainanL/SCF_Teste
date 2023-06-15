import { Request, Response } from "express";
import { SearchRegistersUseCase } from "./UseCase";
import { RegisterRepository } from "../../Repository/Implementation";
import { AppError } from "../../../../shared/service/Errors";

export class SearchRegistersController {
    handle(request: Request, response: Response): Response {
        const { filter } = request.query as { filter: string };
        const searchRegistersUseCase = new SearchRegistersUseCase(new RegisterRepository());

        try {
            const data = { registers: searchRegistersUseCase.execute(filter) }
            return response.json(data);
        } catch (error) {
            throw new AppError(error.message, error.statusCode);
        }

    }
}