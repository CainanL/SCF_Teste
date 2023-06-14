import { Database } from "../Database";

export class View {
    id: number;
    userId: number;

    constructor(id: number) {
        this.userId = id;
        this.id = Database.registers.length + 1;
    }
}