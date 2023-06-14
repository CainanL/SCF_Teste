import { ICreateRegisterDTO, IUpdateRegisterDTO, TRepository } from "../dto";

export interface IRegisterRepository {
    create(data: ICreateRegisterDTO): Promise<TRepository>;
    search(filter: string): Promise<Array<TRepository>>;
    findById(id: number):  Promise<TRepository>;
    findOne(filter: string): Promise<TRepository>;
    update(id: number, data: IUpdateRegisterDTO): Promise<TRepository>;
    delete(id: number):  Promise<void>;
}