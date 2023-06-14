export type TRepository = {
    id: number;
    name: string;
    job: string;
}

export type TView = {
    id: number;
    userId: number;
}

export type TRequestUserData = {
    requestUserData: { role: Array<'delete' | 'update'> }
}

export interface ICreateRegisterDTO {
    name: string;
    job: string;
}

export interface IUpdateRegisterDTO {
    name?: string;
    job?: string;
}