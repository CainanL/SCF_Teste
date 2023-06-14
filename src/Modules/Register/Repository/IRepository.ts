import { ICreateRegisterDTO, IUpdateRegisterDTO, TRepository, TView } from "../dto";

export interface IRegisterRepository {
    create(data: ICreateRegisterDTO): Promise<TRepository>;
    addView(id: number): Promise<void>;    
    getViewsByUserId(id: number): Promise<Array<TView>>;
    search(filter: string): Promise<Array<TRepository>>;
    findById(id: number):  Promise<TRepository>;
    findOne(filter: string): Promise<TRepository>;
    update(id: number, data: IUpdateRegisterDTO): Promise<TRepository>;
    delete(id: number):  Promise<void>;
}