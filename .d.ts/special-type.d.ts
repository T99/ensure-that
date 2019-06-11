import Type from "./type";
declare type Validator = (input: any) => boolean;
declare class SpecialType<E> extends Type<E> {
    static readonly ANY: SpecialType<any>;
    static readonly VOID: SpecialType<void>;
    static readonly UNDEFINED: SpecialType<undefined>;
    static readonly NULL: SpecialType<null>;
    private name;
    private validator;
    protected constructor(name: string, validator: Validator);
    getTypeName(): string;
    checkConformity(input: any): boolean;
    exhaustivelyCheckConformity(input: any): boolean;
}
export default SpecialType;
