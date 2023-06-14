import { Database } from "../../../Database/Database";
import { Register } from "../../../Database/Entity/Register";
import { ICreateRegisterDTO, IUpdateRegisterDTO, TRepository } from "../dto";
import { IRegisterRepository } from "./IRepository";

export class RegisterRepository implements IRegisterRepository {

    async create(data: ICreateRegisterDTO): Promise<TRepository> {
        const newRegister = new Register(data);
        console.log(newRegister)
        Database.registers.push(newRegister);
        return newRegister;
    }

    async search(filter: string): Promise<TRepository[]> {
        if (!filter || filter == '') return Database.registers;

        return Database.registers.filter(
            register =>
                register.job.toLocaleLowerCase() == filter.toLocaleLowerCase()
                || register.name.toLocaleLowerCase() == filter.toLocaleLowerCase()
        );
    }

    async findOne(filter: string): Promise<TRepository> {
        return Database.registers.find(
            register =>
                register.job.toLocaleLowerCase() == filter.toLocaleLowerCase()
                || register.name.toLocaleLowerCase() == filter.toLocaleLowerCase()
        );
    }

    async findById(id: number): Promise<TRepository> {
        return Database.registers.find(
            register =>
                register.id == id
        );
    }

    async update(id: number, { job, name }: IUpdateRegisterDTO): Promise<TRepository> {

        const index = Database.registers.findIndex(register => register.id == id)

        if (index == -1) return;

        if (!!job) Database.registers[index].job = job;
        if (!!name) Database.registers[index].name = name;

        return Database.registers[index];
    }

    async delete(id: number): Promise<void> {
        Database.registers = Database.registers.filter(register => register.id !== id);
    }
}