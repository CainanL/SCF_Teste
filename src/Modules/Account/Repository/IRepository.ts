import { ICreateAccountDTO, TAccount } from "../dto";

export interface IAccountRepository {
    create(data: ICreateAccountDTO): void;
    getByEmail(email: string): TAccount;
    getById(id: number): TAccount;
}