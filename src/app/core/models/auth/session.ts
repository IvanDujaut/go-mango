export class Session {
    
    constructor(
        private _token?: string) {   
    }

    get token(): string | undefined {
        return this._token;
    }
}
