interface User {
    name: string;
    email: string;
}

export class UserClass implements User {
    constructor(public name: string, public email: string) {} 
}
