import { Type } from "./type";
declare type Validator = (input: any) => boolean;
export declare class SpecialType<E> extends Type<E> {
    static readonly ANY: SpecialType<any>;
    static readonly OPTIONAL_ANY: SpecialType<any>;
    static readonly VOID: SpecialType<void>;
    static readonly OPTIONAL_VOID: SpecialType<void>;
    static readonly UNDEFINED: SpecialType<undefined>;
    static readonly OPTIONAL_UNDEFINED: SpecialType<undefined>;
    static readonly NULL: SpecialType<null>;
    static readonly OPTIONAL_NULL: SpecialType<null>;
    private name;
    private validator;
    protected constructor(name: string, isOptional: boolean, validator: Validator);
    getTypeName(): string;
    checkConformity(input: any): boolean;
    exhaustivelyCheckConformity(input: any): boolean;
}
export {};
