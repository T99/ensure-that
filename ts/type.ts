/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	5:59 PM -- May 26th, 2019.
 *	Project: typit
 */

/**
 * An interface for classes that check for conformity to a given type at runtime.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.5.0
 * @since v0.1.0
 */
export abstract class Type<E = any> {
	
	/**
	 * Whether or not this value is optional.
	 *
	 * @see Type#isOptional
	 */
	protected optional: boolean;
	
	/**
	 * Initializes a new Type with the given optionality.
	 *
	 * @param isOptional true if this Type should be optional.
	 */
	protected constructor(isOptional: boolean) {
	
		this.optional = isOptional;
	
	}
	
	/**
	 * Returns the optionality of this Type.
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
	 */
	public isOptional(): boolean {
		
		return this.optional;
		
	}
	
	/**
	 * Returns the name of this Type.
	 */
	public abstract getTypeName(): string;
	
	/**
	 * TODO
	 *
	 * @param input Any variable to check for conformity to this Type.
	 */
	public abstract checkConformity(input: any): boolean;
	
	public abstract exhaustivelyCheckConformity(input: any): boolean;
	
	public sanitize(input: any): E {
		
		if (this.checkConformity(input)) return input as E;
		else {
			
			throw new Error("ERR | Attempted to sanitize content that did not match the desired type signature. " +
				"Type of " + input.toString() + "was not '" + this.getTypeName() + "'");
			
		}
		
	}

}