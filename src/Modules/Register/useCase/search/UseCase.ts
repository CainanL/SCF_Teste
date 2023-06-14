import { IRegisterRepository } from "../../Repository/IRepository";
import { TRepository } from "../../dto";

export class SearchRegistersUseCase {
    private registersRepository: IRegisterRepository;

    constructor(registersRepository: IRegisterRepository) {
        this.registersRepository = registersRepository;
    }    

     execute(filter: string): Promise<TRepository[]>{
        return  this.registersRepository.search(filter);
    }
}