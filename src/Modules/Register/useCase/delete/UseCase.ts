import { AppError } from "../../../../shared/service/Errors";
import { IRegisterRepository } from "../../Repository/IRepository";

export class DeleteRegistersUseCase {
    private registersRepository: IRegisterRepository;

    constructor(registersRepository: IRegisterRepository) {
        this.registersRepository = registersRepository;
    }

    execute(id: number): void {
        try {
            const registers = this.registersRepository.findById(id);
            if(!registers) throw new AppError('Register not found', 404);
            this.registersRepository.delete(id);
        } catch (error) {
            throw error;
        }
       
    }
}