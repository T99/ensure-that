import { Type } from "./type";
export declare class OptionalType<T extends Type<E>, E = any> extends Type<E> {
    private optionalType;
    constructor(optionalType: Type<E>);
    getTypeName(): string;
    checkConformity(input: any): boolean;
    exhaustivelyCheckConformity(input: any): boolean;
}
