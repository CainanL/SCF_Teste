import { IRegisterRepository } from "../../Repository/IRepository";
import { ICreateRegisterDTO, TRepository } from "../../dto";

export class CreateRegistersUseCase{
    private registersRepository: IRegisterRepository;

    constructor(registersRepository: IRegisterRepository) {
        this.registersRepository = registersRepository;
    }    

    async execute(data: ICreateRegisterDTO): Promise<TRepository>{
        return await this.registersRepository.create(data);
    }
}