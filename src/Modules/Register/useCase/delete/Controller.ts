import { Request, Response } from "express";
import { DeleteRegistersUseCase } from "./UseCase";
import { RegisterRepository } from "../../Repository/Implementation";

export class DeleteRegistersController {
     handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const deleteRegistersUseCase = new DeleteRegistersUseCase(new RegisterRepository());
        
         deleteRegistersUseCase.execute(Number(id))
        return response.send();
    }
}