import { IRegisterRepository } from "../../Repository/IRepository";

export class DeleteRegistersUseCase{
    private registersRepository: IRegisterRepository;

    constructor(registersRepository: IRegisterRepository) {
        this.registersRepository = registersRepository;
    }    

    async execute(id: number): Promise<void>{
        await this.registersRepository.delete(id);
    }
}