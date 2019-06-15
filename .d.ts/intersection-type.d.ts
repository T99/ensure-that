import { ObjectType } from "./object-type";
export declare class IntersectionType extends ObjectType {
    protected typeName: string;
    constructor(types: ObjectType[], isOptional?: boolean);
}
