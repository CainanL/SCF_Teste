import { registers } from "../../../Entity/Database";
import { TRepository } from "../dto";
import { IRegisterRepository } from "./IRepository";

export class RegisterRepository implements IRegisterRepository {

    async search(filter: string): Promise<TRepository[]> {
        if (!filter || filter == '') return registers;

        return registers.filter(
            register =>
                String(register.id) == filter
                || register.job == filter
                || register.name == filter
        );
    }

    async findOne(filter: string): Promise<TRepository> {
        return registers.find(
            register =>
                String(register.id) == filter
                || register.job == filter
                || register.name == filter
        );
    }
}