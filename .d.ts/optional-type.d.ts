import { Type } from "./type";
export declare class OptionalType<T extends Type> extends Type {
    protected typeName: string;
    protected encapsulatedType: T;
    constructor(type: T);
    isOptional(): boolean;
    getTypeName(): string;
    checkConformity(input: any): boolean;
    exhaustivelyCheckConformity(input: any): boolean;
    getEncapsulatedType(): T;
}
