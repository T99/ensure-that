/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	8:46 PM -- June 15th, 2019.
 *	Website: typit
 */

import { Type } from "./type";
import { ObjectTypeDefinition } from "./object-type-definition";
import { ObjectIterator } from "iter-over";

/**
 * Utility methods for {@link ObjectTypeDefinition}s.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.6.0
 * @since v0.6.0
 */
export class ObjectTypeDefinitionUtil {
	
	/**
	 * Returns a JSON representation of the provided {@link ObjectTypeDefinition}.
	 *
	 * @param typeDefinition The ObjectTypeDefinition for which to generate a JSON representation.
	 * @return A JSON representation of the provided {@link ObjectTypeDefinition}.
	 */
	public static typeDefinitionToReadableJSON(typeDefinition: ObjectTypeDefinition): any {
		
		let iterator: ObjectIterator<Type | ObjectTypeDefinition> = new ObjectIterator<Type | ObjectTypeDefinition>(typeDefinition);
		let result: any = {};
		
		for (let element of iterator) {
			
			if (element === undefined) throw new Error("ERR | Attempted to use an undefined type definition.");
			
			if (element.value.getTypeName !== undefined) result[element.key] = (element.value as Type).getTypeName();
			else result[element.key] = ObjectTypeDefinitionUtil.typeDefinitionToReadableJSON(element.value as ObjectTypeDefinition);
			
		}
		
		return result;
		
	}
	
	/**
	 * Returns a string representation of the provided {@link ObjectTypeDefinition}.
	 *
	 * @param typeDefinition The ObjectTypeDefinition for which to generate a string representation.
	 * @return A string representation of the provided {@link ObjectTypeDefinition}.
	 */
	public static typeDefinitionToString(typeDefinition: ObjectTypeDefinition): string {
		
		let structureToStringArray: (struct: ObjectTypeDefinition) => string[] = (struct: ObjectTypeDefinition): string[] => {
			
			let iterator: ObjectIterator<Type | ObjectTypeDefinition> = new ObjectIterator<Type | ObjectTypeDefinition>(struct);
			let resultLines: string[] = [];
			
			for (let element of iterator) {
				
				if (element === undefined) throw new Error("ERR | Attempted to use an undefined type definition.");
				
				if (element.value.getTypeName !== undefined) {
					
					let typeName: string = (element.value as Type).getTypeName();
					
					resultLines.push("|  " + element.key + ": " + typeName);
					
				} else {
					
					resultLines.push("|  " + element.key + ": object \u23ce");
					
					let nestedResultLines: string[] = structureToStringArray(element.value as ObjectTypeDefinition);
					
					for (let line of nestedResultLines) resultLines.push("|  " + line);
					
				}
				
			}
			
			return resultLines;
			
		};
		
		return structureToStringArray(typeDefinition).join("\n");
		
	}
	
}