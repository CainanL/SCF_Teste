export type TTokenVerify = {
    id: number;
    email: string;
    userId: number;
    role: TRole;
}

export type TRole = Array<'update'|'delete'>