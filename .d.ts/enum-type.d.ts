import { Type } from "./type";
export declare class EnumType<E = any> extends Type {
    private typeName;
    private acceptableValues;
    constructor(acceptableValues: E[], typeName?: string, isOptional?: boolean);
    getTypeName(): string;
    checkConformity(input: any): boolean;
    exhaustivelyCheckConformity(input: any): boolean;
}
