/*
 * Created by Trevor Sears <trevor@trevorsears.com>.
 * 8:46 PM -- June 15th, 2019.
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

import { ObjectTypeDefinition } from "./object-type-definition";
import { ObjectIterator } from "iter-over";
import { Type } from "./type";

/**
 * Utility methods for {@link ObjectTypeDefinition}s.
 *
 * @author Trevor Sears <trevor@trevorsears.com>
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
