import { Request, Response } from "express";
import { GetViewsAmmountUseCase } from "./UseCase";
import { RegisterRepository } from "../../Repository/Implementation";

export class GetViewsAmmountController {
     handle(request: Request, response: Response): Response {
        const { id } = request.params;
        const getViewsAmmountUseCase = new GetViewsAmmountUseCase(new RegisterRepository());
        
        const data = { viewsAmmount:  getViewsAmmountUseCase.execute(Number(id)) }

        return response.json(data);
    }
}