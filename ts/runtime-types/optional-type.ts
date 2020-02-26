/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	10:18 PM -- June 15th, 2019.
 *	Project: typit
 */

import { AbstractType } from "./abstract-type";
import { Type } from "./type";
import { CompileTimeType } from "../compile-types/compile-time-type";

/**
 * A wrapper type that encapsulates other {@link Type}s in order to make them optional.
 *
 * Optionality refers to whether or not the given type must appear at all on the object which is being checked for
 * a value of 'this' Type. Keep in mind that optionality does not refer to whether or not accessing the variable
 * will return 'undefined'. As counter-intuitive as it may seem, a value may be defined as 'undefined'. To better
 * represent this problem, an example:
 *
 * 	let obj = {
 * 	    myVal: undefined
 * 	}
 *
 * 	console.log(obj.myVal);		// returns 'undefined'
 * 	console.log(obj.yourVal);	// returns 'undefined'
 *
 * Given the above demonstration, you can see that both 'non-present' (also called 'blank', etc) variables, as well
 * as 'present' and defined variables will evaluate to 'undefined'. With this understanding, it might now be easier
 * to understand what optionality is: if a value is optional it can either be 'present' and of the Type represented
 * by this class, or it can be entirely 'non-present' - both of which cases would ensure conformity to this type
 * (given that this type is defined as optional).
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.6.0
 * @since v0.6.0
 */
export class OptionalType<T extends Type, E = CompileTimeType<T>> extends AbstractType<E | undefined> {
	
	/**
	 * The name of this type.
	 */
	protected typeName: string;
	
	/**
	 * The {@link Type} encapsulated by this OptionalType.
	 */
	protected encapsulatedType: T;
	
	/**
	 * Initializes a new OptionalType with the provided {@link Type}.
	 *
	 * @param type The Type to make optional.
	 */
	public constructor(type: T) {
		
		super();
		
		this.encapsulatedType = type;
		
		if (type.getTypeName().indexOf(" ") !== -1) this.typeName = "(" + type.getTypeName() + ")?";
		else this.typeName = type.getTypeName() + "?";
		
	}
	
	/**
	 * Returns the optionality of this Type.
	 *
	 * @return true Given that this is an optional type.
	 */
	public isOptional(): boolean {
		
		return true;
		
	}
	
	/**
	 * Returns the string name of this OptionalType.
	 *
	 * @return The string name of this OptionalType.
	 */
	public getTypeName(): string {
		
		return this.typeName;
		
	}
	
	/**
	 * Returns true if and only if the input value conforms to this OptionalType's encapsulated {@link Type}.
	 *
	 * @param input Any variable to check for conformity to this OptionalType's encapsulated Type.
	 * @return true if and only if the input value conforms to this OptionalType's encapsulated Type.
	 */
	public checkConformity(input: any): boolean {
		
		return this.getEncapsulatedType().checkConformity(input);
		
	}
	
	/**
	 * Returns true if and only if the input value exhaustively conforms to this OptionalType's encapsulated
	 * {@link Type}.
	 *
	 * @param input Any variable to check for exhaustive conformity to this OptionalType's encapsulated Type.
	 * @return true if and only if the input value exhaustively conforms to this OptionalType's encapsulated Type.
	 */
	public exhaustivelyCheckConformity(input: any): boolean {
		
		return this.getEncapsulatedType().exhaustivelyCheckConformity(input);
		
	}
	
	/**
	 * Returns the Type encapsulated by this OptionalType.
	 *
	 * @return The Type encapsulated by this OptionalType.
	 */
	public getEncapsulatedType(): T {
		
		return this.encapsulatedType;
		
	}
	
}