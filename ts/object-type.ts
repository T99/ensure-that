/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	7:30 PM -- May 26th, 2019.
 *	Project: typit
 */

import { Type } from "./type";
import { ObjectTypeDefinition } from "./object-type-definition";
import { MalformedObjectError } from "./malformed-object-error";
import { ObjectIterator } from "iter-over";
import { SpecialType } from "./special-type";

/**
 * A type that represents a potentially complex, multi-level JavaScript object.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.6.0
 * @since v0.1.0
 */
export class ObjectType extends Type {
	
	/**
	 * The name of this type.
	 */
	protected typeName: string;
	
	/**
	 * The {@link ObjectTypeDefinition} that this ObjectType uses to check the conformity of provided inputs.
	 */
	protected typeDefinition: ObjectTypeDefinition;
	
	/**
	 * Initializes a new ObjectType with a given {@link ObjectTypeDefinition} and type name.
	 *
	 * The type definition argument is optional, and if not passed will default to an empty type definition, meaning
	 * that any provided inputs will succeed given that they are objects of any form. Keep in mind that this includes
	 * arrays.
	 *
	 * The type name is optional as well and if not provided will default to "object".
	 *
	 * @param typeDefinition The ObjectTypeDefinition to use to check the conformity of provided inputs.
	 * @param typeName The name to use for this ObjectType. Defaults to "object".
	 */
	public constructor(typeDefinition: ObjectTypeDefinition = {}, typeName: string = "object") {
		
		super();
		
		this.typeDefinition = typeDefinition;
		this.typeName = typeName;
		
	}
	
	/**
	 * Returns the string name of this ObjectType.
	 *
	 * @return The string name of this ObjectType.
	 */
	public getTypeName(): string {
		
		return this.typeName;
		
	}
	
	/**
	 * Returns true if and only if the provided input conforms to this ObjectTypes's {@link ObjectTypeDefinition}.
	 *
	 * @param input Any variable to check for conformity to this ObjectType.
	 * @param typeDefinition The type definition to use to check the given input. This is used for recursing into
	 * objects, most outside uses will not pass an argument for this parameter.
	 * @return true if and only if the provided input conforms to this ObjectTypes's ObjectTypeDefinition.
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
	 * Returns true if and only if the provided input conforms to this ObjectTypes's {@link ObjectTypeDefinition} and
	 * contains no extra properties.
	 *
	 * In other words, the provided input must bi-directionally match the ObjectTypeDefinition.
	 *
	 * @param input Any variable to exhaustively check for conformity to this ObjectType.
	 * @param typeDefinition The type definition to use to check the given input. This is used for recursing into
	 * objects, most outside uses will not pass an argument for this parameter.
	 * @return true if and only if the provided input conforms to this ObjectTypes's ObjectTypeDefinition and contains
	 * no extra values.
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
	
	/**
	 * Returns the {@link ObjectTypeDefinition} that this ObjectType uses to check passed inputs.
	 *
	 * @return The ObjectTypeDefinition that this ObjectType uses to check passed inputs.
	 */
	public getObjectTypeDefinition(): ObjectTypeDefinition {
		
		return this.typeDefinition;
		
	}
	
	/**
	 * Generates and returns an array of {@link MalformedObjectError}s based on the input given and this ObjectType's
	 * {@link ObjectTypeDefinition}.
	 *
	 * @param input Any variable for which to generate a list of non-conformities.
	 * @param typeDefinition The type definition to use to check the given input. This is used for recursing into
	 * objects, most outside uses will not pass an argument for this parameter.
	 * @return An array of MalformedObjectErrors containing all of the non-conformities found in the provided
	 * input.
	 */
	public listNonConformities(input: any, typeDefinition: ObjectTypeDefinition = this.typeDefinition): MalformedObjectError[] {
		
		let nonConformities: MalformedObjectError[] = [];
		
		if (!(typeof input === "object") || (input === null)) {
			
			// The base object wasn't an object, report on the base object and return.
			nonConformities.push(new MalformedObjectError([], new ObjectType(), input));
			
		} else {
			
			let iterator: ObjectIterator<Type | ObjectTypeDefinition> = new ObjectIterator<Type | ObjectTypeDefinition>(typeDefinition);
			
			for (let typeOrTypeDefinition of iterator) {
				
				let typePropertyName: string = typeOrTypeDefinition.key;
				
				// We're dealing with a Type, not an ObjectTypeDefinition.
				if (typeOrTypeDefinition.value.getTypeName !== undefined) {
					
					let type: Type = typeOrTypeDefinition.value as Type;
					
					// If the provided input has a property by the name defined in the type definition...
					if (input.hasOwnProperty(typePropertyName)) {
						
						// If the input's equivalent property does not conform to the type definition of said property...
						if (!type.checkConformity(input[typePropertyName])) {
							
							nonConformities.push(new MalformedObjectError([typePropertyName], type, input[typePropertyName]));
							
						}
						
						// If the value/type was not optionally defined...
					} else if (!type.isOptional()) {
						
						nonConformities.push(new MalformedObjectError([typePropertyName], type, input[typePropertyName], SpecialType.NOT_PRESENT));
						
					}
					
					// We're dealing with a ObjectTypeDefinition, not an Type.
				} else {
					
					let nestedNonConformities: MalformedObjectError[] =
						this.listNonConformities(input[typePropertyName], typeOrTypeDefinition.value as ObjectTypeDefinition);
					
					for (let nestedNonConformity of nestedNonConformities) {
						
						nonConformities.push(nestedNonConformity.prependPath(typePropertyName));
						
					}
					
				}
				
			}
			
		}
		
		return nonConformities;
		
	}
	
	// TODO [6/15/19 @ 11:55 PM] - Add an 'exhaustivelyListNonConformities' method.
	
}