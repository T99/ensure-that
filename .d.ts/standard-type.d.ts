import { Type } from "./type";
declare type Validator = (input: any) => boolean;
export declare class StandardType<E> extends Type<E> {
    static readonly NUMBER: StandardType<number>;
    static readonly OPTIONAL_NUMBER: StandardType<number>;
    static readonly BOOLEAN: StandardType<boolean>;
    static readonly OPTIONAL_BOOLEAN: StandardType<boolean>;
    static readonly STRING: StandardType<string>;
    static readonly OPTIONAL_STRING: StandardType<string>;
    protected typeName: string;
    protected validator: Validator;
    protected constructor(name: string, isOptional: boolean, validator: Validator);
    getTypeName(): string;
    checkConformity(input: any): boolean;
    exhaustivelyCheckConformity(input: any): boolean;
}
export {};
