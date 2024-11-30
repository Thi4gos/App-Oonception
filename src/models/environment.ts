interface environment {
    acessLevel: string,
    LogedIn: boolean,
}

export class environmentClass implements environment {
    constructor(public acessLevel: string, public LogedIn: boolean){}
}