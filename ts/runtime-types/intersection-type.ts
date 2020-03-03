/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:12 PM -- June 13th, 2019.
 *	Project: typit
 */

import { ObjectType } from "./object-type";
import * as Merj from "merj";
import { CompileTimeIntersectionType } from "../compile-types/compile-time-intersection-type";

/**
 * A type that combines multiple types into one.
 *
 * For example, an intersection type of the following objects:
 *
 * { "firstName": "John" }
 *
 * {
 *     "lastName": "Smith",
 *     "age": 26
 * }
 *
 * { "phone": "(123) 456 - 7890" }
 *
 * Would result in the following object:
 *
 * {
 *     "firstName": "John",
 *     "lastName": "Smith",
 *     "age": 26,
 *     "phone": "(123) 456 - 7890"
 * }
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v1.0.0
 * @since v0.4.0
 */
export class IntersectionType<E1 = any, E2 = unknown, E3 = unknown, E4 = unknown, E5 = unknown, E6 = unknown,
	E7 = unknown, E8 = unknown, E9 = unknown> extends ObjectType<CompileTimeIntersectionType<E1, E2, E3, E4, E5, E6, E7,
	E8, E9>> {
	
	/**
	 * Initializes a new IntersectionType with the provided ObjectTypes.
	 *
	 * @param types The {@link Type}s to merge in order to form the intersection of said Types.
	 */
	public constructor(...types: ObjectType[]) {
	
		super(Merj.merge(types.map((type: ObjectType) => type.getObjectTypeDefinition())), "");
		
		this.typeName = "";
		
		for (let type of types) {
			
			if (this.typeName !== "") this.typeName += " & ";
			this.typeName += type.getTypeName();
			
		}
	
	}
	
}