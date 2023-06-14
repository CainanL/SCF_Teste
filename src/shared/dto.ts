import { ERole } from "../Modules/Account/enum";

export type TTokenVerify = {
    id: number;
    email: string;
    userId: number;
    role: TRole;
}

export type TRole = Array<ERole.deleteRegister | ERole.updateRegister>