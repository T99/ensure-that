export declare abstract class Type<E = any> {
    protected constructor();
    isOptional(): boolean;
    abstract getTypeName(): string;
    abstract checkConformity(input: any): boolean;
    checkConformityOfAll(...input: any[]): boolean;
    abstract exhaustivelyCheckConformity(input: any): boolean;
    exhaustivelyCheckConformityOfAll(...input: any[]): boolean;
    sanitize(input: any): E;
}
