import { TAccount } from "../Modules/Account/dto";
import { TRepository, TView } from "../Modules/Register/dto";

export class Database {
    static registers: Array<TRepository>  =  [
        {
            id: 1,
            name: "João Oliveira",
            job: "Desenvolvedor"
        },
        {
            id: 2,
            name: "Zé Oliveira",
            job: "Desenvolvedor"
        },
    ];

    static views: Array<TView> = [];

    static account: Array<TAccount> = [
        {
            email: "joao@scf.com",
            id: 1,
            passwordEncripted: '$2a$10$OuIy3mu85po0XZ5jRWpRjes1BBptbwpR8YrrZh8cwFEVs05QkdaoG', //password: 123
            role: ['delete', "update"],
            userId: 1
        },
        {
            email: "cainan@scf.com",
            id: 1,
            passwordEncripted: '$2a$10$OuIy3mu85po0XZ5jRWpRjes1BBptbwpR8YrrZh8cwFEVs05QkdaoG', //password: 123
            role: [],
            userId: 1
        },
    ];
}
