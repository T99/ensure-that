import { Type } from "./type";
export declare class UnionType<E = any> extends Type<E> {
    protected typeName: string;
    protected acceptableTypes: Type[];
    constructor(...types: Type[]);
    getTypeName(): string;
    checkConformity(input: any): boolean;
    exhaustivelyCheckConformity(input: any): boolean;
}
