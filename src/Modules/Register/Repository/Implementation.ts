import { Database } from "../../../Database/Database";
import { Register } from "../../../Database/Entity/Register";
import { View } from "../../../Database/Entity/View";
import { AppError } from "../../../shared/service/Errors";
import { ICreateRegisterDTO, IUpdateRegisterDTO, TRepository, TView } from "../dto";
import { IRegisterRepository } from "./IRepository";

export class RegisterRepository implements IRegisterRepository {

    create(data: ICreateRegisterDTO): TRepository {
        try {
            const newRegister = new Register(data);
            Database.registers.push(newRegister);
            return newRegister;
        } catch (error) {
            throw error;
        }
    }

    search(filter: string): TRepository[] {
        try {
            if (!filter || filter == '') return Database.registers;

            return Database.registers.filter(
                register =>
                    register.job.toLocaleLowerCase() == filter.toLocaleLowerCase()
                    || register.name.toLocaleLowerCase() == filter.toLocaleLowerCase()
            );
        } catch (error) {
            throw error;
        }
    }

    findOne(filter: string): TRepository {
        try {
            return Database.registers.find(
                register =>
                    register.job.toLocaleLowerCase() == filter.toLocaleLowerCase()
                    || register.name.toLocaleLowerCase() == filter.toLocaleLowerCase()
            );
        } catch (error) {
            throw error;
        }
    }

    addView(id: number): void {
        try {
            Database.views.push(new View(id));
        } catch (error) {
            throw error;
        }
    }

    getViewsByUserId(id: number): TView[] {
        try {
            return Database.views.filter(view => view.userId == id);
        } catch (error) {
            throw error;
        }
    }

    findById(id: number): TRepository {
        try {
            return Database.registers.find(
                register =>
                    register.id == id
            );
        } catch (error) {
            throw error;
        }
    }

    update(id: number, { job, name }: IUpdateRegisterDTO): TRepository {
        try {
            const index = Database.registers.findIndex(register => register.id == id)

            if (index == -1) throw new AppError('Register not found', 404);

            if (!!job) Database.registers[index].job = job;
            if (!!name) Database.registers[index].name = name;

            return Database.registers[index];
        } catch (error) {
            throw error;
        }
    }

    delete(id: number): void {
        try {
            Database.registers = Database.registers.filter(register => register.id !== id);
        } catch (error) {
            throw error;
        }
    }
}