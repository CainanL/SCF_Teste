import { IRegisterRepository } from "../../Repository/IRepository";

export class GetViewsAmmountUseCase {
    private registersRepository: IRegisterRepository;

    constructor(registersRepository: IRegisterRepository) {
        this.registersRepository = registersRepository;
    }

    execute(id: number): number {
        try {
            return (this.registersRepository
                .getViewsByUserId(id))
                .length;
        } catch (error) {
            throw error
        }

    }
}