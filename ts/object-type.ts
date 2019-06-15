/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	7:30 PM -- May 26th, 2019.
 *	Project: typit
 */

import { ObjectIterator } from "iter-over";
import { Type } from "./type";
import { ObjectTypeDefinition } from "./object-type-definition";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.3.0
 * @since v0.1.0
 */
export class ObjectType extends Type {
	
	// TODO [5/27/19 @ 12:54 AM] - Need to take into account that some properties might be optional, nullable, or explicitly undefined.
	
	protected typeName: string;
	
	protected typeDefinition: ObjectTypeDefinition;
	
	public constructor(typeDefinition: ObjectTypeDefinition, typeName: string = "", isOptional: boolean = false) {
	
		super(isOptional);
		
		this.typeDefinition = typeDefinition;
		this.typeName = typeName;
	
	}
	
	public static typeDefinitionToReadableJSON(typeDefinition: ObjectTypeDefinition): any {
		
		let iterator: ObjectIterator<Type | ObjectTypeDefinition> = new ObjectIterator<Type | ObjectTypeDefinition>(typeDefinition);
		let result: any = {};
		
		for (let element of iterator) {
			
			if (element === undefined) throw new Error("ERR | Attempted to use an undefined type definition.");
			
			if (element.value.getTypeName !== undefined) result[element.key] = (element.value as Type).getTypeName();
			else result[element.key] = ObjectType.typeDefinitionToReadableJSON(element.value as ObjectTypeDefinition);
			
		}
		
		return result;
	
	}
	
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
	
	public typeDefinitionToReadableJSON(): any {
		
		return ObjectType.typeDefinitionToReadableJSON(this.typeDefinition);
		
	}
	
	public typeDefinitionToString(): string {
		
		return ObjectType.typeDefinitionToString(this.typeDefinition);
		
	}
	
	public getTypeName(): string {
		
		return "object" + (this.typeName !== "" ? " (" + this.typeName + ")" : "");
		
	}
	
	public getObjectTypeDefinition(): ObjectTypeDefinition {
		
		return this.typeDefinition;
		
	}
	
	public checkConformity(input: any, typeDefinition: ObjectTypeDefinition = this.typeDefinition): boolean {
		
		if (!(typeof input === "object") || (input === null)) return false;
		
		let iterator: ObjectIterator<Type | ObjectTypeDefinition> = new ObjectIterator<Type | ObjectTypeDefinition>(typeDefinition);
		
		for (let element of iterator) {
			
			if (element === undefined) throw new Error("ERR | Attempted to use an undefined type definition.");
			
			let propertyName: string = element.key;
			
			// We're dealing with a Type, not an ObjectTypeDefinition.
			if (element.value.getTypeName !== undefined) {

				let type: Type = element.value as Type;
				
				// If the provided input has a property by the name defined in the type definition...
				if (input.hasOwnProperty(propertyName)) {
					
					// If the input's equivalent property does not conform to the type definition of said property...
					if (!type.checkConformity(input[propertyName])) return false;
					
				// If the value/type was not optionally defined...
				} else if (!type.isOptional()) return false;
				
			// We're dealing with a ObjectTypeDefinition, not an Type.
			} else {

				if (!this.checkConformity(input[propertyName], element.value as ObjectTypeDefinition)) return false;

			}
			
		}
		
		return true;
		
	}
	
	public exhaustivelyCheckConformity(input: any, typeDefinition: ObjectTypeDefinition = this.typeDefinition): boolean {
		
		if (!this.checkConformity(input, typeDefinition)) return false;
		
		let clonedInput: any = JSON.parse(JSON.stringify(input));
		let iterator: ObjectIterator<any> = new ObjectIterator<any>(clonedInput);
		
		for (let element of iterator) {
			
			if (element === undefined) throw new Error("ERR | Attempted to use an undefined type definition.");
			
			let propertyName: string = element.key;
			let propertyValue: any = input[propertyName];
			
			if (typeDefinition[propertyName] !== undefined) {
				
				if (typeDefinition[propertyName].getTypeName !== undefined) {
					
					let type: Type = typeDefinition[propertyName] as Type;
					
					if (!type.checkConformity(propertyValue)) return false;
					
				} else {
					
					if (!this.exhaustivelyCheckConformity(propertyValue, typeDefinition[propertyName] as ObjectTypeDefinition)) return false;
					
				}
				
			} else return false;
			
		}
		
		return true;
		
	}
	
}