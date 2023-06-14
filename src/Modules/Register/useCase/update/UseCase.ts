import { IRegisterRepository } from "../../Repository/IRepository";
import { ICreateRegisterDTO, IUpdateRegisterDTO, TRepository } from "../../dto";

export class UpdateRegistersUseCase{
    private registersRepository: IRegisterRepository;

    constructor(registersRepository: IRegisterRepository) {
        this.registersRepository = registersRepository;
    }    

     execute(id: number, data: IUpdateRegisterDTO): Promise<TRepository>{
        return  this.registersRepository.update(id, data);
    }
}