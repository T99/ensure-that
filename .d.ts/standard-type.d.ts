import Type from "./type";
declare type Validator = (input: any) => boolean;
declare class StandardType<E> extends Type<E> {
    static readonly NUMBER: StandardType<number>;
    static readonly BOOLEAN: StandardType<boolean>;
    static readonly STRING: StandardType<string>;
    private name;
    private validator;
    protected constructor(name: string, validator: Validator);
    getTypeName(): string;
    checkConformity(input: any): boolean;
    exhaustivelyCheckConformity(input: any): boolean;
}
export default StandardType;
