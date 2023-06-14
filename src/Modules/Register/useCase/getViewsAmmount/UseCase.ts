import { IRegisterRepository } from "../../Repository/IRepository";

export class GetViewsAmmountUseCase {
    private registersRepository: IRegisterRepository;

    constructor(registersRepository: IRegisterRepository) {
        this.registersRepository = registersRepository;
    }

    async execute(id: number): Promise<number> {
        return (await this.registersRepository
            .getViewsByUserId(id))
            .length;
    }
}