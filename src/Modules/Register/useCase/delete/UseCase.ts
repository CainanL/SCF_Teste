import { IRegisterRepository } from "../../Repository/IRepository";

export class DeleteRegistersUseCase{
    private registersRepository: IRegisterRepository;

    constructor(registersRepository: IRegisterRepository) {
        this.registersRepository = registersRepository;
    }    

     execute(id: number): Promise<void>{
         this.registersRepository.delete(id);
    }
}