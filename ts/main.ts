/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	2:32 PM -- June 11th, 2019.
 *	Project: typit
 */

/**
 * NPM main class used for exporting this package's contents.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.6.0
 * @since v0.2.0
 */

// Base Classes
export { Type } from "./type";
export { AbstractType } from "./abstract-type";

// Concrete Types
export { StandardType } from "./standard-type";
export { SpecialType } from "./special-type";
export { ObjectType } from "./object-type";

// Relative Types
export { ArrayType } from "./array-type";
export { OptionalType } from "./optional-type";
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

// Object Type Definition Files
export { ObjectTypeDefinition } from "./object-type-definition";
export { ObjectTypeDefinitionUtil } from "./object-type-definition-util";

// Compile Time Types
export { CompileTimeType } from "./compile-types/compile-time-type";
export { CompileTimeIntersectionType } from "./compile-types/compile-time-intersection-type";

// Errors
export { MalformedObjectError } from "./malformed-object-error";
