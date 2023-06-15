import { Request, Response } from "express";
import { AccountRepository } from "../../Repository/Implementation";
import { CreateAccountUseCase } from "./UseCase";
import { AppError } from "../../../../shared/service/Errors";

export class CreateAccountController {
    handle(request: Request, response: Response): Response {
        const {
            email,
            password,
            role,
            userId
        } = request.body;

        const createAccountUseCase = new CreateAccountUseCase(new AccountRepository());

        try {
            createAccountUseCase.execute({
                email,
                password,
                role,
                userId
            });

            return response.send();
        } catch (error) {
            throw new AppError(error.message, error.statusCode);
        }
    }
}