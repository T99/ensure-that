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
 * @version v0.5.0
 * @since v0.4.0
 */
export class IntersectionType extends ObjectType {
	
	// DOC-ME [6/15/19 @ 7:13 PM] - Documentation required!
	public constructor(types: ObjectType[], isOptional: boolean = false) {
	
		super(Merj.merge(types.map((type: ObjectType) => type.getObjectTypeDefinition())), "", isOptional);
		
		this.typeName = "";
		
		for (let type of types) {
			
			if (this.typeName !== "") this.typeName += " & ";
			this.typeName += type.getTypeName();
			
		}
	
	}
	
}