import { AppError } from "../../../../shared/service/Errors";
import { IRegisterRepository } from "../../Repository/IRepository";
import { TRepository } from "../../dto";

export class FindOneRegistersUseCase {
    private registersRepository: IRegisterRepository;

    constructor(registersRepository: IRegisterRepository) {
        this.registersRepository = registersRepository;
    }

    execute(filter: string): TRepository {
        try {
            const register = this.registersRepository.findOne(filter);
            if (!register) throw new AppError('Register not found', 404);
            this.registersRepository.addView(register.id);
            return register;
        } catch (error) {
            throw error;
        }

    }
}