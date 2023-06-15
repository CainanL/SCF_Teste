import { Request, Response } from "express";
import { GetViewsAmmountUseCase } from "./UseCase";
import { RegisterRepository } from "../../Repository/Implementation";
import { AppError } from "../../../../shared/service/Errors";

export class GetViewsAmmountController {
    handle(request: Request, response: Response): Response {
        const { id } = request.params;
        const getViewsAmmountUseCase = new GetViewsAmmountUseCase(new RegisterRepository());

        try {
            const data = { viewsAmmount: getViewsAmmountUseCase.execute(Number(id)) };
            return response.json(data);
        } catch (error) {
            throw new AppError(error.message, error.statusCode);
        }

    }
}