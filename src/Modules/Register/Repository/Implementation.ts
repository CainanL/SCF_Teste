import { Database } from "../../../Database/Database";
import { Register } from "../../../Database/Entity/Register";
import { View } from "../../../Database/Entity/View";
import { ICreateRegisterDTO, IUpdateRegisterDTO, TRepository, TView } from "../dto";
import { IRegisterRepository } from "./IRepository";

export class RegisterRepository implements IRegisterRepository {
    
     create(data: ICreateRegisterDTO): TRepository {
        const newRegister = new Register(data);
        console.log(newRegister)
        Database.registers.push(newRegister);
        return newRegister;
    }

     search(filter: string): TRepository[] {
        if (!filter || filter == '') return Database.registers;

        return Database.registers.filter(
            register =>
                register.job.toLocaleLowerCase() == filter.toLocaleLowerCase()
                || register.name.toLocaleLowerCase() == filter.toLocaleLowerCase()
        );
    }

     findOne(filter: string): TRepository {
        return Database.registers.find(
            register =>
                register.job.toLocaleLowerCase() == filter.toLocaleLowerCase()
                || register.name.toLocaleLowerCase() == filter.toLocaleLowerCase()
        );
    }

     addView(id: number): void{
        Database.views.push(new View(id));
    }

     getViewsByUserId(id: number): TView[] {
        return Database.views.filter(view => view.userId == id);
    }

     findById(id: number): TRepository {
        return Database.registers.find(
            register =>
                register.id == id
        );
    }

     update(id: number, { job, name }: IUpdateRegisterDTO): TRepository {

        const index = Database.registers.findIndex(register => register.id == id)

        if (index == -1) return;

        if (!!job) Database.registers[index].job = job;
        if (!!name) Database.registers[index].name = name;

        return Database.registers[index];
    }

     delete(id: number): void{
        Database.registers = Database.registers.filter(register => register.id !== id);
    }
}