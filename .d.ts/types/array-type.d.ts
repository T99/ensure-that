import { Type } from "./type";
export declare class ArrayType<E = any> extends Type<E[]> {
    private arrayType;
    constructor(arrayType: Type<E>);
    getTypeName(): string;
    checkConformity(input: any): boolean;
    exhaustivelyCheckConformity(input: any): boolean;
}
