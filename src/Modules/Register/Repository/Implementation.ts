import { Database } from "../../../Database/Database";
import { Register } from "../../../Database/Entity/Register";
import { View } from "../../../Database/Entity/View";
import { ICreateRegisterDTO, IUpdateRegisterDTO, TRepository, TView } from "../dto";
import { IRegisterRepository } from "./IRepository";

export class RegisterRepository implements IRegisterRepository {
    
     create(data: ICreateRegisterDTO): Promise<TRepository> {
        const newRegister = new Register(data);
        console.log(newRegister)
        Database.registers.push(newRegister);
        return newRegister;
    }

     search(filter: string): Promise<TRepository[]> {
        if (!filter || filter == '') return Database.registers;

        return Database.registers.filter(
            register =>
                register.job.toLocaleLowerCase() == filter.toLocaleLowerCase()
                || register.name.toLocaleLowerCase() == filter.toLocaleLowerCase()
        );
    }

     findOne(filter: string): Promise<TRepository> {
        return Database.registers.find(
            register =>
                register.job.toLocaleLowerCase() == filter.toLocaleLowerCase()
                || register.name.toLocaleLowerCase() == filter.toLocaleLowerCase()
        );
    }

     addView(id: number): Promise<void> {
        Database.views.push(new View(id));
    }

     getViewsByUserId(id: number): Promise<TView[]> {
        return Database.views.filter(view => view.userId == id);
    }

     findById(id: number): Promise<TRepository> {
        return Database.registers.find(
            register =>
                register.id == id
        );
    }

     update(id: number, { job, name }: IUpdateRegisterDTO): Promise<TRepository> {

        const index = Database.registers.findIndex(register => register.id == id)

        if (index == -1) return;

        if (!!job) Database.registers[index].job = job;
        if (!!name) Database.registers[index].name = name;

        return Database.registers[index];
    }

     delete(id: number): Promise<void> {
        Database.registers = Database.registers.filter(register => register.id !== id);
    }
}