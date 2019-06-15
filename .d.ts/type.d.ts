export declare abstract class Type<E = any> {
    protected readonly isOptional: boolean;
    protected constructor(isOptional: boolean);
    getOptionality(): boolean;
    abstract getTypeName(): string;
    abstract checkConformity(input: any): boolean;
    abstract exhaustivelyCheckConformity(input: any): boolean;
    sanitize(input: any): E;
}
