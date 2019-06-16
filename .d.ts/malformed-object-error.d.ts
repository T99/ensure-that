import { Type } from "./type";
export declare class MalformedObjectError extends Error {
    readonly path: string[];
    readonly readablePath: string;
    readonly expectedType: Type;
    readonly actualType: Type;
    readonly actualValue: any;
    constructor(path: string[], expectedType: Type, actualValue: any, actualType?: Type);
    prependPath(...path: string[]): MalformedObjectError;
    toJSON(): any;
}
