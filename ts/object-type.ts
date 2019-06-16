/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	7:30 PM -- May 26th, 2019.
 *	Project: typit
 */

import { ObjectIterator } from "iter-over";
import { Type } from "./type";
import { ObjectTypeDefinition } from "./object-type-definition";

/**
 * A type that represents a potentially complex, multi-level JavaScript object.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.5.0
 * @since v0.1.0
 */
export class ObjectType extends Type {
	
	/**
	 * The name of this type.
	 */
	protected typeName: string | undefined;
	
	/**
	 * The {@link ObjectTypeDefinition} that this ObjectType uses to check the conformity of provided inputs.
	 */
	protected typeDefinition: ObjectTypeDefinition;
	
	/**
	 * Initializes a new ObjectType with a given {@link ObjectTypeDefinition}, type name, and optionality.
	 *
	 * The type definition argument is optional, and if not passed will default to an empty type definition, meaning
	 * that any provided inputs will succeed given that they are objects of any form.
	 *
	 * The type name is optional as well and
	 *
	 * @param typeDefinition
	 * @param typeName
	 * @param isOptional
	 */
	public constructor(typeDefinition: ObjectTypeDefinition = {}, typeName?: string, isOptional: boolean = false) {
		
		super(isOptional);
		
		this.typeDefinition = typeDefinition;
		this.typeName = typeName;
		
	}
	
	// DOC-ME [6/15/19 @ 5:53 PM] - Documentation required!
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
	
	// DOC-ME [6/15/19 @ 5:53 PM] - Documentation required!
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
	
	// DOC-ME [6/15/19 @ 5:53 PM] - Documentation required!
	public typeDefinitionToReadableJSON(): any {
		
		return ObjectType.typeDefinitionToReadableJSON(this.typeDefinition);
		
	}
	
	// DOC-ME [6/15/19 @ 5:53 PM] - Documentation required!
	public typeDefinitionToString(): string {
		
		return ObjectType.typeDefinitionToString(this.typeDefinition);
		
	}
	
	/**
	 * Returns the string name of this ObjectType.
	 *
	 * @return The string name of this ObjectType.
	 */
	public getTypeName(): string {
		
		return "object" + (this.typeName !== undefined ? " (" + this.typeName + ")" : "");
		
	}
	
	// DOC-ME [6/15/19 @ 5:53 PM] - Documentation required!
	public getObjectTypeDefinition(): ObjectTypeDefinition {
		
		return this.typeDefinition;
		
	}
	
	/**
	 * TODO
	 *
	 * @param input Any variable to check for conformity to this ObjectType.
	 */
	public checkConformity(input: any, typeDefinition: ObjectTypeDefinition = this.typeDefinition): boolean {
		
		if (!(typeof input === "object") || (input === null)) return false;
		
		let iterator: ObjectIterator<Type | ObjectTypeDefinition> = new ObjectIterator<Type | ObjectTypeDefinition>(typeDefinition);
		
		for (let typeOrTypeDefinition of iterator) {
			
			let typePropertyName: string = typeOrTypeDefinition.key;
			
			// We're dealing with a Type, not an ObjectTypeDefinition.
			if (typeOrTypeDefinition.value.getTypeName !== undefined) {
				
				let type: Type = typeOrTypeDefinition.value as Type;
				
				// If the provided input has a property by the name defined in the type definition...
				if (input.hasOwnProperty(typePropertyName)) {
					
					// If the input's equivalent property does not conform to the type definition of said property...
					if (!type.checkConformity(input[typePropertyName])) return false;
					
				// If the value/type was not optionally defined...
				} else if (!type.isOptional()) return false;
				
			// We're dealing with a ObjectTypeDefinition, not an Type.
			} else {
				
				if (!this.checkConformity(input[typePropertyName], typeOrTypeDefinition.value as ObjectTypeDefinition)) return false;
				
			}
			
		}
		
		return true;
		
	}
	
	/**
	 * TODO
	 *
	 * @param input Any variable to exhaustively check for conformity to this ObjectType.
	 */
	public exhaustivelyCheckConformity(input: any, typeDefinition: ObjectTypeDefinition = this.typeDefinition): boolean {
		
		if (!this.checkConformity(input, typeDefinition)) return false;
		
		let iterator: ObjectIterator = new ObjectIterator(input);
		
		for (let inputKVPair of iterator) {
			
			let inputPropertyName: string = inputKVPair.key;
			let inputPropertyValue: any = input[inputPropertyName];
			
			if (typeDefinition[inputPropertyName] !== undefined) {
				
				if (typeDefinition[inputPropertyName].getTypeName !== undefined) {
					
					let type: Type = typeDefinition[inputPropertyName] as Type;
					
					if (!type.checkConformity(inputPropertyValue)) return false;
					
				} else {
					
					if (!this.exhaustivelyCheckConformity(inputPropertyValue, typeDefinition[inputPropertyName] as ObjectTypeDefinition)) return false;
					
				}
				
			} else return false;
			
		}
		
		return true;
		
	}
	
}