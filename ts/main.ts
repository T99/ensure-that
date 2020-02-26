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
export { Type } from "./runtime-types/type";
export { AbstractType } from "./runtime-types/abstract-type";

// Concrete Types
export { StandardType } from "./runtime-types/standard-type";
export { SpecialType } from "./runtime-types/special-type";
export { ObjectType } from "./runtime-types/object-type";

// Relative Types
export { ArrayType } from "./runtime-types/array-type";
export { OptionalType } from "./runtime-types/optional-type";
export { EnumType } from "./runtime-types/enum-type";
export {
	IntersectionType,
	IntersectionType as MultiType,
	IntersectionType as AndType
} from "./runtime-types/intersection-type";
export {
	UnionType,
	UnionType as OrType
} from "./runtime-types/union-type";

// Object Type Definition Files
export { ObjectTypeDefinition } from "./runtime-types/object-type-definition";
export { ObjectTypeDefinitionUtil } from "./runtime-types/object-type-definition-util";

// Compile Time Types
export { CompileTimeType } from "./compile-types/compile-time-type";
export { CompileTimeIntersectionType } from "./compile-types/compile-time-intersection-type";

// Errors
export { MalformedObjectError } from "./malformed-object-error";
