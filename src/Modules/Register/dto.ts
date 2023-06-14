export type TRepository = {
    id: number;
    name: string;
    job: string;
}

export interface ICreateRegisterDTO {
    name: string;
    job: string;
}

export interface IUpdateRegisterDTO {
    name?: string;
    job?: string;
}