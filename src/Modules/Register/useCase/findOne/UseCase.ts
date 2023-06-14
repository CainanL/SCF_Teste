import { IRegisterRepository } from "../../Repository/IRepository";
import { TRepository } from "../../dto";

export class FindOneRegistersUseCase {
    private registersRepository: IRegisterRepository;

    constructor(registersRepository: IRegisterRepository) {
        this.registersRepository = registersRepository;
    }

    async execute(filter: string): Promise<TRepository> {
        const register = await this.registersRepository.findOne(filter);
        if (!register) return;
        await this.registersRepository.addView(register.id);
        return register;
    }
}