import { TRepository } from "../dto";

export interface IRegisterRepository{
    search(filter: string): Promise<Array<TRepository>>;
    findOne(filter: string): Promise<TRepository>;
}