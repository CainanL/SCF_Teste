import { ICreateAccountDTO } from "../../Modules/Account/dto";
import { TRole } from "../../shared/dto";
import { Database } from "../Database";

export class Account {
    id: number;
    userId: number;
    email: string;
    passwordEncripted: string;
    role: TRole;

    constructor({ email, password, role, userId }: ICreateAccountDTO) {
        this.userId = userId;
        this.email = email;
        this.passwordEncripted = password;
        this.role = role;

        this.id = Database.account.length + 1;
    }
}