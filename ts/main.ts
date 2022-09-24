/*
 * Created by Trevor Sears <trevor@trevorsears.com>.
 * 2:32 PM -- June 11th, 2019.
 * Project: typit
 * 
 * typit - Fully recursive runtime typechecking.
 * Copyright (C) 2022 Trevor Sears
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/**
 * NPM main class used for exporting this package's contents.
 *
 * @author Trevor Sears <trevor@trevorsears.com>
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
