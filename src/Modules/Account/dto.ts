import { TRole } from "../../shared/dto";


export type TAccount = {
    id: number;
    userId: number;
    email: string;
    passwordEncripted: string;
    role: TRole
}

export interface ICreateAccountDTO {
    userId: number;
    email: string;
    password: string;
    role: TRole
}

export interface ILoginAccountDTO {
    email: string;
    password: string;
}