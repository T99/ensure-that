/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	2:41 PM -- June 14th, 2019.
 *	Project: typit
 */

import { AbstractType } from "./abstract-type";

/**
 * A special kind of type that has a predefined/static set of acceptable values.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.6.0
 * @since v0.4.0
 */
export class EnumType<E = any> extends AbstractType<E> {
	
	/**
	 * The name of this type.
	 */
	protected typeName: string;
	
	/**
	 * An array of acceptable values for which any conforming instances of this type should hold one of the items in
	 * this array as a value.
	 *
	 * In other words, this EnumType's conformity check will pass so long as the value of any inputs passed to said
	 * method are contained in this array.
	 */
	protected acceptableValues: E[];
	
	/**
	 * Initializes a new EnumType with the provided list of acceptable values and an optional type name.
	 *
	 * If a type name is not provided, the type name will be set simply to "Enum".
	 *
	 * @param acceptableValues An array of acceptable values that conforming instances of this type should take on as
	 * values.
	 * @param typeName An optional name for this EnumType.
	 */
	public constructor(acceptableValues: E[], typeName?: string) {
	
		super();
		
		this.acceptableValues = acceptableValues;
		
		if (typeName !== undefined) this.typeName = typeName;
		else {
			
			this.typeName = "enum";
			
			// TODO [6/14/19 @ 2:50 PM] - Attempt to derive acceptableValue type and iterate over getTypeName or raw value.
			// TODO [6/15/19 @ 7:29 PM] - Remember to change the doc-comment for the constructor once this logic is changed.
			
		}
	
	}
	
	/**
	 * Returns the string name of this EnumType.
	 *
	 * @return The string name of this EnumType.
	 */
	public getTypeName(): string {
		
		return this.typeName;
		
	}
	
	/**
	 * Returns true if and only if the input value is one of the acceptable values of this EnumType.
	 *
	 * @param input Any variable to check for conformity to this EnumType.
	 * @return true if and only if the input value is one of the acceptable values of this EnumType.
	 */
	public checkConformity(input: any): boolean {
		
		return this.acceptableValues.some((value: E): boolean => (value === input));
		
	}
	
	/**
	 * Returns true if and only if the input value is equal to exactly one of the acceptable values of this EnumType.
	 *
	 * @param input Any variable to exhaustively check for conformity to this EnumType.
	 * @return true if and only if the input value is equal to exactly one of the acceptable values of this EnumType.
	 */
	public exhaustivelyCheckConformity(input: any): boolean {
		
		let once: boolean = false;
		
		for (let value of this.acceptableValues) {
			
			if (value === input) {
				
				if (once) return false;
				else once = true;
				
			}
			
		}
		
		return once;
		
	}
	
}