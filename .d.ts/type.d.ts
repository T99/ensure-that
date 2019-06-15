export declare abstract class Type<E = any> {
    protected readonly optional: boolean;
    protected constructor(isOptional: boolean);
    isOptional(): boolean;
    abstract getTypeName(): string;
    abstract checkConformity(input: any): boolean;
    abstract exhaustivelyCheckConformity(input: any): boolean;
    sanitize(input: any): E;
}
