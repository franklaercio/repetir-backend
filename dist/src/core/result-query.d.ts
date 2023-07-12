export declare class ResultQuery<T> {
    private res;
    constructor(res: T[] | T);
    static create<J>(res: J[] | J): ResultQuery<J>;
    normalizeResult(): T | T[];
    private normalizeManyResult;
    private normalizeOneResult;
    private clean;
}
