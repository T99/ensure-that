/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	5:59 PM -- May 26th, 2019.
 *	Project: typit
 */

/**
 * An interface for classes that check for conformity to a given type at runtime.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.6.0
 * @since v0.1.0
 */
export abstract class Type<E = any> {
	
	/**
	 * Initializes a new Type.
	 */
	protected constructor() { /* Do nothing. */ }
	
	/**
	 * Returns the optionality of this Type.
	 *
	 * @return true if this Type is optional.
	 */
	public isOptional(): boolean {
		
		return false;
		
	}
	
	/**
	 * Returns the string name of this Type.
	 *
	 * @return The string name of this Type.
	 */
	public abstract getTypeName(): string;
	
	/**
	 * Returns true if and only if the input value conforms to this Type.
	 *
	 * @param input Any variable to check for conformity to this Type.
	 * @return true if and only if the input value conforms to this Type
	 */
	public abstract checkConformity(input: any): boolean;
	
	/**
	 * Returns true if and only if all members passed as arguments conform to this Type.
	 *
	 * @param input Any number of variables to check for conformity to this Type.
	 * @return true if and only if all members passed as arguments conform to this Type.
	 */
	public checkConformityOfAll(...input: any[]): boolean {
		
		return input.every((item: any): boolean => this.checkConformity(item));
		
	}
	
	/**
	 * Returns true if and only if the input value exhaustively conforms to this Type.
	 *
	 * Note that the exact definition of "exhaustively conformity" differs between Types.
	 *
	 * @param input Any variable to exhaustively check for conformity to this Type.
	 * @return true if and only if the input value exhaustively conforms to this Type.
	 */
	public abstract exhaustivelyCheckConformity(input: any): boolean;
	
	/**
	 * Returns true if and only if all members passed as arguments exhaustively conform to this Type.
	 *
	 * Note that the exact definition of "exhaustively conformity" differs between Types.
	 *
	 * @param input Any number of variables to exhaustively check for conformity to this Type.
	 * @return true if and only if all members passed as arguments exhaustively conform to this Type.
	 */
	public exhaustivelyCheckConformityOfAll(...input: any[]): boolean {
		
		return input.every((item: any): boolean => this.exhaustivelyCheckConformity(item));
		
	}
	
	/**
	 * Either returns the given input if it correctly conforms to this {@link Type}, or throws a TypeError.
	 *
	 * @param input The input to sanitize.
	 * @return The given input if it correctly conforms to this Type.
	 * @throws A TypeError if the provided input does not correctly conform to this Type.
	 */
	public sanitize(input: any): E {
		
		if (this.checkConformity(input)) return input as E;
		else {
			
			throw new TypeError("ERR | Attempted to sanitize content that did not match the desired type signature. " +
				"Type of " + input.toString() + "was not '" + this.getTypeName() + "'");
			
		}
		
	}

}