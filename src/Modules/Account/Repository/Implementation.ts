import { Database } from "../../../Database/Database";
import { Account } from "../../../Database/Entity/Account";
import { ICreateAccountDTO, TAccount } from "../dto";
import { IAccountRepository } from "./IRepository";

export class AccountRepository implements IAccountRepository {
    create(data: ICreateAccountDTO): void {
        Database.account.push(new Account(data));
    };

    getByEmail(email: string): TAccount {
        return Database.account.find(acc => acc.email == email);
    }

    getById(id: number): TAccount {
        return Database.account.find(acc => acc.id == id);
    }
}