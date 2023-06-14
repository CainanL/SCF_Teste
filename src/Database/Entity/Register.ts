import { ICreateRegisterDTO } from "../../Modules/Register/dto";
import { Database } from "../Database";

export class Register {
    id: number;
    name: string;
    job: string;

    constructor({ job, name }: ICreateRegisterDTO) {
        this.name = name;
        this.job = job;

        this.id = Database.registers.length + 1;
    }
}