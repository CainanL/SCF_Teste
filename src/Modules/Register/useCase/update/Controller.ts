import { Request, Response } from "express";
import { RegisterRepository } from "../../Repository/Implementation";
import { UpdateRegistersUseCase } from "./UseCase";

export class UpdateRegistersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, job } = request.body;
        const { id } = request.params;
        const updateRegistersUseCase = new UpdateRegistersUseCase(new RegisterRepository());

        const data = { register: await updateRegistersUseCase.execute(Number(id), { name, job }) }

        return response.json(data);
    }
}