/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	6:14 PM -- May 26th, 2019.
 *	Project: typit
 */

import { Type } from "./type";
import { SpecialType } from "./special-type";

/**
 * A type that represents an Array of a given type.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v1.0.0
 * @since v0.1.0
 */
export class ArrayType<E = any> extends Type<E[]> {
	
	/**
	 * The type to which the members of the arrays passed to this ArrayType should conform.
	 *
	 * In other words, this is the type of the members of the array.
	 */
	protected arrayType: Type;
	
	/**
	 * Initializes a new ArrayType with a given member type.
	 *
	 * The `arrayType` parameter defaults to `SpecialType.ANY` so that if no arguments are passed to this constructor,
	 * inputs that are checked for conformity by the constructed type will pass so long as they are actually arrays.
	 *
	 * @param arrayType The type of the members of the array.
	 */
	public constructor(arrayType: Type<E> = SpecialType.ANY) {
	
		super();
		
		this.arrayType = arrayType;
	
	}
	
	/**
	 * Returns the string name of this ArrayType.
	 *
	 * @return The string name of this ArrayType.
	 */
	public getTypeName(): string {
		
		return "Array<" + this.arrayType.getTypeName() + ">";
		
	}
	
	/**
	 * Returns true if and only if the provided input is an array, and the array's contents conform to the given type of
	 * this ArrayType.
	 *
	 * @param input Any variable to check for conformity to this ArrayType.
	 * @return true if and only if the provided input is an array, and the array's contents conform to the given type of
	 * this ArrayType.
	 */
	public checkConformity(input: any): boolean {
		
		if (!Array.isArray(input)) return false;
		else {
			
			let inputArray: any[] = input;
			
			for (let element of inputArray) {
				
				if (!this.arrayType.checkConformity(element)) return false;
				
			}
			
		}
		
		return true;
		
	}
	
	/**
	 * Due to the fact that an exhaustive check of an array wouldn't do anything different than the normal conformity
	 * check, this method simply redirects to {@link ArrayType#checkConformity}.
	 *
	 * @param input Any variable to exhaustively check for conformity to this ArrayType.
	 * @return true if and only if the provided input is an array, and the array's contents conform to the given type of
	 * this ArrayType.
	 */
	public exhaustivelyCheckConformity(input: any): boolean {
		
		return this.checkConformity(input);
		
	}
	
}