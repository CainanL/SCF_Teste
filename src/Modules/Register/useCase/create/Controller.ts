import { Request, Response } from "express";
import { RegisterRepository } from "../../Repository/Implementation";
import { CreateRegistersUseCase } from "./UseCase";

export class CreateRegistersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, job } = request.body;
        const createRegistersUseCase = new CreateRegistersUseCase(new RegisterRepository());
        
        const data = { register: await createRegistersUseCase.execute({ name, job }) }

        return response.json(data);
    }
}