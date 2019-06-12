import { Type } from "./type";
export interface ObjectTypeDefinition {
    readonly [property: string]: Type | ObjectTypeDefinition;
}
