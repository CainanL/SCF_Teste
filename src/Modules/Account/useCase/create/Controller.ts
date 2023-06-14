import { Request, Response } from "express";
import { AccountRepository } from "../../Repository/Implementation";
import { CreateAccountUseCase } from "./UseCase";

export class CreateAccountController {
     handle(request: Request, response: Response): Promise<Response> {
        const {
            email,
            password,
            role,
            userId
        } = request.body;

        const createAccountUseCase = new CreateAccountUseCase(new AccountRepository());
        
         createAccountUseCase.execute({
            email,
            password,
            role,
            userId
        });

        return response.send();
    }
}