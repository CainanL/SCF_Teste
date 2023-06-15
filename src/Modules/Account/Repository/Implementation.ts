import { Database } from "../../../Database/Database";
import { Account } from "../../../Database/Entity/Account";
import { ICreateAccountDTO, TAccount } from "../dto";
import { IAccountRepository } from "./IRepository";

export class AccountRepository implements IAccountRepository {
    create(data: ICreateAccountDTO): void {
        try {
            Database.account.push(new Account(data));
        } catch (error) {
            throw error;
        }
    }

    getByEmail(email: string): TAccount {
        try {
            return Database.account.find(acc => acc.email == email);
        } catch (error) {
            throw error;
        }
    }

    getById(id: number): TAccount {
        try {
            return Database.account.find(acc => acc.id == id);
        } catch (error) {
            throw error;
        }
    }
}