import { dt } from "../services/getData"

export class environmentClass {

    constructor(public acessLevel: string, public LogedIn: boolean){}
    getData(): void {
        console.log(dt)
    }
}