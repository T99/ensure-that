/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	2:32 PM -- June 11th, 2019.
 *	Website: typit
 */

/**
 * NPM main class used for exporting this package's contents.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.3.0
 * @since v0.2.0
 */

export { Type } from "./type";
export { StandardType } from "./standard-type";
export { SpecialType } from "./special-type";
export { ArrayType } from "./array-type";
export { ObjectType } from "./object-type";
export { ObjectTypeDefinition } from "./object-type-definition";
export { EnumType } from "./enum-type";

export {
	IntersectionType,
	IntersectionType as MultiType,
	IntersectionType as AndType
} from "./intersection-type";

export {
	UnionType,
	UnionType as OrType
} from "./union-type";