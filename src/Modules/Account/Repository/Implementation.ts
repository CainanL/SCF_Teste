import { Database } from "../../../Database/Database";
import { Account } from "../../../Database/Entity/Account";
import { ICreateAccountDTO, TAccount } from "../dto";
import { IAccountRepository } from "./IRepository";

export class AccountRepository implements IAccountRepository{
     create(data: ICreateAccountDTO): Promise<void> {
        Database.account.push(new Account(data));
    };
    
     getByEmail(email: string): Promise<TAccount> {
        return Database.account.find(acc => acc.email == email);
    }    
    
     getById(id: number): Promise<TAccount> {
        return Database.account.find(acc => acc.id == id);
    }
}