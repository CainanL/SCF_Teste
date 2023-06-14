import { Request, Response } from "express";
import { DeleteRegistersUseCase } from "./UseCase";
import { RegisterRepository } from "../../Repository/Implementation";

export class DeleteRegistersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const deleteRegistersUseCase = new DeleteRegistersUseCase(new RegisterRepository());
        
        await deleteRegistersUseCase.execute(Number(id))
        return response.send();
    }
}