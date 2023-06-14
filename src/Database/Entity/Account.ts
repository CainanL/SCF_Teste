import { ICreateAccountDTO, TRole } from "../../Modules/Account/dto";
import { Database } from "../Database";

export class Account {
    id: number;
    userId: number;
    email: string;
    passwordEncripted: string;
    role: TRole;

    constructor({ email, passowrd, role, userId }: ICreateAccountDTO) {
        this.userId = userId;
        this.email = email;
        this.passwordEncripted = passowrd;
        this.role = role;

        this.id = Database.account.length + 1;
    }
}