import { IRegisterRepository } from "../../Repository/IRepository";
import { TRepository } from "../../dto";

export class FindOneRegistersUseCase {
    private registersRepository: IRegisterRepository;

    constructor(registersRepository: IRegisterRepository) {
        this.registersRepository = registersRepository;
    }

     execute(filter: string): TRepository {
        const register =  this.registersRepository.findOne(filter);
        if (!register) return;
         this.registersRepository.addView(register.id);
        return register;
    }
}