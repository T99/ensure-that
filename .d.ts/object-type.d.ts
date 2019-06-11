import Type from "./type";
import ObjectTypeDefinition from "./object-type-definition";
declare class ObjectType extends Type {
    private readonly objectName;
    private readonly typeDefinition;
    constructor(typeDefinition: ObjectTypeDefinition, objectName?: string);
    static typeDefinitionToReadableJSON(typeDefinition: ObjectTypeDefinition): any;
    static typeDefinitionToString(typeDefinition: ObjectTypeDefinition): string;
    typeDefinitionToReadableJSON(): any;
    typeDefinitionToString(): string;
    getTypeName(): string;
    checkConformity(input: any, typeDefinition?: ObjectTypeDefinition): boolean;
    exhaustivelyCheckConformity(input: any, typeDefinition?: ObjectTypeDefinition): boolean;
}
export default ObjectType;
