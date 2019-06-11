/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	7:30 PM -- May 26th, 2019.
 *	Project: ensure-that
 */

import { IOObjectIterator } from "iter-over";
import Type from "./type";
import ObjectTypeDefinition from "./object-type-definition";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
class ObjectType extends Type {
	
	private readonly objectName: string;
	
	private readonly typeDefinition: ObjectTypeDefinition;
	
	public constructor(typeDefinition: ObjectTypeDefinition, objectName: string = "") {
	
		super();
		
		this.typeDefinition = typeDefinition;
		this.objectName = objectName;
	
	}
	
	public static typeDefinitionToReadableJSON(typeDefinition: ObjectTypeDefinition): any {
		
		let iterator: IOObjectIterator<Type | ObjectTypeDefinition> = new IOObjectIterator<Type | ObjectTypeDefinition>(typeDefinition);
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
			
			let iterator: IOObjectIterator<Type | ObjectTypeDefinition> = new IOObjectIterator<Type | ObjectTypeDefinition>(struct);
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
		
		return "object" + (this.objectName !== "" ? " (" + this.objectName + ")" : "");
		
	}
	
	// TODO [5/27/19 @ 12:54 AM] - Need to take into account that some properties might be optional, nullable, or explicitly undefined.
	
	public checkConformity(input: any, typeDefinition: ObjectTypeDefinition = this.typeDefinition): boolean {
		
		if (!(typeof input === "object") || (input === null)) return false;
		
		let iterator: IOObjectIterator<Type | ObjectTypeDefinition> = new IOObjectIterator<Type | ObjectTypeDefinition>(typeDefinition);
		
		for (let element of iterator) {
			
			if (element === undefined) throw new Error("ERR | Attempted to use an undefined type definition.");
			
			let propertyName: string = element.key;
			let propertyValue: any = input[propertyName];
			
			if (propertyValue === undefined) return false;
			
			if (element.value.getTypeName !== undefined) {
				
				let type: Type = element.value as Type;
				
				if (!type.checkConformity(propertyValue)) return false;
				
			} else {
				
				if (!this.checkConformity(propertyValue, element.value as ObjectTypeDefinition)) return false;
				
			}
			
		}
		
		return true;
		
	}
	
	public exhaustivelyCheckConformity(input: any, typeDefinition: ObjectTypeDefinition = this.typeDefinition): boolean {
		
		if (!this.checkConformity(input, typeDefinition)) return false;
		
		let clonedInput: any = JSON.parse(JSON.stringify(input));
		let iterator: IOObjectIterator<any> = new IOObjectIterator<any>(clonedInput);
		
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

export default ObjectType;