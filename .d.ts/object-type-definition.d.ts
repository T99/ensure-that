import Type from "./type";
interface ObjectTypeDefinition {
    readonly [property: string]: Type | ObjectTypeDefinition;
}
export default ObjectTypeDefinition;
