import { Request, Response } from "express";
import { AccountRepository } from "../../Repository/Implementation";
import { LoginAccountUseCase } from "./UseCase";
import { RegisterRepository } from "../../../Register/Repository/Implementation";
import { AppError } from "../../../../shared/service/Errors";

export class LoginAccountController {
    handle(request: Request, response: Response): Response {
        const {
            email,
            password
        } = request.body;

        const loginAccountUseCase = new LoginAccountUseCase(
            new AccountRepository(),
            new RegisterRepository()
        );
        try {
            const token = loginAccountUseCase.execute({
                email,
                password
            });

            return response.json({ token });
        } catch (error) {
            throw new AppError(error.message, error.statusCode);
        }
    }
}