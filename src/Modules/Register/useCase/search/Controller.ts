import { Request, Response } from "express";
import { SearchRegistersUseCase } from "./UseCase";
import { RegisterRepository } from "../../Repository/Implementation";

export class SearchRegistersController {
     handle(request: Request, response: Response): Promise<Response> {
        const { filter } = request.query as { filter: string };
        console.log(filter)
        const searchRegistersUseCase = new SearchRegistersUseCase(new RegisterRepository());

        const data = { registers:  searchRegistersUseCase.execute(filter) }

        return response.json(data);
    }
}