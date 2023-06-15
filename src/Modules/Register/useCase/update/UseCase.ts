import { AppError } from "../../../../shared/service/Errors";
import { IRegisterRepository } from "../../Repository/IRepository";
import { ICreateRegisterDTO, IUpdateRegisterDTO, TRepository } from "../../dto";

export class UpdateRegistersUseCase {
    private registersRepository: IRegisterRepository;

    constructor(registersRepository: IRegisterRepository) {
        this.registersRepository = registersRepository;
    }

    execute(id: number, data: IUpdateRegisterDTO): TRepository {
        try {
            const registers = this.registersRepository.findById(id);
            if(!registers) throw new AppError('Register not found', 404);
            return this.registersRepository.update(id, data);
        } catch (error) {
            throw error;
        }
    }
}