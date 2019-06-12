export declare abstract class Type<E = any> {
    abstract getTypeName(): string;
    abstract checkConformity(input: any): boolean;
    abstract exhaustivelyCheckConformity(input: any): boolean;
    sanitize(input: any): E;
}
