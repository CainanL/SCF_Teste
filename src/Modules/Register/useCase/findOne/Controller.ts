import { Request, Response } from "express";
import { FindOneRegistersUseCase } from "./UseCase";
import { RegisterRepository } from "../../Repository/Implementation";

export class FindOneRegistersController {
     handle(request: Request, response: Response): Promise<Response> {
        const { filter } = request.query as { filter: string };
        const findOneRegistersUseCase = new FindOneRegistersUseCase(new RegisterRepository());

        const data = { register:  findOneRegistersUseCase.execute(filter) }
        return response.json(data);
    }
}