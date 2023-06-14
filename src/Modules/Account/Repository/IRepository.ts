import { ICreateAccountDTO, TAccount } from "../dto";

export interface IAccountRepository {
    create(data: ICreateAccountDTO): Promise<void>;
    getByEmail(email: string): Promise<TAccount>;
    getById(id: number): Promise<TAccount>;
}