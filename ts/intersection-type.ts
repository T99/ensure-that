/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:12 PM -- June 13th, 2019.
 *	Website: typit
 */

import { ObjectType } from "./object-type";
import * as Merj from "merj";

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
 * @version v0.6.0
 * @since v0.4.0
 */
export class IntersectionType extends ObjectType {
	
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