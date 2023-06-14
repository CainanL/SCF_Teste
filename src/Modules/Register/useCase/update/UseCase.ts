import { IRegisterRepository } from "../../Repository/IRepository";
import { ICreateRegisterDTO, IUpdateRegisterDTO, TRepository } from "../../dto";

export class UpdateRegistersUseCase{
    private registersRepository: IRegisterRepository;

    constructor(registersRepository: IRegisterRepository) {
        this.registersRepository = registersRepository;
    }    

    async execute(id: number, data: IUpdateRegisterDTO): Promise<TRepository>{
        return await this.registersRepository.update(id, data);
    }
}