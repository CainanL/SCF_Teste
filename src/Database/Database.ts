import { TRepository } from "../Modules/Register/dto";

export class Database {
    static registers: Array<TRepository>  =  [
        {
            id: 1,
            name: "João Oliveira",
            job: "Desenvolvedor"
        }
    ]
}
