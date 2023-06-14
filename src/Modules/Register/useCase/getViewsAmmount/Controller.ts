import { Request, Response } from "express";
import { GetViewsAmmountUseCase } from "./UseCase";
import { RegisterRepository } from "../../Repository/Implementation";

export class GetViewsAmmountController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const getViewsAmmountUseCase = new GetViewsAmmountUseCase(new RegisterRepository());
        
        const data = { viewsAmmount: await getViewsAmmountUseCase.execute(Number(id)) }

        return response.json(data);
    }
}