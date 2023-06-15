import { Request, Response } from "express";
import { RegisterRepository } from "../../Repository/Implementation";
import { CreateRegistersUseCase } from "./UseCase";

export class CreateRegistersController {
     handle(request: Request, response: Response): Response {
        const { name, job } = request.body;
        const createRegistersUseCase = new CreateRegistersUseCase(new RegisterRepository());

        const data = { register:  createRegistersUseCase.execute({ name, job }) }
        return response.json(data);
    }
}