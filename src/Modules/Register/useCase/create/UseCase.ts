import { IRegisterRepository } from "../../Repository/IRepository";
import { ICreateRegisterDTO, TRepository } from "../../dto";

export class CreateRegistersUseCase {
    private registersRepository: IRegisterRepository;

    constructor(registersRepository: IRegisterRepository) {
        this.registersRepository = registersRepository;
    }

     execute(data: ICreateRegisterDTO): TRepository {
        try {
            return  this.registersRepository.create(data);
        } catch (error) {
            throw error;
        }
        
    }
}