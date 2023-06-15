import { ICreateRegisterDTO, IUpdateRegisterDTO, TRepository, TView } from "../dto";

export interface IRegisterRepository {
    create(data: ICreateRegisterDTO): TRepository;
    addView(id: number): void;    
    getViewsByUserId(id: number): Array<TView>;
    search(filter: string):Array<TRepository>;
    findById(id: number):  TRepository;
    findOne(filter: string): TRepository;
    update(id: number, data: IUpdateRegisterDTO): TRepository;
    delete(id: number):  void;
}