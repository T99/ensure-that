import { Type } from "./type";
export declare class EnumType<E = any> extends Type {
    protected typeName: string;
    protected acceptableValues: E[];
    constructor(acceptableValues: E[], typeName?: string);
    getTypeName(): string;
    checkConformity(input: any): boolean;
    exhaustivelyCheckConformity(input: any): boolean;
}
