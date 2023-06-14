import { Request, Response } from "express";
import { AccountRepository } from "../../Repository/Implementation";
import { CreateAccountUseCase } from "./UseCase";

export class CreateAccountController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            email,
            passowrd,
            role,
            userId
        } = request.body;

        const createAccountUseCase = new CreateAccountUseCase(new AccountRepository());
        
        await createAccountUseCase.execute({
            email,
            passowrd,
            role,
            userId
        });

        return response.send();
    }
}