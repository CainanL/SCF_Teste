import { Database } from "../../../Database/Database";
import { Account } from "../../../Database/Entity/Account";
import { ICreateAccountDTO, TAccount } from "../dto";
import { IAccountRepository } from "./IRepository";

export class AccountRepository implements IAccountRepository{
    async create(data: ICreateAccountDTO): Promise<void> {
        Database.account.push(new Account(data));
    };
    
    async getByEmail(email: string): Promise<TAccount> {
        return Database.account.find(acc => acc.email == email);
    }    
    
    async getById(id: number): Promise<TAccount> {
        return Database.account.find(acc => acc.id == id);
    }
}