import { Request, Response } from "express";
import { AccountRepository } from "../../Repository/Implementation";
import { LoginAccountUseCase } from "./UseCase";
import { RegisterRepository } from "../../../Register/Repository/Implementation";

export class LoginAccountController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            email,
            password
        } = request.body;
        
        const loginAccountUseCase = new LoginAccountUseCase(
            new AccountRepository(),
            new RegisterRepository()
        );
        
        const token = await loginAccountUseCase.execute({
            email,
            password
        });

        return response.json({ token });
    }
}