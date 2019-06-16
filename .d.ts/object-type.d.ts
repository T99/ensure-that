import { Type } from "./type";
import { ObjectTypeDefinition } from "./object-type-definition";
export declare class ObjectType extends Type {
    protected typeName: string | undefined;
    protected typeDefinition: ObjectTypeDefinition;
    constructor(typeDefinition?: ObjectTypeDefinition, typeName?: string, isOptional?: boolean);
    static typeDefinitionToReadableJSON(typeDefinition: ObjectTypeDefinition): any;
    static typeDefinitionToString(typeDefinition: ObjectTypeDefinition): string;
    typeDefinitionToReadableJSON(): any;
    typeDefinitionToString(): string;
    getTypeName(): string;
    getObjectTypeDefinition(): ObjectTypeDefinition;
    checkConformity(input: any, typeDefinition?: ObjectTypeDefinition): boolean;
    exhaustivelyCheckConformity(input: any, typeDefinition?: ObjectTypeDefinition): boolean;
}
