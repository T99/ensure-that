import { Type } from "./type";
import { ObjectTypeDefinition } from "./object-type-definition";
import { MalformedObjectError } from "./malformed-object-error";
export declare class ObjectType extends Type {
    protected typeName: string;
    protected typeDefinition: ObjectTypeDefinition;
    constructor(typeDefinition?: ObjectTypeDefinition, typeName?: string);
    getTypeName(): string;
    checkConformity(input: any, typeDefinition?: ObjectTypeDefinition): boolean;
    exhaustivelyCheckConformity(input: any, typeDefinition?: ObjectTypeDefinition): boolean;
    getObjectTypeDefinition(): ObjectTypeDefinition;
    listNonConformities(input: any, typeDefinition?: ObjectTypeDefinition): MalformedObjectError[];
}
