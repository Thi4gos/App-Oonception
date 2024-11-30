interface Note {
    type: string,
    properys: {
        height: string,
        width: string
    }
}

export class Noteclass implements Note {
    constructor(public type: string, public properys: { height: string, width: string }) {}
}
