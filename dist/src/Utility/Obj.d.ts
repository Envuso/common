export declare class Obj {
    static isNullOrUndefined(value: any): boolean;
    static isEmpty(value: any): boolean;
    static isNumber(value: any, tryCast?: boolean): boolean;
    static has(obj: any, property: any, includePropertyChain?: boolean): boolean;
    static toBoolean(value: any): boolean | null;
}
export default Obj;
